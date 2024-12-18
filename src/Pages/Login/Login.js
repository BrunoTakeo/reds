import React, { Fragment } from 'react'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './login.css';

const Login = () => {
  return (
    <Fragment>
        <div className='Info_Login'>
            <div className='Poster-Bem_vindo'>
                <h1>Bem-Vindo<br/>de volta!</h1>
            </div>
            <div className='Tabela_Login'>
                <div className='Logo_Login'>
                    <h3>Login</h3>
                    <img src={IMAGEM_LOGO_B}/>
                </div>
                <div className='Tabela_Login_Dados'>
                    <div className='Login_Dados'>
                        <div className='Form-Login'>
                            <label>
                                Email
                            </label>
                            <input type='text'>
                            </input>
                        </div>
                        <div className='Form-Login'>
                            <label>
                                Senha
                            </label>
                            <input type='password'>
                            </input>
                        </div>                        
                    </div>
                    <div className='Form-Extra'>
                        <div className='Ficar-Conta'>
                            <label>
                                <input type='checkbox'>
                                </input>
                                <p>
                                    Ficar na conta 
                                </p> 
                            </label>
                        </div>
                        <Link className='MudarSenha'>
                        Esqueceu sua senha?
                        </Link>
                    </div>
                </div>
                <div className='Area_Button_Login'>
                    <Link className='Button_Login' to='/home'>
                        Login
                    </Link>
                </div>
                <div className='NPossuiCadastro'>
                    Novo usuario?
                    <Link className='FazCadastro' to='/cadastro'>
                    Cadastre-se
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login