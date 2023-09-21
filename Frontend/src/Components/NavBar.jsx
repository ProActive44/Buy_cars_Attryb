import React from "react";
import Logo from "../assets/Logo.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Redux/actionTypes";
const NavBar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((store) => {
    return store.isLogin;
  });

  return (
    <div className="flex justify-between bg-blue.200 items-center  h-13 border px-10 bg-blue-50 rounded sticky top-0 z-10 mb-5">
      <div className="cursor-pointer">
        <Link to="/">
          <Image src={Logo} maxW="100px" my="1" />
        </Link>
      </div>
      <div className="cursor-pointer hover:text-blue-600">
        <p className="font-serif text-3xl font-extrabold">BUYC CORP</p>
      </div>
      <div className="flex gap-10 items-center mr-5">
        {!isLogin ? (
          <>
            <Link to="/sell">Sell Cars</Link>
            <Link to='/account'>Login</Link>
            <Link to='/account'>Sign up</Link>
          </>
        ) : (
          <>
            <Link to="/sell">SELL CARS</Link>
            <Link onClick={() => LOGOUT(dispatch)}>LOGOUT</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
