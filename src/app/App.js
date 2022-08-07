import * as React from "react";
import { Route, Routes } from "react-router-dom";

import CreateUser from '../pages/CreateUser'
import DashBoard from '../pages/Dashborad'
import Carts from "../pages/Dashborad/Carts";
import Home from "../pages/Dashborad/Home";
import Products from "../pages/Dashborad/Products";
import Login from '../pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />}>
           <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path="carts" element={<Carts/>} />
        </Route>
      </Routes>   
       {/* <CreateUser /> */}
    </>
   
  );
}

export default App;
