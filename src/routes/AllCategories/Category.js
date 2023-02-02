import React from 'react'
import { useParams , Outlet} from 'react-router-dom'
import { useContext,useEffect ,useState} from 'react'
import { ProductsContext } from '../../context/products.context'
import ProductCard from '../../components/ProductCards/ProductCard'
import './Category.scss'



const Category = () => {
    const {category} = useParams()
    const {products} = useContext(ProductsContext)
    const [prod, setProd] = useState(products[category]);

    useEffect(() => {
        setProd(products[category])
    }, [category,products])
    
  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {prod &&
          prod.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      
    </>
  )
}

export default Category