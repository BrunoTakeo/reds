import React, { Fragment, useState } from 'react'
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom';

const ShowItens = ({item}) => {
    const [open,setOpen]=useState(false);
  if (item.sub_menu){
    return(
        <Fragment>
            <div>
                <div>
                    <span>
                        {
                            item.icon && <i>{item.icon}</i>
                        }
                        {
                            item.page
                        }
                    </span>
                    <i>
                        <BsIcons.BsChevronBarDown className='app-toggle-icon'
                        onClick={()=>setOpen(!open)}/>
                    </i>
                </div>
                <div>
                    {
                        item.sub_menu.map((sub,index)=>{
                            return(
                                <ShowItens key={index} item={sub}/>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
  }else{
    return(
        <Fragment>
            <Link to={item.path || '#'}>
            {
                item.icon && <i>{item.icon}</i>
            }
            {
                item.page
            }
            </Link>
        </Fragment>
    )
  }
}

export default ShowItens