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
                        <div>
                            <label>
                                Email
                            </label>
                            <input type='text'>
                            </input>
                        </div>
                        <div>
                            <label>
                                Senha
                            </label>
                            <input type='password'>
                            </input>
                        </div>                        
                    </div>
                    <div>
                        <input type='checkbox'>
                        </input>
                        Ficar na conta
                        <Link>
                        Esqueceu sua senha?
                        </Link>
                    </div>
                </div>
                <div className='Area_Button'>
                    <Link className='Button_Login'>
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