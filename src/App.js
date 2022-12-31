import './App.css';
import ProductDisplay from './components/ProductDisplay';
import { Route, Router , Routes } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Shop from './routes/Shop';
function App() {

 
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
   </Routes>
    
    </>
  );
}

export default App;
