import React from 'react'
import { Link } from 'react-router-dom'
import './sala.css'
import { IMAGEM_SETA_ESQ, IMAGEM_SETA_DIR, IMAGEM_MAIS } from '../../Configs/config'

const Home = () => {
  return (
    <>
      <div className='sala-container'>
          <div className='criar-sala'>
              <img src={IMAGEM_MAIS}/>
              <p>Crie uma sala e divirta-se</p>
          </div>
          <div className='sala-carrossel'>
              <div className='carrossel-titulo'>
                <p>Salas disponíveis</p>
              </div>
              <div className='carrossel-salas'>
                <div className='carrossel-sala'>
                  <div className='sala-titulo'>
                    <p>Estudos de POO</p>
                    <img className='adicionar-sala' src={IMAGEM_MAIS}/>
                  </div>
                  <div className='sala-conteudo'>
                      <div className='sala-infos'>
                        <div className='sala-categoria'>
                          <p>Lógica, Estrutura de Dados</p>
                        </div>
                        <div className='sala-tipo-pergunta'>
                          <p>Verdadeiro e Falso</p>
                        </div>
                      </div>
                      <div className='sala-jogadores'>
                          <p>3 / 5</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className='carrossel-slider'>
                <div className='carrossel-ant'>
                  <img src={IMAGEM_SETA_ESQ}/>
                </div>
                <div className='carrossel-prox'>
                  <img src={IMAGEM_SETA_DIR}/>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home