import React, { Fragment } from 'react'
import { IMAGEM_ICON } from '../../Configs/config'
import './sala_espera.css'

const Sala_Espera = () => {
  return (
    <Fragment>
      <div className='sala-espera-container'>
        <div className='contagem-jogadores'>
          <h2>Esperando jogadores...</h2>
          <h3>2/6</h3>
        </div>
        <div className='jogadores'>
          <div className='jogador'>
            <div className='jogador-foto'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='jogador-nome'>
              <p>Brunotakeo</p>
            </div>
          </div>
          <div className='jogador'>
            <div className='jogador-foto'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='jogador-nome'>
              <p>Jonas Costa</p>
            </div>
          </div>
          <div className='jogador'>
            <div className='jogador-foto'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='jogador-nome'>
              <p>Bochecha</p>
            </div>
          </div>
          <div className='jogador'>
            <div className='jogador-foto'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='jogador-nome'>
              <p>Claudinho</p>
            </div>
          </div>
          <div className='jogador'>
            <div className='jogador-foto'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='jogador-nome'>
              <p>Formosandrinho</p>
            </div>
          </div>
          <div className='jogador'>
            <div className='jogador-foto'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='jogador-nome'>
              <p>Michel Teló</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sala_Espera