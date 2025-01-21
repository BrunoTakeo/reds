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
            <div className='perfil-formulario'>
                <div className='perfil-topo'>
                    <img src={IMAGEM_PERFIL}/>
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
                        <input type='text' placeholder='Clara Soares'/>
                    </div>
                    <div className='perfil-item'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type='text' placeholder='clarasoares@mail.com.br'/>
                    </div>
                    <div className='formulario-grupo'>
                        <div className='perfil-item'>
                            <label htmlFor="senha">
                                Senha
                            </label>
                            <input type='password' placeholder='***********'/>
                        </div>
                        <div className='perfil-item'>
                            <label htmlFor="dataNasc">
                                Data de Nascimento
                            </label>
                            <input type='date'/>
                        </div>
                    </div>
                    <div className='formulario-botao'>
                        {/* <Link className='alterar-senha-botao'> Alterar Senha </Link> */}
                        <Link className='salvar-botao'> Salvar </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Perfil