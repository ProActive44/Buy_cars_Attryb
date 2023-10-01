import React from "react";
import Logo from "../assets/Logo.png";
import { Image, Box, Divider } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Redux/actionTypes";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((store) => {
    return store.isLogin;
  });

  return (
    <>
      <Box className="text-white text-xs md:text-base bg-red-500 py-2 mb-0.5 font-serif font-semibold shadow-2xl rounded-b-3xl">
        Website is currently under construction, Thank you for your patience!
      </Box>
      <Box
        className="flex justify-between bg-blue.200 items-center h-13 px-1 md:px-5 sm:px-10 bg-blue-50 rounded sticky top-0 z-10 mb-5 border-b-black border-2"
        minW="350px"
      >
        <div className="cursor-pointer">
          <Link to="/">
            <Image src={Logo} maxW="100px" my="1" className="p-1 md:p-0" />
          </Link>
        </div>
        <div className="cursor-pointer hover:text-blue-600 hidden md:block">
          <p className="font-serif text-3xl font-extrabold">BUYC CORP</p>
        </div>
        <div className="flex gap-5 md:gap-10 items-center mr-5">
          {!isLogin ? (
            <>
              <Link to="/sell">Sell Cars</Link>
              <Link to="/account">Login / Sign up</Link>
            </>
          ) : (
            <>
              <Link to="/sell">SELL CARS</Link>
              <Link
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                  LOGOUT(dispatch);
                }}
              >
                LOGOUT
              </Link>
            </>
          )}
        </div>
      </Box>
    </>
  );
};

export default NavBar;
