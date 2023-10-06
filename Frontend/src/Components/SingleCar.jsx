import React from "react";

const SingleCar = ({ele}) => {
  return (
    <>
      <div
        className="flex mb-5 bg-white rounded-xl text-black flex-wrap cursor-pointer"
      >
        <div className="w-100 md:w-1/2 p-2 md:p-5">
          <img src={ele.image} className="rounded-md" />
        </div>
        <div className="p-5 text-left flex flex-col gap-2 font-semibold">
          <p className="font-bold text-2xl md:text-4xl mb-1">{ele.title}</p>
          <p>{ele.description}</p>
          <p>{ele.majorScratches}</p>
          <p>{ele.kmsOnOdometer}</p>
          {/* <p>{ele.color}</p> */}
          <p>originalPaint: {ele.originalPaint ? "Yes" : "No"}</p>
          <p>previousBuyers: {ele.previousBuyers}</p>
          <p>Price: {ele.price}</p>
          <p>registrationPlace: {ele.registrationPlace}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCar;
