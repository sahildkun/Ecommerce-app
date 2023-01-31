import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import './CartIcon.scss'
import { useContext } from 'react'
const Cart = () => {
  const { isCartOpen,setIsCartOpen ,itemCount} = useContext(CartContext);

  const Toggle = () => {setIsCartOpen(!isCartOpen)}
  return (
    <div className='cart-icon-container' onClick={Toggle}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}

export default Cart