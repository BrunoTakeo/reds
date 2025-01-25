import React, { useEffect, useState } from 'react'
import { IMAGEM_PERFIL } from '../../Configs/config'
import * as BsIcons from 'react-icons/bs'
import './ranking.css'

const Ranking = () => {

    const [maximo, setMaximo] = useState(false);

    useEffect(() => {
        const rankingPessoas = document.querySelectorAll(".ranking-pessoa");

        if (rankingPessoas.length >= 5) {
            setMaximo(true);
        }
        else {
            setMaximo(false);
        }

    }, []);

  return (
    <>
        <div className='ranking-container'>
            <div className={`ranking-grupo ${maximo ? "ranking-max" : ""}`}>

                <div className='ranking-pessoa'>
                    <div className='ranking-foto'>
                        <img src={IMAGEM_PERFIL}/>
                        <div className='ranking-colocacao'>
                            <p>1</p>
                        </div>
                    </div>
                    <div className='ranking-dados'>
                        <h6>Clara Soares</h6>
                        <p><BsIcons.BsCheckCircleFill/> Acertou</p>
                    </div>
                    <div className='ranking-pontuacao'>
                        <h4>4750</h4>
                    </div>
                </div>

                <div className='ranking-pessoa'>
                    <div className='ranking-foto'>
                        <img src={IMAGEM_PERFIL}/>
                        <div className='ranking-colocacao'>
                            <p>2</p>
                        </div>
                    </div>
                    <div className='ranking-dados'>
                        <h6>Clara Soares</h6>
                        <p><BsIcons.BsXCircleFill/> Errou</p>
                    </div>
                    <div className='ranking-pontuacao'>
                        <h4>4230</h4>
                    </div>
                </div>

                <div className='ranking-pessoa'>
                    <div className='ranking-foto'>
                        <img src={IMAGEM_PERFIL}/>
                        <div className='ranking-colocacao'>
                            <p>3</p>
                        </div>
                    </div>
                    <div className='ranking-dados'>
                        <h6>Clara Soares</h6>
                        <p><BsIcons.BsXCircleFill/> Errou</p>
                    </div>
                    <div className='ranking-pontuacao'>
                        <h4>3450</h4>
                    </div>
                </div>

                <div className='ranking-pessoa'>
                    <div className='ranking-foto'>
                        <img src={IMAGEM_PERFIL}/>
                        <div className='ranking-colocacao'>
                            <p>4</p>
                        </div>
                    </div>
                    <div className='ranking-dados'>
                        <h6>Clara Soares</h6>
                        <p><BsIcons.BsXCircleFill/> Errou</p>
                    </div>
                    <div className='ranking-pontuacao'>
                        <h4>3450</h4>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Ranking