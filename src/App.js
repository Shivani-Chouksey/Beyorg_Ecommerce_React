import logo from './logo.svg';
import '../src/css/user/index.min.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes ,Route } from 'react-router-dom';
import Product from './Components/Product';
import Faq from './Components/Faq';
import ProductDetails from './Components/ProductDetails';
import Contact from './Components/Contact';
import About from './Components/About';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import Error404 from './Components/Error404';


function App() {
  return (

    <>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>

      <Route  path='/faq' element={<Faq/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/wishlist'element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/error' element={<Error404/>}/>
    
    
    
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
