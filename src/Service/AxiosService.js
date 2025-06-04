import axios from 'axios'
import { useCallback, useState } from 'react'
import { ACCESS_TOKEN } from '../Configs/config'

const http = axios.create ({
    baseURL: 'http://localhost:8080/rest' // v1
})

const getToken = () =>{
    const access_token = sessionStorage.getItem(ACCESS_TOKEN)
    return access_token ? access_token : null;
}

http.interceptors.request.use(function(request){
    const accessToken = getToken()

    request.headers["Accept"] = "application/json"

    if(accessToken){
        request.headers["Authorization"] = `Bearer ${accessToken}`
    }
    return request;
}, function(error){
    return Promise.reject(error)
})

const useApi = () =>{
    const [errorAxios, setErrorAxios] = useState({});
    const getData = useCallback(async(url)=>{
        try{
            const response = await http.get(url);
            setErrorAxios(null);
            return response.data;
        }
        catch(error){
            setErrorAxios(error);
        }
        finally{

        }
    },[]);

    const posData = useCallback(async(url, dados)=>{
        try{
            const response = await http.post(url, dados);
            setErrorAxios(null);
            return response.data;
        }
        catch(error){
            setErrorAxios(error);
            return null;
        }
        finally{

        }
    },[]);
    const putData = useCallback(async(id,url,dados)=>{
        try{
            const response = await http.put(`${url}${id}`,dados)
            setErrorAxios(null)
            return response.data;
        }
        catch(error){
            setErrorAxios(error)
        }
        finally{

        }
    }, [])

    const getDataById = useCallback(async(id,url)=>{
        try{
            const response = await http.get(`${url}${id}`)
            setErrorAxios(null)
            return response.data;
        }
        catch(error){
            setErrorAxios(error)
        }
        finally{

        }
    }, [])

    const deleteDataById = useCallback(async(id, url) => {
        try {
            const response = await http.delete(`${url}${id}`)
            setErrorAxios(null)
            return response.data;
        }
        catch(error) {
            setErrorAxios(error)
        }
        finally {

        }
    }, [])

     return {
        errorAxios,
        getData,
        posData,
        putData,
        getDataById,
        deleteDataById
    }
}

export default useApi