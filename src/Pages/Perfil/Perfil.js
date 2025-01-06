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
        <div>
            <div className='PagePerfil'>
                <div>
                    <img src={IMAGEM_PERFIL}/>
                    <IoIcons.IoGameControllerOutline/>
                    <TbIcons.TbCrown/>
                    <VscIcons.VscPercentage/>
                </div>
                <div>
                    <div className=''>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Nome
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className=''>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Email
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className=''>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Senha
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className=''>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Data de Nascimento
                        </label>
                        <input type='date'>
                        </input>
                    </div>
                    <Link>
                        Alterar Senha
                    </Link>
                    <Link>
                        Salvar
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Perfil