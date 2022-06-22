import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../component/DashboardLayout'
import Alltour from '../views/Dashboard/AllTours';
import NewTour from '../views/Dashboard/CreateTours';
import ManagerUsers from '../views/Dashboard/ManagerUser';
const IndexDash =()=>{
    return (
        < Dashboard>
        <Routes>
            <Route exact path='/dashboard' element={<Alltour/>}></Route>;
            <Route exact path='/dashboard-admin' element={<NewTour/>}></Route>;
            <Route exact path='/admin' element={<ManagerUsers/>}></Route>;
        </Routes>
     </Dashboard>
       );
    }
     export default IndexDash;