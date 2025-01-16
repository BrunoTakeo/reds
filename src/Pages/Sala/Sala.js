import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './sala.css'
import { IMAGEM_TOPICO, IMAGEM_TUTORIAL_JOGO, IMAGEM_VER } from '../../Configs/config'

const Home = () => {
  return (
    <Fragment>
      <div className='home-container'>
          <div className='bem-vindo'>
            <div className='bem-vindo-conteudo'>
              <p>Bem-vindo ao <br></br>REDS</p>
            </div>
          </div>
          <div className='veja-mais'>
            <p>Veja mais</p>
            <img src={IMAGEM_VER}/>
          </div>
          <div className='como-jogar'>
            <div className='logo-tutorial'>
              <img src={IMAGEM_TUTORIAL_JOGO}/>
              <h1>COMO JOGAR?</h1>
            </div>
            <div className='como-jogar-conteudo'>  
              <div className='topico-container'>
                  <div className='topico'>
                      <div className='topico-icon'>
                          <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='texto'>
                          <p>O jogo se trata de um quiz competitivo para testar os conhecimentos de seus participantes sobre a área de TI.</p>
                      </div>
                  </div>
                  <div className='topico'>
                      <div className='topico-icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='texto'>
                          <p>Encontre salas disponíveis ou crie a sua própria para conseguir o código de acesso.</p>
                      </div>
                  </div>
                  <div className='topico'>
                      <div className='topico-icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='texto'>
                          <p>Uma vez na sala, coloque em prática todo seu saber para sobreviver a cada resposta correta.</p>
                      </div>
                  </div>
                  <div className='topico'>
                      <div className='topico-icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='texto'>
                          <p>Se errar, seus pontos de vida decaem correspondente ao seu tempo de resposta em relação aos demais jogadores.</p>
                      </div>
                  </div>
                  <div className='topico'>
                      <div className='topico-icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='texto'>
                          <p>Sem um limite de perguntas, o jogo só acaba quando restar apenas um jogador sem seus pontos zerados.</p>
                      </div>
                  </div>
              </div>          
            </div>
          </div>
          <div className='cti'>
            <span>
              Pronto para começar ?
            </span>
            <Link className='jogo-botao' to='/sala'>
              Jogar agora
            </Link>
          </div>
      </div>
    </Fragment>
  )
}

export default Home