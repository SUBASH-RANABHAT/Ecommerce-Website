import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
const Home = () => {

  return ( <div>
    <Announcement />
 <Navbar />
 <Slider/>
 <center><h1><u>CATEGORIES</u></h1></center><br/>
 <Categories/><br/>
 <center><h1><u>PRODUCTS</u></h1></center>
 <Products/>
      <Newsletter/>
      <Footer/>
</div>
  )
}

export default Home 