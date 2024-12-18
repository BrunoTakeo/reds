import React, { Fragment } from 'react'
import itens from './ShowItensDados'
import ShowItens from './ShowItens'

const SideBar = ({toggle_sidebar}) => {
  return (
    <Fragment>
        <div className={toggle_sidebar ? 'app-sidebar active' : 'app-sidebar'}>
            <h2>REDS</h2>
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