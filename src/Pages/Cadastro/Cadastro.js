import React, { Fragment } from 'react'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './cadastro.css'

const Cadastro = () => {
  return (
    <Fragment>
        <div className='cadastro-container'>
            <div className='cadastro-dados'>
                <div className='cadastro-logo'>
                    <h3>Cadastre-se</h3>
                    <img src={IMAGEM_LOGO_B}/>
                </div>
                <div className='cadastro-formulario'>
                    <div className='cadastro-item'>
                        <label htmlFor="nomeUsuario">
                            Nome de Usuário
                        </label>
                        <input type='text'/>
                    </div>
                    <div className='cadastro-item'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type='text'/>
                    </div>
                    <div className='cadastro-senhas'>
                        <div className='cadastro-item'>
                            <label htmlFor="senha">
                                Senha
                            </label>
                            <input type='password'/>
                        </div>
                        <div className='cadastro-item'>
                            <label htmlFor='confirmSenha'>
                                Confirmar Senha
                            </label>
                            <input type='password'/>
                        </div>
                    </div>
                    <div className='cadastro-botao-area'>
                        <Link className='cadastro-botao' to='/home'>
                            Cadastrar
                        </Link>
                        <div className='tem-cadastro'>
                            Ja possui cadastro?
                            <Link className='login-link' to='/login'>
                                Faça seu login.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-cadastro'>
                <h1>Olá, bem-vindo <br/> ao R.E.D.S</h1>
            </div>
        </div>
    </Fragment>
  )
}

export default Cadastro