import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../pages/Dashborad/Users/";
import Products from "../pages/Dashborad/Products";
import Carts from "../pages/Dashborad/Carts";
import Home from "../pages/Dashborad/Home";
import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser'
import DashBoard from '../pages/Dashborad'


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<DashBoard />}>
           <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path="users"  element={<Users/>} />
          <Route path="carts" element={<Carts/>} />
        </Route>
      </Routes>   
          
    </>
  );
}

export default App;
