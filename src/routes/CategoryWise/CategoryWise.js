import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductID from '../../components/ProductSolo.js/ProductID'
import Category from '../AllCategories/Category'

const CategoryWise = () => {
  return (
    <Routes>
        <Route index element={<Category/>}/>
        <Route path=':id' element={<ProductID/>}/>
    </Routes>
  )
}

export default CategoryWise