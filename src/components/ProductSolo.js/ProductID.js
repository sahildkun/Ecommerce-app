import React from 'react'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { ProductsContext } from '../../context/products.context'


const ProductID = () => {
  const {id,category} = useParams()
  const {products}= useContext(ProductsContext);
  
  const[individualProduct, setIndividualProduct] = useState();

  console.log(products?.[category]?.[0].name);
//   useEffect(() => {
//     setIndividualProduct(products[category].id)
// }, [category,products,id])
  

  return (
    <>
    <h2 className='category-title'>{category.toUpperCase()}</h2>
    
    <div className=''>
      <h1>{products?.[category]?.[id].name}</h1>
     </div>
     
  </>
  )
}

export default ProductID