import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs'
import './criar_sala.css'
import { Link, useNavigate } from 'react-router-dom';

const Criar_Sala = () => {
    const navigate = useNavigate();
    const [codigoSala, setCodigoSala] = useState('');
    const [formData, setFormData] = useState({
        tempo: 15,
        numJogadores: 2,
        numPerguntas: 5,
        disciplinas: [],
    });

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/criarSala', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            setCodigoSala(data.codigo); // Código dinâmico vindo do backend
            setIsModalOpen(true);
        } else {
            alert('Erro ao criar sala.');
        }
    };

  return (
    <>
      <form className='criar-sala-formulario' method='POST' onSubmit={handleSubmit}>
          <div className='tempo-container'>
            <BsIcons.BsClock/>
            <div className='tempo'>
                <select required>
                {[15, 30, 45, 60, 75, 90, 105, 120].map((tempo) => (
                    <option key={tempo} value={tempo}>
                        {tempo} s
                    </option>
                ))}
                </select>
            </div>
            <p>MAX → 02:00</p>
          </div>
          <div className='jogadores-tipo-container'>
            <div className='numero-jogadores'>
                <p>N° DE JOGADORES</p>
                <select required>
                    {[2, 3, 4, 5, 6].map((numJogadores) => (
                        <option key={numJogadores} value={numJogadores}>
                            {numJogadores} jogadores
                        </option>
                    ))}
                </select>
            </div>
            <div className='tipo-perguntas'>
                <p>N° DE PERGUNTAS</p>
                <select required>
                    {[5, 10, 15, 20, 25, 30].map((numJogadores) => (
                        <option key={numJogadores} value={numJogadores}>
                            {numJogadores} perguntas
                        </option>
                    ))}
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
            <button className='botao-salvar' type='submit' onClick={handleOpenModal}> 
                Criar Sala 
            </button>
          </div>
      </form>

      {isModalOpen && (
            <div id="modal-sala" className="modal-sala">
                <div className="modal-conteudo">
                    <div className="modal-corpo">
                        <p>O código da sua sala é</p>
                        <p className='sala-codigo'>C87P12</p>
                        <Link className='botao-ok-codigo' onClick={handleCloseModal} to={'/sala_espera'}>
                            OK
                        </Link>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Criar_Sala