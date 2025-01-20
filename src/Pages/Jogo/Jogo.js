import React from 'react'
import './jogo.css'
import * as BsIcons from 'react-icons/bs'
import { IMAGEM_BACK } from '../../Configs/config'

const Jogo = () => {
  return (
    <>
        <div className='jogo'>
            <div className='jogo-pergunta'>
                <div className='pergunta-conteudo'>
                    <div className='jogo-pergunta-topo'>
                        <div className='sair'>
                            <BsIcons.BsArrowLeft/>
                        </div>
                        <div className='vida'>
                            <p>4350</p>
                        </div>
                    </div>
                    <div className='cronometro'>
                        <div className='timer'>
                            <p>00:30</p>
                        </div>
                    </div>
                    <div className='enunciado'>
                        <p>Qual a função da tag 'p' na linguagem HTML?</p>
                    </div>
                </div>
            </div>
            <div className='jogo-alternativas'>
                <div className='alternativas-conteudo'>
                    <div className='alternativa-container'>
                        <div className='letra'>
                            <p>A</p>
                        </div>
                        <div className='texto'>
                            <p>Parágrafo</p>
                        </div>
                    </div>
                    <div className='alternativa-container'>
                        <div className='letra'>
                            <p>B</p>
                        </div>
                        <div className='texto'>
                            <p>Texto</p>
                        </div>
                    </div>
                    <div className='alternativa-container'>
                        <div className='letra'>
                            <p>C</p>
                        </div>
                        <div className='texto'>
                            <p>Link</p>
                        </div>
                    </div>
                    <div className='alternativa-container'>
                        <div className='letra'>
                            <p>D</p>
                        </div>
                        <div className='texto'>
                            <p>Itálico</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Jogo
