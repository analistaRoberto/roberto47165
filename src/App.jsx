import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componets/NavBar/NavBar'
import CartWidget from './componets/CartWidget/CartWidget'
import ItemListerContain from './componets/ItemListerContain/ItemListerContain'

function App()  {
  return (
    <nav>
      <div className='menu'>
        <NavBar />  
        <ItemListerContain gretting ={'Bienvenido'} />

      </div>
      
      <div className='logo' >
        <CartWidget />
       
      </div>
     
    </nav>
    
    
    
  )
} 
export default App;