import React, { Fragment, useState } from 'react';
import * as  FaIcons  from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi'
import './header.css';
import { IMAGEM_PERFIL } from '../../../Configs/config';
import { Link } from 'react-router-dom';

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
                <div className='Menu-Mobile'> 
                    <i>
                        <GiIcons.GiHamburgerMenu onClick={() => toggleClick()}/>
                    </i>
                </div>
                <Link className='app-profile' to="/perfil">
                    <img src={IMAGEM_PERFIL} alt="foto"/>
                    <span>Clara Soares</span>
                    <div className='app-notification'>
                        <i>
                            <FaIcons.FaBell/>
                        </i>
                    </div>
                </Link>
            </header>
        </Fragment>
    )
}

export default Header