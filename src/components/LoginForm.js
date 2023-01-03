
import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase.utils'
//initializing data before the form was submitted 
const defaulData = {

    email:'',
    password:'',
    
}
const SignInwithGoogle = async() => {
    // const response = await signInWithGooglePopup();
    // // console.log(response);
    const { user } = await signInWithGooglePopup();
     await createUserDocumentFromAuth(user);

  }

const LoginForm = () => {

    const [formdata, setFormdata] = useState(defaulData);
    const {name ,email , password,confirmPassword} = formdata;
// console.log(formdata)
const resetForm = () => {
  setFormdata(defaulData);
};

    const handleSubmit= async (event) =>{
      event.preventDefault();
      

      try {
        const response = await signInAuthUserWithEmailAndPassword(email,password);
        // console.log(response)
        resetForm();
      }
      catch (error){
        switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }
      }
     
    }
   const handleChange = (event) => {
        const {name ,value} = event.target;
       setFormdata({...formdata,[name]:value})
    }
  return (
    <div className='  flex justify-center '>
        <form  method='post' onSubmit={handleSubmit} className="flex flex-col  bg-gray-600 p-20">
            

            <label>Email</label>
            <input type="email" name="email"  required onChange={handleChange} value={email} />

            <label>Password</label>
            <input type="password" name="password"  required onChange={handleChange} value={password} />

           
            <button type="submit" className='max-w-lg bg-black text-white mt-10'>Log In</button>
            <button type="button" onClick={SignInwithGoogle} className='max-w-lg mt-2 bg-blue-500 text-white mt-10'>Google</button>
        </form>
    </div>
  )
}

export default LoginForm