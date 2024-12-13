import React, { Fragment } from 'react'
import './index.css'
import { IMAGEM_LOGO_W } from '../../Configs/config'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <Fragment>
      <div className='index'>
        <div className='index_logo'>
          <img src={IMAGEM_LOGO_W}/>
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
          <Link to='/sala_espera'
                type="button"
                title='Entrar Na Sala'
                className='Botao_Entrar'
          >
              Entrar
          </Link>
        </div>
        <div className='FCadastro'>
          Uma melhor experiência?
          <Link to='/cadastro' className='YCadastro'>
            Faça seu cadastro.
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Index