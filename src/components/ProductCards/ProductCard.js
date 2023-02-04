import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';
import './ProductCard.scss'

const ProductCard = ({product , id}) => {
    const { addToCart , itemCount , setItemCount } = useContext(CartContext)
    const { imageUrl,price ,name} = product;
    
    const additemToCart = () => {
      addToCart(product)
      
    }
    
  return (
   <Link  >
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <button  onClick={additemToCart} className='bg-white text-black font-light text-2xl border-black border-2 hover:bg-gray-700 hover:text-white text-center p-2'>Add to cart</button>
    </div>
    </Link>
 
  )
}

export default ProductCard