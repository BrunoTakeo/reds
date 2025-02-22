import React, {useState} from 'react'
import { IMAGEM_LOGO_B } from '../../Configs/config'
import { Link } from 'react-router-dom'
import './cadastro.css'

const Cadastro = () => {

    const [formData, setFormData] = useState({
        nome_usuario: '',
        email: '',
        senha: '',
        confirmarSenha: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.senha !== formData.confirmarSenha) {
          alert('As senhas não coincidem!');
          return;
        }
    
        try {
          const response = await fetch('http://localhost:8080/api/usuarios/cadastrar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nome_usuario: formData.nome_usuario,
              email: formData.email,
              senha: formData.senha
            }),
          });
    
          if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
          }
    
          const data = await response.json();
          alert('Cadastro realizado com sucesso!');
          console.log(data);
    
        } catch (error) {
          console.error('Erro:', error);
          alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <>
            <div className='cadastro-container'>
                <div className='cadastro-dados'>
                    <div className='cadastro-logo'>
                        <h3>Cadastre-se</h3>
                        <img src={IMAGEM_LOGO_B}/>
                    </div>
                    <form className='cadastro-formulario' method='POST' onSubmit={handleSubmit}>
                        <div className='cadastro-item'>
                            <label htmlFor="nome_usuario">
                                Nome de Usuário
                            </label>
                            <input 
                                required 
                                type='text'
                                id='nome_usuario' 
                                name='nome_usuario'
                                value={formData.nomeUsuario}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='cadastro-item'>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input 
                                required 
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='cadastro-senhas'>
                            <div className='cadastro-item'>
                                <label htmlFor="senha">
                                    Senha
                                </label>
                                <input 
                                    required 
                                    type='password'
                                    id='senha'
                                    name='senha'
                                    value={formData.senha}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='cadastro-item'>
                                <label htmlFor='confirmarSenha'>
                                    Confirmar Senha
                                </label>
                                <input 
                                    required
                                    type='password' 
                                    id='confirmarSenha'
                                    name='confirmarSenha'
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='cadastro-botao-area'>
                            <button className='cadastro-botao' type='submit'>
                                Cadastrar
                            </button>
                            <div className='tem-cadastro'>
                                Ja possui cadastro?
                                <Link className='login-link' to='/login'>
                                    Faça seu login.
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='banner-cadastro'>
                    <h1>Olá, bem-vindo <br/> ao R.E.D.S</h1>
                </div>
            </div>
        </>
    )
}

export default Cadastro