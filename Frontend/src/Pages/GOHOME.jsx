import React from "react";
import { Link } from "react-router-dom";

const GOHOME = () => {
  return (
    <div className="text-white bg-gray-800 my-10 p-5">
      <h1>Page is not Available</h1>
      <button className="px-10 py-2 text-white border my-1">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};

export default GOHOME;
