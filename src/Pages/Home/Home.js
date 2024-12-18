import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Fragment>
        <div className='Bem_Vindo'>
          <p>Bem-Vindo Ao<b/>Reds</p>
        </div>
        <div>
          <Link>Veja Mais</Link>
          <i></i>
        </div>
        <div>
          <div>
            <img/>
            <h3>Como <br/> Jogar?</h3>
          </div>
        </div>
        <div>
          <span>
            Pronto Para Começar?
          </span>
          <Link>Jogar agora</Link>
        </div>
    </Fragment>
  )
}

export default Home