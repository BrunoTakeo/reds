import React, { Fragment } from 'react'
import { IMAGEM_ICON } from '../../Configs/config'
import './sala_espera.css'

const Sala_Espera = () => {
  return (
    <Fragment>
      <div className='waiting-container'>
        <div className='waiting-count'>
          <h2>Esperando jogadores...</h2>
          <h3>2/6</h3>
        </div>
        <div className='players'>
          <div className='player'>
            <div className='player-photo'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='player-name'>
              <p>Brunotakeo</p>
            </div>
          </div>
          <div className='player'>
            <div className='player-photo'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='player-name'>
              <p>Jonas Costa</p>
            </div>
          </div>
          <div className='player'>
            <div className='player-photo'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='player-name'>
              <p>Bochecha</p>
            </div>
          </div>
          <div className='player'>
            <div className='player-photo'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='player-name'>
              <p>Claudinho</p>
            </div>
          </div>
          <div className='player'>
            <div className='player-photo'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='player-name'>
              <p>Formosandrinho</p>
            </div>
          </div>
          <div className='player'>
            <div className='player-photo'>
              <img src={IMAGEM_ICON}/>
            </div>
            <div className='player-name'>
              <p>Michel Teló</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sala_Espera