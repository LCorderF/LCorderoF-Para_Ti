import React from "react";
import CartWidget from "../DyC_CartWidget/DyC_CartWidget";
import NavBarMiLista from "./NavBar-MiLista";
import { Link } from "react-router-dom";

export const NavBarBotones = () => {

    return (
        <nav className="nav-bar-botones">
            <Link to="/" className="nav-bar-boton">
                <div className="nav-bar-boton-ic">
                    <img className="nav-bar-boton-imagen" 
                        src="../img/delivery-truck-svgrepo-com-PT01.svg" 
                        alt="delivery-truck-svgrepo-com-PT01.svg"/>
                </div>
                <span className="nav-bar-boton-link">Delivery</span>
            </Link>
            <Link to="/" className="nav-bar-boton">
                <div className="nav-bar-boton-ic">
                    <img className="nav-bar-boton-imagen" 
                        src="../img/heart-svgrepo-com-PT01.svg" 
                        alt="heart-svgrepo-com-PT01.svg"/>
                    <NavBarMiLista />
                </div>
                <span>Mi Lista</span>
            </Link>
            <Link to="/ShopCar" className="nav-bar-boton">
                <div className="nav-bar-boton-ic">
                    <img className="nav-bar-boton-imagen" 
                        src="../img/shopping-cart-svgrepo-com-PT01.svg" 
                        alt="heart-svgrepo-com-PT01.svg"/>
                    <CartWidget />
                </div>
                <span>Comprados</span>
            </Link>
            <Link to="/" className="nav-bar-boton">
                <div className="nav-bar-boton-ic">
                    <img className="nav-bar-boton-imagen" src="../img/user-svgrepo-com (2)-PT01.svg" alt="user-svgrepo-com (2)-PT01.svg"/>
                </div>
                <span>Mi cuenta</span>
            </Link>
        </nav>                
    );
}

export default NavBarBotones