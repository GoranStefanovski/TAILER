import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {SidebarData} from './SideBarData';
import {IconContext} from 'react-icons';
import Logo from "../Logo/Logo";

function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Router>
                <div className="navBar">
                    <div className="menuTop">
                        <div className="menuTop__left">
                            <Logo/>
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
                                        <Link id='nav-logo' to='/'>
                                            <Logo/>
                                        </Link>
                                        {SidebarData.map((item, index) => {
                                            return (<div className="nav-list">
                                                    <li key={index} className={item.cName}>
                                                        <Link to={item.path}>
                                                            {item.icon}
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
            </Router>
        </>
    );
}


export default NavBar;
