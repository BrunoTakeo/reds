import React, { Fragment } from 'react'
import './index.css'
import { IMAGEM_LOGO_W } from '../../Configs/config'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <Fragment>
      <div className='index-container'>
        <div className='index-logo'>
          <img src={IMAGEM_LOGO_W}/>
          <h1>
            REDS
          </h1>
        </div>
        <div className='index-cod-entrar'>
          <input
          id=''
          type='text'
          placeholder='Código da sala'
          />
          <Link to='/entrar'
                type="button"
                title='Entrar Na Sala'
                className='entrar-botao'
          >
              Entrar
          </Link>
        </div>
        <div className='link-cadastro'>
          Uma melhor experiência?
          <Link to='/cadastro' className='cadastro-label'>
            Faça seu cadastro.
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Index