import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componets/NavBar/NavBar'
import CartWidget from './componets/CartWidget/CartWidget'
import ItemListerContain from './componets/ItemListerContain/ItemListerContain'
import Footer from './componets/Footer/Footer'
import ItemDetailContain from './componets/ItenDetailContain/ItemDetailContain'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
      
          <NavBar />
          <CartWidget />
       
       
          <Routes>
            <Route path='/' element= {<ItemListerContain greeting={'Todos los Productos'} />}/>
            <Route path='/category/:categoryId' element = {<ItemListerContain greeting={'Todos por Categorias'} />}/>
            <Route path='detail/:productId' element = {<ItemDetailContain greeting={'Todos los Detalles'}/> }/>
       
          </Routes>
         
       
        <Footer greeting={'Este es el Footer'} />
      </BrowserRouter>
    </>
  )
}
export default App;