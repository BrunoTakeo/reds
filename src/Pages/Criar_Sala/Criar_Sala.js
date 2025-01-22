import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs'
import './criar_sala.css'

const Criar_Sala = () => {
    const [checkboxEstado, setcheckboxEstado] = useState({
        html: false,
        css: false,
        javascript: false,
        logica: false,
        banco_de_dados: false,
        react: false,
        sistemas_operacionais: false,
    });

    const identificarCheckBox = (key) => {
        setcheckboxEstado((prevState) => ({
          ...prevState,
          [key]: !prevState[key],
        }));
    };
      

  return (
    <>
      <div className='criar-sala-formulario'>
          <div className='tempo-container'>
            <BsIcons.BsClock/>
            <div className='tempo'>
                <select required>
                    <option value="15"> 15 s </option>
                    <option value="30"> 30 s </option>
                    <option value="45"> 45 s </option>
                    <option value="60"> 60 s </option>
                    <option value="75"> 75 s </option>
                    <option value="90"> 90 s </option>
                    <option value="105"> 105 s </option>
                    <option value="105"> 120 s </option>
                </select>
            </div>
            <p>MAX → 02:00</p>
          </div>
          <div className='jogadores-tipo-container'>
            <div className='numero-jogadores'>
                <p>N° DE JOGADORES</p>
                <select required>
                    <option value="2"> 2 jogadores </option>
                    <option value="3"> 3 jogadores </option>
                    <option value="4"> 4 jogadores </option>
                    <option value="5"> 5 jogadores </option>
                    <option value="6"> 6 jogadores </option>
                </select>
            </div>
            <div className='tipo-perguntas'>
                <p>TIPO</p>
                <select required>
                    <option value="Multipla Escolha"> Múltipla Escolha </option>
                    <option value="Verdadeiro e Falso"> Verdadeiro e Falso </option>
                    <option value="Ambos"> Ambos </option>
                </select>
            </div>
          </div>
          <div className='disciplina-container'>
            <p className='disciplina-titulo'>DISCIPLINA</p>
            <div className='disciplina-itens'>
                <label 
                    className={`disciplina-item ${checkboxEstado.html ? "checked" : ""}`} 
                    htmlFor="html"
                >
                    <input 
                        type='checkbox'
                        id='html'
                        checked={checkboxEstado.html}
                        onChange={() => identificarCheckBox("html")}
                    />
                    <span>HTML</span>
                </label>
                <label 
                    className={`disciplina-item ${checkboxEstado.css ? "checked" : ""}`}
                    htmlFor="css"
                >
                    <input 
                        type='checkbox' 
                        id='css'
                        checked={checkboxEstado.css}
                        onChange={() => identificarCheckBox("css")}
                    />
                    <span>CSS</span>
                </label>
                <label 
                    className={`disciplina-item ${checkboxEstado.javascript ? "checked" : ""}`}
                    htmlFor="javascript"
                >
                    <input 
                        type='checkbox' 
                        id='javascript'
                        checked={checkboxEstado.javascript}
                        onChange={() => identificarCheckBox("javascript")}
                    />
                    <span>JavaScript</span>
                </label>
                <label 
                    className={`disciplina-item ${checkboxEstado.logica ? "checked" : ""}`}
                    htmlFor="logica"
                >
                    <input 
                        type='checkbox' 
                        id='logica'
                        checked={checkboxEstado.logica}
                        onChange={() => identificarCheckBox("logica")}
                    />
                    <span>Lógica</span>
                </label>
                <label 
                    className={`disciplina-item ${checkboxEstado.banco_de_dados ? "checked" : ""}`}
                    htmlFor="banco_de_dados"
                >
                    <input 
                        type='checkbox' 
                        id='banco_de_dados'
                        checked={checkboxEstado.banco_de_dados}
                        onChange={() => identificarCheckBox("banco_de_dados")}
                    />
                    <span>Banco de Dados</span>
                </label>
                <label 
                    className={`disciplina-item ${checkboxEstado.react ? "checked" : ""}`} 
                    htmlFor="react"
                >
                    <input 
                        type='checkbox' 
                        id='react'
                        checked={checkboxEstado.react}
                        onChange={() => identificarCheckBox("react")}
                    />
                    <span>React</span>
                </label>
                <label 
                    className={`disciplina-item ${checkboxEstado.sistemas_operacionais ? "checked" : ""}`}
                    htmlFor="sistemas_operacionais"    
                >
                    <input 
                        type='checkbox' 
                        id='sistemas_operacionais'
                        checked={checkboxEstado.sistemas_operacionais}
                        onChange={() => identificarCheckBox("sistemas_operacionais")}
                    />
                    <span>Sistemas Operacionais</span>
                </label>
            </div>
          </div>
          <div className='botao-container'>
            <Link className='botao-salvar'> Criar Sala </Link>
          </div>
      </div>
    </>
  )
}

export default Criar_Sala