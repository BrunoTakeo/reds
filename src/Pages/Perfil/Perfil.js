import React, { Fragment } from 'react'
import { IMAGEM_PERFIL } from '../../Configs/config'
import * as IoIcons from 'react-icons/io5'
import * as TbIcons from 'react-icons/tb'
import * as VscIcons from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import './perfil.css'

const Perfil = () => {
  return (
    <Fragment>
        <div className='PagePerfil'>
            <div className='Perfil'>
                <div>
                    <img src={IMAGEM_PERFIL}/>
                    <IoIcons.IoGameControllerOutline/>
                    <TbIcons.TbCrown/>
                    <VscIcons.VscPercentage/>
                </div>
                <div className='PerfilDados'>
                    <div className='Dados-1'>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Nome
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className='Dados-2'>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Email
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className='Dados-3'>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Senha
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className='Dados-4'>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Data de Nascimento
                        </label>
                        <input type='date'>
                        </input>
                    </div>
                    <div className='Dados-button-1'>
                        <Link>
                            Alterar Senha
                        </Link>
                    </div>
                    <div className='Dados-button-2'>
                        <Link>
                            Salvar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Perfil