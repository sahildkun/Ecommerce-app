import React from 'react'
import Products from './Products'
const ProductDisplay = ({products}) => {
    // mapping of products
  return (

    <div className='grid grid-rows-1 md:grid-cols-3 mx-10 gap-x-3'>
    {products.map(({title ,id ,imageUrl}) => 
    <Products title={title} key={id} image={imageUrl}/>
     )}
    </div>
  )
}

export default ProductDisplay