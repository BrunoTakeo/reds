import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { IMAGEM_TOPICO, IMAGEM_TUTORIAL_JOGO, IMAGEM_VER } from '../../Configs/config'

const Home = () => {
  return (
    <Fragment>
      <div className='Page_Home'>
          <div className='Bem_Vindo'>
            <div className='Bem_Vindo_Conteudo'>
              <p>Bem-vindo ao <br></br>REDS</p>
            </div>
          </div>
          <div className='Veja_Mais'>
            <p>Veja mais</p>
            <img src={IMAGEM_VER}/>
          </div>
          <div className='Como_Jogar'>
            <div className='Logo_Tutorial'>
              <img src={IMAGEM_TUTORIAL_JOGO}/>
            </div>
            <div className='Como_Jogar_Conteudo'>  
              <div className='Topico_Container'>
                  <div className='Topico'>
                      <div className='Topico_Icon'>
                          <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='Texto'>
                          <p>O jogo se trata de um quiz competitivo para testar os conhecimentos de seus participantes sobre a área de TI.</p>
                      </div>
                  </div>
                  <div className='Topico'>
                      <div className='Topico_Icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='Texto'>
                          <p>Encontre salas disponíveis ou crie a sua própria para conseguir o código de acesso.</p>
                      </div>
                  </div>
                  <div className='Topico'>
                      <div className='Topico_Icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='Texto'>
                          <p>Uma vez na sala, coloque em prática todo seu saber para sobreviver a cada resposta correta.</p>
                      </div>
                  </div>
                  <div className='Topico'>
                      <div className='Topico_Icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='Texto'>
                          <p>Se errar, seus pontos de vida decaem correspondente ao seu tempo de resposta em relação aos demais jogadores.</p>
                      </div>
                  </div>
                  <div className='Topico'>
                      <div className='Topico_Icon'>
                        <img src={IMAGEM_TOPICO}/>
                      </div>
                      <div className='Texto'>
                          <p>Sem um limite de perguntas, o jogo só acaba quando restar apenas um jogador sem seus pontos zerados.</p>
                      </div>
                  </div>
              </div>          
            </div>
          </div>
          <div className='CTI'>
            <span>
              Pronto para começar ?
            </span>
            <Link className='Button_Jogo' to='/sala'>
              Jogar agora
            </Link>
          </div>
      </div>
    </Fragment>
  )
}

export default Home