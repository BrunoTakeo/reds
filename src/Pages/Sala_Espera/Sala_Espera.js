import React, { Fragment } from 'react'
import { IMAGEM_ICON } from '../../Configs/config'
import './sala_espera.css'

const Sala_Espera = () => {
  return (
    <Fragment>
      <div className='Sa_Es'>
        <h2>Esperando jogadores...</h2>
        <h3>1/6</h3>
        <div className='Jogadores'>
          <div className='Jogador'>
            <label>
              <img src={IMAGEM_ICON}/>
            </label>
            <p>Brunotakeo</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sala_Espera