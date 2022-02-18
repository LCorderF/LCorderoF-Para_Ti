import { React, useContext} from "react"
import { ShopContext } from "../../context/ShopContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Footer } from "../Footer"
import { Link } from "react-router-dom";

export const ShopCar = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(ShopContext)

    return (
        <>
        <div className='prod-list-container'>    
            <h2>Carrito de compras</h2>
            <hr/>
            <div className="shopcar-grid">
                <div className="shopcar-grid">
                    <div className="shopcar-cell negrita">Producto</div>
                    <div className="shopcar-cell negrita">Descripción</div>
                    <div className="shopcar-cell negrita">Cantidad</div>
                    <div className="shopcar-cell negrita">Precio</div>
                    <div className="shopcar-cell negrita">Importe</div>
                    <div className="shopcar-cell negrita">Acciones</div>
                </div>
                {
                    cart.map((item) => (
                        <div key={item.id} className="shopcar-grid">
                            <div className="shopcar-cell">{item.nombre}</div>
                            <div className="shopcar-cell">{item.desc}</div>
                            <div className="shopcar-cell">
                                <input className="button-cell" type="button" onClick={() => eliminarItem(item.id)} value="+" />
                                <input className="input-cell"  type="text" value={item.cantidad} onChange={() => eliminarItem(item.id)}/>
                                <input className="button-cell" type="button" onClick={() => eliminarItem(item.id)} value="-" />
                            </div>
                            <div className="shopcar-cell">S/. {item.precio}</div>
                            <div className="shopcar-cell">S/. {item.cantidad * item.precio}</div>
                            <div className="shopcar-cell">
                                <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                                    <BsFillTrashFill/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr/>
            <h2>Total: S/.{totalCart()}</h2>

            <div className="my-2">
                <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                <Link to="/"><button className="btn btn-success mx-2">Seguir comprando</button></Link>
            </div>
            <Footer />
        </div>
        </>
        )
}