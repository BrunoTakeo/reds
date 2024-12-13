import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Index from '../Pages/Index/Index'
import Sala_Espera from '../Pages/Sala_Espera/Sala_Espera'

const Rotas = () => {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path='/sala_espera' element={<Sala_Espera/>}/>
            </Route>
        </Routes>
    </Fragment>
  )
}

export default Rotas