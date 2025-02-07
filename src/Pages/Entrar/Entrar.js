import React, { Fragment } from 'react'
import './entrar.css'
import { IMAGEM_LOGO_W } from '../../Configs/config'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <Fragment>
      <div className='entrar-container'>
        <div className='entrar-logo'>
          <img src={IMAGEM_LOGO_W}/>
          <h1>
            REDS
          </h1>
        </div>
        <div className='entrar-nome'>
          <input
          id=''
          type='text'
          placeholder='Escreva seu nome'
          />
          <Link to='/sala_espera'
                type="button"
                title='Entrar Na Sala'
                className='entrar-botao'
          >
              Entrar
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Index