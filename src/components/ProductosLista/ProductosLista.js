import { React } from 'react'
import { Footer } from '../Footer'
import { ProductosItem } from '../ProductosItem/ProductosItem'

export const ProductosLista = ( {productos} ) => {

    return (
        <div className='prod-list-container'>    
            <div className='row'>
                { productos.map( (elemento) => 
                    <ProductosItem key={elemento.id} {...elemento}/> 
                )}
            </div> 
            <Footer />
        </div>
    )
}
