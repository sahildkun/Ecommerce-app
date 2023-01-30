import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/user.context'
import { signOutUser } from '../utils/firebase/firebase.utils'

const Navbar = () => {
  const { currentUser , setCurrentUser} = useContext(UserContext);
  // console.log(currentUser);
  const signOuthandler =async() => {
     await signOutUser();
     setCurrentUser(null);
  
  }
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
        {
          currentUser ? (<span onClick={signOuthandler} className='hover:cursor-pointer'>SIGN OUT</span>) : 
          (<>
          <Link to={"/sign-in"}><h1>SIGN IN</h1></Link></>)
        }
        
        
        </div>
    </div>
    </div>
  )
}

export default Navbar