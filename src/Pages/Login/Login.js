import React, { Fragment } from 'react'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './login.css';

const Login = () => {
  return (
    <Fragment>
        <div className='login_container'>
            <div className='banner-login'>
                <h1>Bem-Vindo<br/>de volta!</h1>
            </div>
            <div className='login-dados'>
                <div className='login-logo'>
                    <h3>Login</h3>
                    <img src={IMAGEM_LOGO_B}/>
                </div>
                <div className='login-formulario'>
                    <div className='login-item'>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className='login-item'>
                        <label htmlFor='senha'>
                            Senha
                        </label>
                        <input type='password'>
                        </input>
                    </div>                        
                    <div className='login-botao-area'>
                        <Link className='login-botao' to='/home'>
                            Login
                        </Link>
                        <div className='n-tem-cadastro'>
                            Novo usuario?
                            <Link className='cadastro-link' to='/cadastro'>
                            Cadastre-se
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login