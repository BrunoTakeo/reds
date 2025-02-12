import React, { useRef } from 'react';
import { anterior, proximo } from './Slider';
import { IMAGEM_SETA_ESQ, IMAGEM_SETA_DIR, IMAGEM_MAIS, IMAGEM_LOGO_W } from '../../Configs/config'
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './sala.css'

const Sala = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className='sala-container'>
          <div className='criar-sala'>
            <Link className='criar-sala-logo' to="/criar_sala">
              <svg width="30" height="30" viewBox="0 0 33 33" stroke='currentColor' fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.592 30.832V0.368H21.448V30.832H11.592ZM0.712 20.272V10.928H32.264V20.272H0.712Z"/>
              </svg>
            </Link>
            <p>Crie uma sala e divirta-se</p>
          </div>
          <div className='sala-carrossel'>
              <div className='carrossel-titulo'>
                <p>Salas disponíveis</p>
              </div>
              <div className='carrossel-salas' ref={sliderRef}>
                
                {/* 1 */}
                <div className='carrossel-sala'>
                  <div className='sala-titulo'>
                    <img className='sala-logo' src={IMAGEM_LOGO_W}/>
                    <img className='adicionar-sala' src={IMAGEM_MAIS}/>
                  </div>
                  <div className='sala-conteudo'>
                      <div className='sala-infos'>
                        <div className='sala-categoria'>
                          <p>Lógica, Estrutura de Dados</p>
                        </div>
                        <div className='sala-numero-perguntas'>
                          <p>20 perguntas</p>
                        </div>
                      </div>
                      <div className='sala-jogadores'>
                          <p>3 / 5</p>
                      </div>
                  </div>
                </div>
                
                {/* 2 */}
                <div className='carrossel-sala'>
                  <div className='sala-titulo'>
                    <img className='sala-logo' src={IMAGEM_LOGO_W}/>
                    <img className='adicionar-sala' src={IMAGEM_MAIS}/>
                  </div>
                  <div className='sala-conteudo'>
                      <div className='sala-infos'>
                        <div className='sala-categoria'>
                          <p>Sistemas Operacionais</p>
                        </div>
                        <div className='sala-numero-perguntas'>
                          <p>15 perguntas</p>
                        </div>
                      </div>
                      <div className='sala-jogadores'>
                          <p>2 / 5</p>
                      </div>
                  </div>
                </div>
                
                {/* 3 */}
                <div className='carrossel-sala'>
                  <div className='sala-titulo'>
                    <img className='sala-logo' src={IMAGEM_LOGO_W}/>
                    <img className='adicionar-sala' src={IMAGEM_MAIS}/>
                  </div>
                  <div className='sala-conteudo'>
                      <div className='sala-infos'>
                        <div className='sala-categoria'>
                          <p>Lógica, Estrutura de Dados</p>
                        </div>
                        <div className='sala-numero-perguntas'>
                          <p>10 perguntas</p>
                        </div>
                      </div>
                      <div className='sala-jogadores'>
                          <p>3 / 5</p>
                      </div>
                  </div>
                </div>
                
                {/* 4 */}
                <div className='carrossel-sala'>
                  <div className='sala-titulo'>
                    <img className='sala-logo' src={IMAGEM_LOGO_W}/>
                    <img className='adicionar-sala' src={IMAGEM_MAIS}/>
                  </div>
                  <div className='sala-conteudo'>
                      <div className='sala-infos'>
                        <div className='sala-categoria'>
                          <p>Lógica, Estrutura de Dados</p>
                        </div>
                        <div className='sala-numero-perguntas'>
                          <p>25 perguntas</p>
                        </div>
                      </div>
                      <div className='sala-jogadores'>
                          <p>3 / 5</p>
                      </div>
                  </div>
                </div>
                
              </div>
              <div className='carrossel-slider'>
                <div 
                  className='carrossel-ant' 
                  onClick={() => anterior(sliderRef.current)}
                >
                  <img src={IMAGEM_SETA_ESQ}/>
                </div>
                <div 
                  className='carrossel-prox' 
                  onClick={() => proximo(sliderRef.current)}
                >
                  <img src={IMAGEM_SETA_DIR}/>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Sala