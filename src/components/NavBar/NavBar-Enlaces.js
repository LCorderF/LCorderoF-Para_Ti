import React from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from './DyC_NavLink';

export const NavBarEnlaces = () => {

    return (
            <>
            <Link to='/Catalogo-pdf' className='nav-bar-catalogo-boton'><img src="../img/mobile-store-online-store-svgrepo-com-PT01.svg" alt="Catalogo"/></Link>
            <div className='nav-bar-enlaces'>
                <NavLink to='/productos/Maquillaje' className='nav-bar-enlace'>Maquillaje</NavLink>
                <NavLink to='/productos/Accesorios' className='nav-bar-enlace'>Accesorios</NavLink>
                <NavLink to='/productos/Perfumes' className='nav-bar-enlace'>Perfumes</NavLink>
                <NavLink to='/Contacto' className='nav-bar-enlace'>Contacto</NavLink>
            </div>
            <div className='nav-bar-buscar-menu'>
                <div className='nav-bar-buscar'>
                    <input className="nav-bar-buscar-input" type="text" name="Buscar" id="Buscar" placeholder="Que desea buscar ?"/>
                    <input className="nav-bar-image_buscar" type="image" src="../img/search-svgrepo-com-PT01.svg" alt="search-svgrepo-com-PT01.svg"/>
                </div>
                <Link to='/Menu' className='nav-bar-menu'><img width={55} height={40} src="../img/menu-svgrepo-com-PT01.svg" alt="Menu"/></Link>
            </div>
        </>
    ); // return
}

export default NavBarEnlaces
