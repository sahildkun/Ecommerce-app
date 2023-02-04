import React from 'react'
import './Shop.scss'
import { useContext } from 'react'
import ProductCard from '../../components/ProductCards/ProductCard';
import { Route,Routes } from 'react-router-dom';

import { ProductsContext } from '../../context/products.context'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../AllCategories/Category';
import CategoryWise from '../CategoryWise/CategoryWise';

const Shop = () => {
  const {products } = useContext(ProductsContext);

  console.log(products);
  return (
   <>
   <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=':category/*' element={<CategoryWise/>}/>
           
   </Routes>
   </>
  )
}

export default Shop