
import React from 'react'
import { useState , useContext} from 'react'

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
import { setCurrentUser } from '../store/user/user.action'
//initializing data before the form was submitted 
const defaulData = {
    name:'',
    email:'',
    password:'',
    confirmPassword:''
}

const Signup = () => {

    const [formdata, setFormdata] = useState(defaulData);
    const {name ,email , password,confirmPassword} = formdata;
   
    
// console.log(formdata)
const resetForm = () => {
  setFormdata(defaulData);
};

    const handleSubmit= async (event) =>{
      event.preventDefault();
      if(password !== confirmPassword ){
        alert("Passwords do not match");
      }
      if(password.length <=4){
        alert("Strong password needed")
      }

      try {
        const {user} = await createAuthUserWithEmailAndPassword(
          email,
          password
          );
          setCurrentUser(user);
        await createUserDocumentFromAuth(user,{name})
        resetForm();
      }
      catch (error){
        if (error.code === 'auth/email-already-in-use') {
          alert('Cannot create user, email already in use');
        } else {
          console.log('user creation encountered an error', error);
        }
      }
     
    }
   const handleChange = (event) => {
        const {name ,value} = event.target;
       setFormdata({...formdata,[name]:value})
    }
  return (
    <div className='  flex justify-center my-10 '>
        <form  method='post' onSubmit={handleSubmit} className="flex flex-col  bg-gray-600 p-14">
            <label>NAME</label>
            <input type="text" placeholder='enter your name' className='p-2' required onChange={handleChange} name="name" value={name}/>

            <label>Email</label>
            <input type="email" name="email"  required onChange={handleChange} value={email} />

            <label>Password</label>
            <input type="password" name="password"  required onChange={handleChange} value={password} autoComplete='on' />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword"  required onChange={handleChange} value={confirmPassword} autoComplete='on' />

            <button type="submit" className='max-w-lg bg-black text-white mt-10'>Submit</button>
        </form>
    </div>
  )
}

export default Signup