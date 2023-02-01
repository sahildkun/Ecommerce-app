import './App.css';
import ProductDisplay from './components/ProductDisplay';
import { Route, Router , Routes } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Shop from './routes/Shop/Shop';
import SignIn from './routes/sign in/SignIn';
import Checkout from './routes/Checkout/checkout';
function App() {

 
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
   </Routes>
    
    </>
  );
}

export default App;
