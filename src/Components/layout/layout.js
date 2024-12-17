import React, { Fragment, useState } from 'react'
import SideBar from './Menu/SideBar';

const Layout = ({children}) => {

  const [toggle, setToggle] = useState(false);
  
  const toggleClick = () =>{
    setToggle(!toggle);
  }
  console.log(toggle);
  return (
    <Fragment>
      <SideBar toggle_sidebar={toggle}/>
        <main>
          {children}
        </main>
    </Fragment>
  )
}

export default Layout