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
                <div className='Perfil_Principal'>
                    <img src={IMAGEM_PERFIL}/>
                    <div className='Infor_Percetual'>
                        <div>
                            <IoIcons.IoGameControllerOutline color='#F2293D'/>
                            <p>202</p>
                        </div>
                        <div>
                            <TbIcons.TbCrown color='#F2293D'/>
                            <p>31</p>
                        </div>
                        <div>
                            <VscIcons.VscPercentage color='#F2293D'/>
                            <p>15,35</p>
                        </div>
                    </div>
                </div>
                <div className='PerfilDados'>
                    <div className='Perfil_Form'>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Nome
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className='Perfil_Form'>
                        <label
                        htmlFor="nomeUsuario"
                        >
                    Email
                        </label>
                        <input type='text'>
                        </input>
                    </div>
                    <div className='Dados-2'>
                        <div className='Perfil_Form'>
                            <label
                            htmlFor="nomeUsuario"
                            >
                        Senha
                            </label>
                            <input type='text' className='senha'>
                            </input>
                        </div>
                        <div className='Perfil_Form'>
                            <label
                            htmlFor="nomeUsuario"
                            >
                        Data de Nascimento
                            </label>
                            <input type='date' className='DatadeNascimento'>
                            </input>
                        </div>
                    </div>
                    <div className='Dados-button'>
                        <Link>
                            Alterar Senha
                        </Link>
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