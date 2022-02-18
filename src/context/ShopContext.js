import { React, createContext, useState } from "react"

export const ShopContext = createContext()

export const ShopProvider = ({children}) => {
  const [cart, setCart] = useState([])
  // const [bagItem, setbagItem] = useState([])

  //const cantBagItem = () => {
  //  return bagItem.reduce((acc, prod) => 0, 0)
  //}

  const agregarAlCarrito = (item) => {
    setCart( [...cart, item] )
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const cantidadCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  }

  const vaciarCart = () => {
      setCart([])
  }

  const eliminarItem = (id) => {
      setCart( cart.filter((prod) => prod.id !== id) )
  }

  return (
    <ShopContext.Provider value={
        {
          cart,
          agregarAlCarrito,
          isInCart,
          cantidadCart,
          totalCart,
          vaciarCart,
          eliminarItem
        }
      }>
        {children}
    </ShopContext.Provider>
  )
}