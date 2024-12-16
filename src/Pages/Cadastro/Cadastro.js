import React, { Fragment } from 'react'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './cadastro.css'

const Cadastro = () => {
  return (
    <Fragment>
        <div className='Info_Cadastro'>
            <div className='Info_Table'>
                <div className='Logo_Cadastre-se'>
                    <h3>Cadastre-se</h3>
                    <img src={IMAGEM_LOGO_B}/>
                </div>
                <div className='Info_Table_Dados'>
                    <div className='cadastro-1'>
                        <div className='cadastro-usuario'>
                        <div className='cadastro-form'>
                            <label
                            htmlFor="nomeUsuario"
                            >
                        Nome de Usuário
                            </label>
                            <input type='text'>
                            </input>
                        </div>
                        </div>
                    </div>
                    <div className='cadastro-2'>
                        <div className='cadastro-usuario'>
                        <div className='cadastro-form'>
                            <label
                            htmlFor="email"
                            >
                        Email
                            </label>
                            <input type='text'>
                            </input>
                        </div>
                        </div>
                    </div>
                    <div className='cadastro-3'>
                        <div className='cadastro-usuario'>
                        <div className='cadastro-form'>
                            <label
                            htmlFor="senha"
                            >
                        Senha
                            </label>
                            <input type='password'>
                            </input>
                        </div>
                        </div>
                    </div>
                    <div className='cadastro-4'>
                        <div className='cadastro-usuario'>
                        <div className='cadastro-form'>
                            <label
                            htmlFor='confirmSenha'
                            >
                        Confirmar Senha
                            </label>
                            <input type='password'>
                            </input>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='Area_Button'>
                    <Link className='Button_Cadastrar'>
                        Cadastrar
                    </Link>
                </div>
                <div className='PossuiCadastro'>
                    Ja possui cadastro?
                    <Link className='FazLogin' to='/login'>
                    Faça seu login
                    </Link>
                </div>
            </div>
            <div className='Poster'>
                <h1>Olá, bem-vindo <br/> ao R.E.D.S</h1>
            </div>
        </div>
    </Fragment>
  )
}

export default Cadastro