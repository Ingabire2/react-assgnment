import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "../views/home";
import AboutUs from '../views/About';
import HomeLayout from '../component/HomeLayout';
import Tours from "../views/Tours";
import Contact from "../views/Contact";
import Gallery from '../views/Gallery';
import SignIN from '../views/SignIn';
import IndexDash from './dashboard';
import ManagerUsers from '../views/Dashboard/ManagerUser';
import Alltour from '../views/Dashboard/AllTours';
import NewTour from '../views/Dashboard/CreateTours';
import AdminChart from '../views/Dashboard/AdminChart';
import NewUser from '../component/widgets/new/New';
//import TotalGrowthBarChart from '../views/Dashboard/TotalBarChart';
const Index =()=>{
    return (
        <>
        <HomeLayout>
     <Routes>
         <Route exact path='' element={<Home/>}></Route>;
         <Route exact path='/home' element={<Home/>}></Route>;
         <Route exact path='/about' element={<AboutUs/>}></Route>;
         <Route exact path='/tours' element={<Tours/>}></Route>;
         <Route exact path='/contact' element={<Contact/>}></Route>;
         <Route exact path='/gallery' element={<Gallery/>}></Route>;
         <Route exact path='/signIn' element={<SignIN/>}></Route>;
         <Route exact path='/dash' element={<IndexDash/>}></Route>;
         <Route exact path='/dashb' element={<ManagerUsers/>}></Route>;
         <Route exact path='/dashboard' element={<Alltour/>}></Route>;
         <Route exact path='/chart' element={<AdminChart/>}></Route>;
         <Route exact path='/user' element={<NewUser/>}></Route>;

        <Route exact path='/dashboard-admin' element={<NewTour/>}></Route>;
     </Routes>
     {/* < Dashboard>
        <Routes>
            <Route exact path='/dashboard' element={<Alltour/>}></Route>;
            <Route exact path='/dashboard-admin' element={<NewTour/>}></Route>;
        </Routes>
     </Dashboard> */}
     </HomeLayout>
     
     </>
    );
}
 export default Index;