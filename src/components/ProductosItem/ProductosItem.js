import { React } from 'react'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

export const ProductosItem = ( {id, nombre, precio, img, desc, descuento} ) => {

    const dctoTexto = () => {
       return (
        descuento > 0 ? 
            <>
                <Card.Text className='productos-item-card-text-precio'> 
                    S/. {precio}
                </Card.Text>
                <Card.Text className='productos-item-card-text-dscto'> 
                    {descuento} %
                </Card.Text>
            </>
             : 
             <>
                <Card.Text className='productos-item-card-text-precio'> 
                    S/. {precio}
                </Card.Text>
             </>
        )
   }

    return (
        <Card className='productos-item-card'>
            <Link className='productos-item-link' to={`/detalles/${id}`}>
                <Card.Img variant='top' src={img} />
                <Card.Body className='productos-item-card-body'>
                    <div style={{padding: '7px'}}>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <div className='productos-item-card-text-importes'>
                            {dctoTexto()}
                        </div>
                    </div>
                </Card.Body>
            </Link>
        </Card>
    )
}