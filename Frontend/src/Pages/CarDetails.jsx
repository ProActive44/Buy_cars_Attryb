import React, { useEffect } from "react";
import SingleCar from "../Components/SingleCar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCar } from "../Redux/action";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ele = useSelector((store) => store.currCar);

  useEffect(() => {
    console.log("useEffect is running");
    dispatch(getCurrentCar(id));
  }, [id.ele]);

  console.log(ele);

  return (
    <div className="mt-10 mb-20 text-white">
      {/* <SingleCar ele={currCar} /> */}
      <>
        <div className="flex mb-5 bg-white rounded-xl text-black flex-wrap cursor-pointer">
          <div className="w-100 md:w-1/2 p-2 md:p-5">
            <img src={ele.image} className="rounded-md" />
          </div>
          <div className="p-5 text-left flex flex-col gap-2 font-semibold font-serif flex-1">
            <p className="font-bold text-2xl md:text-4xl mb-1">{ele.title}</p>
            <p>
              Details: <span className="text-gray-600">{ele.description}</span>
            </p>
            <p>
              Any MajorScratches:{" "}
              <span className="text-gray-600">
                {ele.majorScratches || "No"}
              </span>
            </p>
            <p>
              Odometer Reading:{" "}
              <span className="text-gray-600">{ele.kmsOnOdometer} km.</span>
            </p>
            <p>
              Color:
              {/* <span className="text-gray-600">
                {ele.colors[0] || ele.color}
              </span> */}
            </p>
            <p>
              OriginalPaint:{" "}
              <span className="text-gray-600">
                {ele.originalPaint ? "Yes" : "No"}
              </span>
            </p>
            <p>
              Previous Buyers:
              <span className="text-gray-600"> {ele.previousBuyers}</span>
            </p>
            <p>
              Price:
              <span className="text-gray-600"> {ele.price}₹</span>
            </p>
            <p>
              registrationPlace:
              <span className="text-gray-600"> {ele.registrationPlace}</span>
            </p>
            <div className="text-end flex gap-2 my-2">
              <Button colorScheme="orange">BOOK TEST DRIVE</Button>
              <Button colorScheme="orange" variant={"outline"}>
                SEE SELLER DETAILS
              </Button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CarDetails;
