import React, { Fragment } from 'react'
import './index.css'
import { IMAGEM_LOGO } from '../../Configs/config'

const Index = () => {
  return (
    <Fragment>
      <div className='index'>
        <div className='index_logo'>
          <img src={IMAGEM_LOGO}/>
          <h2>
            REDS
          </h2>
        </div>
        <div className='index_login'>
          <input
          id=''
          type='text'
          placeholder='Código da sala'
          />
          <button>
            Entrar
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Index