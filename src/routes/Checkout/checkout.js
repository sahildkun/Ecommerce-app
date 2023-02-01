import React from 'react'
import { Link } from 'react-router-dom'
import './checkout.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CartItem from '../../components/Cart Item/CartItem'
const Checkout = () => {
    const {cartItems , addToCart ,deleteFromCart ,clearItemFromCart ,totalPrice} = useContext(CartContext);
    
  return (
    <>
    
   
    {
    cartItems.map(item => {
     const {name,quantity,imageUrl,price} = item
    return (  
        <>
<div className='checkout-item-container'>
<div className='image-container'>
  <img src={imageUrl} alt={`${name}`} />
</div>
<span className='name'> {name} </span>
<span className='quantity'>
  <div className='arrow' onClick={() => {deleteFromCart(item)}}>
    &#10094;
  </div>
  <span className='value'>{quantity}</span>
  <div className='arrow' onClick={() => {addToCart(item)}}>
    &#10095;
  </div>
</span>
<span className='price'> {price}</span>
<div className='remove-button' onClick={() => {clearItemFromCart(item)}} >
  &#10005;
</div>

</div> 
        </>
    )
    }
  )
}
<h1 >
    total:{totalPrice}
</h1>
</>
)
}
export default Checkout;



