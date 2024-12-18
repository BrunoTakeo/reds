import React, { Fragment, useState } from 'react';
import * as  FaIcons  from 'react-icons/fa';
import './header.css';

const Header = ({toggle_header}) => {
    const [toggle,setToggle] = useState(true);

    const toggleClick = ()=>{
        setToggle(!toggle);
        toggle_header(toggle);
    }
    return (
        <Fragment>
            <header className='Area_Header'>
                <div className='Area'>
                    <h4>
                        Home
                    </h4>
                </div>
                <div className='app-profile'>
                    <img alt="foto"/>
                    <span>Clara Soares</span>
                    <div className='app-notification'>
                        <i>
                            <FaIcons.FaBell/>
                        </i>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header