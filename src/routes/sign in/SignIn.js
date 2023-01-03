import React from 'react'

import Signup from '../../components/Signup-form'
import LoginForm from '../../components/LoginForm'
const SignIn = () => {




  return (
    <>
    
    <div>SignIn</div>
    <div className='grid grid-cols-2 my-10'>
    <LoginForm/>
    <Signup/>
    </div>
    </>
  )
}

export default SignIn