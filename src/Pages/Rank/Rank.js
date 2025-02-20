import React from 'react'
import './rank.css';
import * as FaIcons from 'react-icons/fa'

const Rank = () => {
  return (
    <>
      <div className='rank-container'>
        <div className='rank-breve'>
            <FaIcons.FaPersonBooth/>
            <p>Em breve</p>
        </div>
     </div>
    </>
  )
}

export default Rank
