import React from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ ele }) => {
  let color = ele.colors[0].toLowerCase();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${ele._id}`);
  };

  return (
    <div
      className="w-[400px] p-1 md:p-2 rounded-lg cursor-pointer hover:bg-white hover:text-black group"
      onClick={handleClick}
    >
      <div className="rounded-t-lg m-auto p-[10px] group-hover:p-[0]">
        <img src={ele.image} className="rounded-t-lg m-auto" />
      </div>
      <div className="p-2 text-left flex flex-col gap-2">
        <p className="font-semibold text-xl">{ele.title}</p>
        <div className="flex gap-1">
          <div
            style={{ backgroundColor: color }}
            className="w-6 h-6 rounded-full cursor-pointer"
          ></div>
          Available in {color} color
        </div>
        <p>Starting at @ {ele.price}₹</p>
      </div>
    </div>
  );
};

export default CarCard;
