import React, { Fragment, useState } from 'react'
import SideBar from './Menu/SideBar';
import UpBar from './Header/Header'
import './layout.css'

const Layout = ({children}) => {

  const [toggle, setToggle] = useState(false);
  
  const toggleClick = () =>{
    setToggle(!toggle);
  }
  console.log(toggle);
  return (
    <Fragment>
      <UpBar toggle_header={toggleClick}/>
      <SideBar toggle_sidebar={toggle}/>
        <main className={toggle ? 'app-toggle active':'app-content'}>
          {children}
        </main>
    </Fragment>
  )
}

export default Layout