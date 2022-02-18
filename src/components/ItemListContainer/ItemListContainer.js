import { React, useEffect, useState } from "react"
import { ProductosDatos } from "../../helpers/ProductosDatos"
import { ProductosLista } from "../ProductosLista/ProductosLista"
import { useParams } from 'react-router-dom'
 
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { catId } = useParams()

    useEffect( () => {
        setLoading(true)

        ProductosDatos()
            .then((res) => {
                if (catId) {
                    setProductos( res.filter((el) => el.categoria === catId ) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => { console.log(err) } )
            .finally(() => { setLoading(false) } )
    }, [catId])

   return (
        <>
            { loading ? 
                <h2 className="prod-list-container">Cargando datos...</h2>
                : 
                <ProductosLista productos={productos}/>
            } 
        </>
    )
}