import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CartItem from '../Cart Item/CartItem'
import './Cart-dropdown.scss'
const Cartdropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
        </div>
      <button className='bg-black text-white p-2'>GO TO CHECKOUT</button>
    </div>
  
  )
}

export default Cartdropdown