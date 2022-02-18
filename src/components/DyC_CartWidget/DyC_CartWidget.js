import { React, useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const CartWidget = () => {

    const { cantidadCart } = useContext(ShopContext)

    return (
        <div className='button-right nav-bar-boton-circulo'>{cantidadCart()}</div>
    );
}

export default CartWidget
