import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "../views/home";
import AboutUs from '../views/About';
import HomeLayout from '../component/HomeLayout';
import Tours from "../views/Tours";
import Contact from "../views/Contact";
import Gallery from '../views/Gallery';
import SignIN from '../views/SignIn';
const Index =()=>{
    return (
        <HomeLayout>
     <Routes>
         <Route exact path='' element={<Home/>}></Route>;
         <Route exact path='/home' element={<Home/>}></Route>;
         <Route exact path='/about' element={<AboutUs/>}></Route>;
         <Route exact path='/tours' element={<Tours/>}></Route>;
         <Route exact path='/contact' element={<Contact/>}></Route>;
         <Route exact path='/gallery' element={<Gallery/>}></Route>;
         <Route exact path='/signIn' element={<SignIN/>}></Route>;
     </Routes>
     </HomeLayout>
    );
}
 export default Index;