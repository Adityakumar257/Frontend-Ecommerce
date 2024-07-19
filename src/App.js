import './App.css';
import { Navbar } from './Assets/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import { ShopCatogery } from './Pages/ShopCatogery';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSign } from './Pages/LoginSign';
import Fotter from './Components/Fotter/Fotter';
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kid_banner from './Assets/banner_kids.png'



function App() { 
  return (
    <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Shop/>}/>
     <Route path='/Mens' element={<ShopCatogery banner={men_banner} category ="men"/>}/>
     <Route path='/Women' element={<ShopCatogery banner={women_banner} category ="women"/>}/>
     <Route path='/Kids' element={<ShopCatogery banner={kid_banner} category ="kid"/>}/>
     <Route path='/Product' element={<Product/>}>
     <Route path=':ProductId' element={<Product/>}/>
     </Route>
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/login' element={<LoginSign/>}/>
     </Routes>
     
    <Fotter/>



     </BrowserRouter>
    </div>
  );
}

export default App;
