import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import Account from "../Pages/Account";
import SellCars from "../Pages/SellCars";
import GOHOME from "../Pages/GOHOME";
import CarDetails from "../Pages/CarDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/sell" element={<SellCars />} />
      <Route path="/details/:id" element={<CarDetails />} />
      <Route path="*" element={<GOHOME />} />
    </Routes>
  );
};

export default AllRoutes;
