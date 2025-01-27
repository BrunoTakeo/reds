import React from 'react'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './login.css';

const Login = () => {
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