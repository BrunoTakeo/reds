import React from 'react'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './cadastro.css'

const Cadastro = () => {
  return (
    <>
        <div className='cadastro-container'>
            <div className='cadastro-dados'>
                <div className='cadastro-logo'>
                    <h3>Cadastre-se</h3>
                    <img src={IMAGEM_LOGO_B}/>
                </div>
                <form className='cadastro-formulario' method='POST' onSubmit=''>
                    <div className='cadastro-item'>
                        <label htmlFor="nomeUsuario">
                            Nome de Usuário
                        </label>
                        <input 
                            required 
                            type='text'
                            id='nomeUsuario' 
                            name='nomeUsuario'
                        />
                    </div>
                    <div className='cadastro-item'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input 
                            required 
                            type='email'
                            id='email'
                            name='email'
                        />
                    </div>
                    <div className='cadastro-senhas'>
                        <div className='cadastro-item'>
                            <label htmlFor="senha">
                                Senha
                            </label>
                            <input 
                                required 
                                type='password'
                                id='senha'
                                name='senha'
                            />
                        </div>
                        <div className='cadastro-item'>
                            <label htmlFor='confirmarSenha'>
                                Confirmar Senha
                            </label>
                            <input 
                                required
                                type='password' 
                                id='confirmarSenha'
                                name='confirmarSenha'
                            />
                        </div>
                    </div>
                    <div className='cadastro-botao-area'>
                        <button className='cadastro-botao' type='submit'>
                            Cadastrar
                        </button>
                        <div className='tem-cadastro'>
                            Ja possui cadastro?
                            <Link className='login-link' to='/login'>
                                Faça seu login.
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className='banner-cadastro'>
                <h1>Olá, bem-vindo <br/> ao R.E.D.S</h1>
            </div>
        </div>
    </>
  )
}

export default Cadastro