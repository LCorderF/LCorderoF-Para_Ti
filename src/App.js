import { React } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from "./components/NavBar/DyC_NavBar";
import { Nosotros } from './components/Nosotros'
import { Contacto } from './components/Contacto'
import { ProductoDetallesContainer } from "./components/ProductoDetallesContainer/ProductoDetallesContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CambiosDevoluciones } from "./components/CambiosDevoluciones";
import { ShopProvider } from './context/ShopContext'
import { ShopCar } from "./components/DyC_ShopCar/DyC_ShopCar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar/>          
        <Routes>
          <Route exact path="/" element={ <ItemListContainer/> }/>
          <Route exact path="/nosotros" element={ <Nosotros /> } />
          <Route exact path="/contacto" element={ <Contacto /> } />
          <Route exact path="/shopcar"  element={ <ShopCar /> } />
          <Route exact path='/cambdevol'  element={ <CambiosDevoluciones/> } />
          <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
          <Route path='/detalles/:itemId' element={ <ProductoDetallesContainer/> }/>
          <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  )
}

export default App;
