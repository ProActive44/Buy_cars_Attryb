import React from "react";
import Logo from "../assets/Logo.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const isLogin = useSelector((store) => {
    return store?.isLogin;
  });

  return (
    <div className="flex justify-between bg-blue.200 items-center  h-13 border px-10 bg-blue-50 rounded sticky top-0 z-10 mb-5">
      <div className="cursor-pointer">
        <Link to="/">
          <Image src={Logo} maxW="100px" ml="2" mt="2" />
        </Link>
      </div>
      <div className="cursor-pointer hover:text-blue-600">
        <p className="font-mono text-3xl font-extrabold">BUYC Corp</p>
      </div>
      <div className="flex gap-10 items-center mr-5">
        {isLogin ? (
          <>
            <Link>Sell Cars</Link>
            <Link>Login</Link>
            <Link>Sign up</Link>
          </>
        ) : (
          <Link>LOGOUT</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
