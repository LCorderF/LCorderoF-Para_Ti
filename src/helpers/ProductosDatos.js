import { ProductosStock } from "../Data/ProductosStock"

export const ProductosDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(ProductosStock)
        }, 500)
    })
}