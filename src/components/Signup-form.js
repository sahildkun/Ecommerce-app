
import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
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
    <div>
        <form  method='post' onSubmit={handleSubmit}>
            <label>NAME</label>
            <input type="text" placeholder='enter your name' required onChange={handleChange} name="name" value={name}/>

            <label>Email</label>
            <input type="email" name="email"  required onChange={handleChange} value={email} />

            <label>Password</label>
            <input type="password" name="password"  required onChange={handleChange} value={password} />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword"  required onChange={handleChange} value={confirmPassword} />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signup