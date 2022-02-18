import { React } from 'react'
import {NavLink} from 'react-router-dom'
import NavBarBotones from './DyC_NavBarBotones';
import NavBarEnlaces from './NavBar-Enlaces';

export const NavBar = () => {

    return (
        <header className='nav-bar'>
            <NavLink to='/' className='brand-logo'>
                <img src='../img/DyC-Para-Ti-Logo-01.png' alt="D&C-Para-Ti-Logo-01" />
            </NavLink>
            <nav className='nav-bar-body'>
                <div className='brand-bar'>
                    <div className='brand-razsoc'>
                        <div className='razsoc'>D&C Productos para ti</div>
                    </div>
                    <NavBarBotones/>
                </div>
                <div className='nav-bar-dw'>
                    <NavBarEnlaces/>
                </div>
            </nav>
        </header>
    )
}