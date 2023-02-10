import './App.css';
import ProductDisplay from './components/ProductDisplay';
import { Route, Router , Routes } from 'react-router-dom';
import { onAuthStateChangedListener,createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import {useDispatch} from 'react-redux'
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Shop from './routes/Shop/Shop';
import SignIn from './routes/sign in/SignIn';
import Checkout from './routes/Checkout/checkout';
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
       if(user) {
        createUserDocumentFromAuth(user);
       }
       dispatch(setCurrentUser(user))
       // console.log(user);
    });

    return unsubscribe;
 },[])

 
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='shop/*' element={<Shop/>}/>
    <Route path='sign-in' element={<SignIn/>}/>
    <Route path='checkout' element={<Checkout/>}/>
   </Routes>
    
    </>
  );
}

export default App;
