import React from 'react'
import { IMAGEM_PERFIL } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './vencedor.css'

const Vencedor = () => {

  return (
    <>
        <div className='vencedor-container'>
            <div className='vencedor'>
                <div className='vencedor-titulo'>
                    <h2>VENCEDOR</h2>
                </div>
                <div className='vencedor-perfil'>
                    <div className='vencedor-foto'>
                        <img src={IMAGEM_PERFIL}/>
                        <div className='vencedor-colocacao'>
                            <p>1</p>
                        </div>
                    </div>
                    <h5>Clara Soares</h5>
                    <div className='linha-divisor'></div>
                    <p className='vencedor-pontuacao'>4750</p>
                </div>
                <Link className='botao-ok' to='/home'> 
                    OK 
                </Link>
            </div>
        </div>
    </>
  )
}

export default Vencedor