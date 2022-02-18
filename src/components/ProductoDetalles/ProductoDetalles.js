import { React, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Footer } from "../Footer"

/*
import {useHistory} from "react-router-dom";
const history = useHistory();
<button onClick={() => history.goBack()}>Go Back</button>
*/

export const ProductoDetalles = ({id, nombre, img, desc, precio, stock, codprod, descuento}) => {
    const [cantidad, setCantidad] = useState(0)
    const { agregarAlCarrito, isInCart } = useContext(ShopContext)
    // const { BolsaAgregarItem, enBolsa } = useContext(ShopContext)

    const DatosPrecio = () => {
        const conDscto = (descuento > 0);

        return (
        conDscto ?
            <>
                <hr/>
                <div className="prod-detalles-dscto">
                    <div className="detalles-dscto">Precio Normal : S/. {precio}</div>
                    <div className="detalles-dscto resaltar">Descuento: S/. {precio * (descuento / 100)}</div>
                    <div className="detalles-dscto-box resaltar">
                        <div>{descuento} %</div>
                    </div>
                </div>
                <h4>Precio Oferta!!! : S/. {precio - (precio * (descuento/ 100))}</h4>
                <hr/>
            </>
        :
            <h5>Precio : S/. {precio}</h5>
        )
    };

    const DatosInCart = () => {
        return (
            isInCart(id) 
            ?   <Link to="/" className="btn btn-success my-3">
                    Seguir comprando
                </Link>
            :
                <>
                    <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
                    <button className="btn btn-primary my-2" onClick={handleAgregar}>
                        Agregar al carrito
                    </button>
                    <Link to="/" className="btn  btn-outline-primary mx-3">
                        Seguir comprando
                    </Link>
                </>
        )
    }

    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, desc, nombre, precio, stock, cantidad, descuento
            }
    
            agregarAlCarrito(addItem)
        }
    }

    return (
        <>
        <div className="prod-detalles">
            <div>
                <img src={img} alt={nombre}/>
            </div>
            <div className="datos-vertical">
                <div className="prod-detalles-datos">
                    <h2>{nombre}</h2>
                    <h3>{desc}</h3>
                    <h5>Código: {codprod}</h5>
                    <DatosPrecio />
                    <h5>Disponible: {stock} unidades</h5>
                    <DatosInCart />
                    <br/><br/>
                    <h5>[icono] Disponible Despacho a domicilio</h5>
                    <h5>[icono] Disponible Retiro en tienda</h5>
                </div>
            </div>
        </div>
        <div>
            <p>
                Satisfacción garantizada, para cambios o devoluciones solicite <Link to='/cambdevol'>más información </Link>
                <br/>
                Si tu producto requiere ser armado o instalado, recuerda debe ser realizado por el técnico de la marca para que mantenga la garantía.
            </p>
        </div>
        <Footer />
        </>
    )
}