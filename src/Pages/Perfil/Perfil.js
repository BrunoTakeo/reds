import React from 'react'
import { IMAGEM_PERFIL } from '../../Configs/config'
import * as IoIcons from 'react-icons/io5'
import * as TbIcons from 'react-icons/tb'
import * as VscIcons from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import './perfil.css'

const Perfil = () => {

  return (
    <>
        <div className='perfil-container'>
            <form className='perfil-formulario' method='POST' onSubmit=''>
                <div className='perfil-topo'>
                    <input type='file' id='upload'/>
                    <label htmlFor='upload' className='perfil-foto'>
                        <img src={IMAGEM_PERFIL}/>
                        <div className='perfil-foto-icon'>
                            <IoIcons.IoCamera/>
                        </div>
                    </label>
                    <div className='estatistica'>
                        <div className='estatistica-item'>
                            <IoIcons.IoGameControllerOutline color='#F2293D'/>
                            <p>202</p>
                        </div>
                        <div className='estatistica-item'>
                            <TbIcons.TbCrown color='#F2293D'/>
                            <p>31</p>
                        </div>
                        <div className='estatistica-item'>
                            <VscIcons.VscPercentage color='#F2293D'/>
                            <p>15,35</p>
                        </div>
                    </div>
                </div>
                <div className='perfil-dados'>
                    <div className='perfil-item'>
                        <label htmlFor="nomeUsuario">
                            Nome
                        </label>
                        <input
                            type='text'
                            id='nomeUsuario' 
                            name='nomeUsuario'
                            placeholder='Clara Soares'
                        />
                    </div>
                    <div className='perfil-item'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='clarasoares@mail.com.br'
                        />
                    </div>
                    <div className='formulario-grupo'>
                        <div className='perfil-item'>
                            <label htmlFor="senha">
                                Senha
                            </label>
                            <input
                                type='password'
                                id='senha'
                                name='senha'
                                placeholder='***********'
                            />
                        </div>
                        <div className='perfil-item'>
                            <label htmlFor="dataNasc">
                                Data de Nascimento
                            </label>
                            <input
                                type='date'
                                id='dataNasc'
                                name='dataNasc'
                                placeholder='12/12/2002'
                            />
                        </div>
                    </div>
                    <div className='formulario-botao'>
                        <Link className='alterar-senha-botao'> 
                            Excluir 
                        </Link>
                        <button className='excluir-botao' type='submit'> 
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Perfil