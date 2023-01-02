import React from 'react'
import { signInWithGooglePopup ,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import Signup from '../../components/Signup-form'
const SignIn = () => {


  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    // console.log(response);
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

  }

  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>click here</button>
    <Signup/>
    </>
  )
}

export default SignIn