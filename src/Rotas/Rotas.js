import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Index from '../Pages/Index/Index'
import Entrar from '../Pages/Entrar/Entrar'
import Sala_Espera from '../Pages/Sala_Espera/Sala_Espera'
import Jogo from '../Pages/Jogo/Jogo'
import Ranking from '../Pages/Ranking/Ranking'
import Vencedor from '../Pages/Vencedor/Vencedor'
import Cadastro from '../Pages/Cadastro/Cadastro'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import Sala from '../Pages/Sala/Sala'
import Criar_Sala from '../Pages/Criar_Sala/Criar_Sala'
import Perfil from '../Pages/Perfil/Perfil'


const Rotas = () => {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/entrar' element={<Entrar/>}/>
            <Route path='/sala_espera' element={<Sala_Espera/>}/>
            <Route path='/jogo' element={<Jogo/>}/>
            <Route path='/ranking' element={<Ranking/>}/>
            <Route path='/vencedor' element={<Vencedor/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/sala' element={<Sala/>}/>
              <Route path='/criar_sala' element={<Criar_Sala/>}/>
              <Route path='/perfil' element={<Perfil/>}/>
            </Route>
        </Routes>
    </Fragment>
  )
}

export default Rotas