import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to={'/checkout'}><button className='bg-black text-white w-full p-2'>GO TO CHECKOUT</button></Link>
    </div>
  
  )
}

export default Cartdropdown