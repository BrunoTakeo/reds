import React, { Fragment } from 'react'
import itens from './ShowItensDados'
import ShowItens from './ShowItens'

const SideBar = ({toggle_sidebar}) => {
  return (
    <Fragment>
        <div>
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