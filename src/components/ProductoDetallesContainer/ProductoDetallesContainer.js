import { React, useEffect, useState } from 'react';
import { ProductosDatos } from '../../helpers/ProductosDatos';
import { useParams } from 'react-router-dom'
import { ProductoDetalles } from '../ProductoDetalles/ProductoDetalles';

export const ProductoDetallesContainer = () => {
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        ProductosDatos()
            .then((res) => {
                setItem( res.find((el) => el.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return (
        <div className='prod-list-container my-5'>
            {
                loading ?
                <h2>Cargando datos...</h2>
                : 
                <ProductoDetalles {...item}/>
            }
        </div>
)
};
