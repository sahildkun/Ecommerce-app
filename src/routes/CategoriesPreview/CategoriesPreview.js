import React from 'react'

import { useContext } from 'react'
import ProductCard from '../../components/ProductCards/ProductCard';

import { ProductsContext } from '../../context/products.context'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
  const {products } = useContext(ProductsContext);

  // console.log(products);
  return (
   <>


      {
        Object.keys(products).map(title => 
          { const prod = products[title] ;
           
            return <CategoryPreview key={title} title={title} products={prod}/>
}) 
      }
      
  </>
  )
}

export default CategoriesPreview