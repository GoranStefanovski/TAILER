import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SideBarData';
import {IconContext} from 'react-icons';
import Logo from "../Logo/Logo";

function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navBar">
                <div className="menuTop">
                    <div className="menuTop__left">
                        <Link to='/'>
                            <Logo/>
                        </Link>
                    </div>
                    <div className="menuTop__right">
                        <IconContext.Provider value={{color: '#fff'}}>
                            <div className='navbar'>
                                <Link to='#' className='menu-bars'>
                                    <FaIcons.FaBars onClick={showSidebar}/>
                                </Link>
                            </div>
                            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                                <ul className='nav-menu-items' onClick={showSidebar}>
                                    <li className='navbar-toggle'>

                                        <Link to='#' className='menu-bars'>
                                            <AiIcons.AiOutlineClose/>
                                        </Link>
                                    </li>
                                    <Link to='/'>
                                        <img className="nav-logo-menu" src='/Images/logo.png' alt="Logo Menu"/>
                                    </Link>
                                    {SidebarData.map((item, index) => {
                                        return (<div className="nav-list" key={index}>
                                                <li className={item.cName}>
                                                    <Link to={item.path}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>

        </>
    );
}


export default NavBar;
