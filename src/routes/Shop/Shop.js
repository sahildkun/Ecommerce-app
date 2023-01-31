import React from 'react'
import './Shop.scss'
import { useContext } from 'react'
import ProductCard from '../../components/ProductCards/ProductCard';

import { ProductsContext } from '../../context/products.context'

const Shop = () => {
  const {products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        
       <ProductCard key={product.id} product={product}/>
          ) 
      
      )}
    </div>
  )
}

export default Shop