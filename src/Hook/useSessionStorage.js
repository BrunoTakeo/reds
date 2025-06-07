import { useCallback, useState } from "react";
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../Configs/config';

const useSessionStorage = () =>{
    const [accessToken, setAcessToken] = useState(()=>
        sessionStorage.getItem(ACCESS_TOKEN)
    );

    const [refreshToken, setRefreshToken] = useState(()=>
        sessionStorage.getItem(REFRESH_TOKEN)
    );

    const gravarToken = useCallback((accessToken,refreshToken)=>{
        sessionStorage.setItem(ACCESS_TOKEN,accessToken);
        sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
    },[]);

    return {gravarToken, accessToken}
}
export default useSessionStorage;