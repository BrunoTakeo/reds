import React from 'react'
import './amigos.css';
import * as FaIcons from 'react-icons/fa'

const Amigos = () => {
  return (
    <>
      <div className='amigos-container'>
        <div className='amigos-breve'>
            <FaIcons.FaPersonBooth/>
            <p>Em breve</p>
        </div>
      </div>
    </>
  )
}

export default Amigos
