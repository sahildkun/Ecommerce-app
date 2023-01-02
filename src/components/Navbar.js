import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-blue-500'>
    <div className='flex flex-auto h-16 px-10 py-5 text-white font-semibold'>
        <Link to={"/"}>
        <div>
        Ecommerce
        </div>
        </Link>
        
        <div className='flex flex-auto justify-end space-x-3'>
        <Link to={"/shop"}><h1>SHOP</h1></Link>
        <Link to={"/shop"}><h1>CONTACT</h1></Link>
        <Link to={"/sign-in"}><h1>SIGN IN</h1></Link>
        
        </div>
    </div>
    </div>
  )
}

export default Navbar