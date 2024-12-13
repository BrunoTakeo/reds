import React from 'react'
import Layout from '../Components/layout/layout';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}

export default PrivateRoute
