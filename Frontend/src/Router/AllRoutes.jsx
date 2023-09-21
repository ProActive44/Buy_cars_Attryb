import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import Account from "../Pages/Account";
import { useSelector } from "react-redux";

const AllRoutes = () => {
//   const isLogin = useSelector((store) => store.isLogin);
//   const navigate = useNavigate();

//   useEffect(() => {
//       console.log(isLogin)
//     if (!isLogin) {
//       navigate("/account");
//       return;
//     }
//   }, [isLogin]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default AllRoutes;
