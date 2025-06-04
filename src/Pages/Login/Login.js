import React, {useState} from 'react'
import {useValidarDadosLogin} from '../../rules/LoginValidacaoRules'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link, useNavigate } from 'react-router-dom'
import './login.css';
import useApi from '../../Service/AxiosService';
import useAuth from '../../Hook/useAuth'; 
import {DASHBOARD, LOGIN_SYS} from '../../Configs/UrlSistema'
import { ERROR_LOGIN, LOGIN } from '../../Types/Login';

const Login = () => { 

    const navigate = useNavigate();

    const {
        model, setModel, error, setError, handleChangeField, handleBlurField
    } = useValidarDadosLogin();

    const { postData } = useApi();

    const { gravarToken } = useAuth();

    const onSubmitData = async (e) =>{
        e.preventDefault();

        console.log("Enviando model para Login:",model);

        const data = await postData(LOGIN_SYS,model);

        console.log(data)

        if(data){
            const{status, dados} =data;
            if(status===200){
                gravarToken(dados.access_token, dados.refresh_token)
                setModel(LOGIN)
                setError(ERROR_LOGIN)
                navigate(DASHBOARD)
            }
            else{
                console.log("Erro no Servidor - Login.js")
            }
        }
    }

  return (
    <>
        <div className='login_container'>
            <div className='banner-login'>
                <h1>Bem-Vindo<br/>de volta!</h1>
            </div>
            <div className='login-dados'>
                <div className='login-logo'>
                    <h3>Login</h3>
                    <img src={IMAGEM_LOGO_B}/>
                </div>
                <form className='login-formulario' method='POST' onSubmit=''>
                    <div className='login-item'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input 
                            required 
                            type="email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className='login-item'>
                        <label htmlFor="senha">
                            Senha
                        </label>
                        <input
                            required 
                            type="password"
                            id="senha"
                            name="senha"
                        />
                    </div>                        
                    <div className='login-botao-area'>
                        <button className='login-botao' type="submit">
                            Login
                        </button>
                        <div className='n-tem-cadastro'>
                            Novo usuario?
                            <Link className='cadastro-link' to='/cadastro'>
                                Cadastre-se
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login