import React from "react";
import { Link } from "react-router-dom";

const GOHOME = () => {
  return (
    <div>
        <h1>Page is not Available</h1>
      <button className="px-10 py-2 text-white border">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default GOHOME;
