import React, { useState } from "react";
import Login from "./Login";
import SignUP from "./SignUp";

const Account = () => {
  const [flag, setFlag] = useState(false);
  
  return (
    <div className="">
      <button onClick={() => setFlag(!flag)}>change</button>
      {flag ? <Login setFlag={setFlag} /> : <SignUP setFlag={setFlag} />}
    </div>
  );
};

export default Account;
