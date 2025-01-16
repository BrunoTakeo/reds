import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Index from '../Pages/Index/Index'
import Entrar from '../Pages/Entrar/Entrar'
import Sala_Espera from '../Pages/Sala_Espera/Sala_Espera'
import Jogo from '../Pages/Jogo/Jogo'
import Cadastro from '../Pages/Cadastro/Cadastro'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import Perfil from '../Pages/Perfil/Perfil'
import Sala from '../Pages/Sala/Sala'


const Rotas = () => {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/entrar' element={<Entrar/>}/>
            <Route path='/sala_espera' element={<Sala_Espera/>}/>
            <Route path='/jogo' element={<Jogo/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/perfil' element={<Perfil/>}/>
              <Route path='/sala' element={<Sala/>}/>
            </Route>
        </Routes>
    </Fragment>
  )
}

export default Rotas