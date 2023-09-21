import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import Login from "./Login";
import SignUP from "./SignUp";

const Account = () => {
  const [flag, setFlag] = useState(false);
  const toast = useToast();

  const goToSignup = () => {
    setFlag(false);
  };

  const goToLogin = () => {
    setFlag(true);
  };

  const accountCreated = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const loginSuccess = () => {
    toast({
      title: "Login Successful",
      description: "Welcome!!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const wrongDetails = (msg) => {
    toast({
      title: "Wrong Credentials",
      description:msg,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
  };

  return (
    <div className="">
      <button onClick={() => setFlag(!flag)}>change</button>
      {flag ? (
        <Login
          goToSignup={goToSignup}
          loginSuccess={loginSuccess}
          wrongDetails={wrongDetails}
        />
      ) : (
        <SignUP goToLogin={goToLogin} accountCreated={accountCreated} />
      )}
    </div>
  );
};

export default Account;
