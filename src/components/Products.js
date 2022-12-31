import React from 'react'
// mapped component 
const Products = ({title,id,image}) => {
  return (
   <>
    <div className=' my-10 border-1 border-black  overflow-hidden'>
        <div className="  transition transform duration-500 p-24 h-full hover:scale-110 " style={{backgroundImage:`url(${image})`,backgroundRepeat:`no-repeat`,backgroundSize:`cover` }}>
       <div className='bg-white w-52 mx-auto h-full text-center p-1 border-1 border-black  hover:cursor-pointer hover:opacity-60'>
        <h1 className='text-4xl'>{title}</h1>
        <p className=''>Buy Now</p>
      </div>
 
    </div>
    </div>
  </>
  )
}

export default Products