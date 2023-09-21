import { useState } from "react";
import { useToast, Box } from "@chakra-ui/react";
import Login from "../Components/Login";
import SignUP from "../Components/SignUp";

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
    <Box mb={'50px'}>
      {/* <button onClick={() => setFlag(!flag)}>change</button> */}
      {flag ? (
        <Login
          goToSignup={goToSignup}
          loginSuccess={loginSuccess}
          wrongDetails={wrongDetails}
        />
      ) : (
        <SignUP goToLogin={goToLogin} accountCreated={accountCreated} />
      )}
    </Box>
  );
};

export default Account;
