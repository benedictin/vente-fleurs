import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Composant from './Composant'
import Footer from './Footer'
import '../icons/bootstrap-icons/bootstrap-icons.css'
import { useState } from 'react'
function App(){
  const [cart,updateCart]=useState([])
  return (
      <div>
        <Banner/>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
        <Composant/>
        <Footer/>
      </div>
  )
  
}
export default App

