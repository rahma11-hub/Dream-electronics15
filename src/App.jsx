import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import Hero from './Components/Hero/Hero'
import Baner from './Components/Baner/Baner'
import AOS from "aos";
import "aos/dist/aos.css";
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
import TopProducts from './Components/Products/TopProducts'
import NewProducts from './Components/Products/NewProducts'
import {Route, Routes} from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import PopUp from './Components/Shared/PopUp'

 
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
   <>
  <div>
    <NavBar handleOrderPopup={handleOrderPopup}/>
    <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    <Hero/>
    <Baner/>
    <TopProducts handleOrderPopup={handleOrderPopup}/>
    <Products handleOrderPopup={handleOrderPopup}/>
    <NewProducts handleOrderPopup={handleOrderPopup}/>
    <Contact/>
     
    {/* <Routes>
      <Route path="/Hero" element={<Hero/>}/> 
      <Route path="/Topproducts" element={<TopProducts handleOrderPopup={handleOrderPopup}/>}/>
      <Route path="/products" element={<Products  handleOrderPopup={handleOrderPopup}/>}/>
      <Route path="/baner" element={<Baner/>}/>
      <Route path="/NewProducts" element={<NewProducts  handleOrderPopup={handleOrderPopup}/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/PopUp" element={<PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>}/>
    </Routes> */}
     
    <Footer/>
  </div>
  
    </>
  )
}

export default App;
