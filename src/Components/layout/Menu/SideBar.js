import React, { Fragment } from 'react'
import itens from './ShowItensDados'
import ShowItens from './ShowItens'
import { Link } from 'react-router-dom';
import './sidebar.css'

const SideBar = ({toggle_sidebar}) => {
  return (
    <Fragment>
        <div className={toggle_sidebar ? 'app-sidebar active' : 'app-sidebar'}>
            <Link to='/home'> <h2>REDS</h2> </Link>
            {
                itens.map((item,index)=>{
                    return(
                        <ShowItens key={index} item={item}/>
                    )
                })
            }
        </div>
    </Fragment>
  )
}

export default SideBar