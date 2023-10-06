import React, { useEffect } from "react";
import SingleCar from "../Components/SingleCar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCar } from "../Redux/action";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currCar = useSelector((store) => store.currCar);

  useEffect(() => {
    dispatch(getCurrentCar(id));
  }, [id]);

  return (
    <div className="mt-10 mb-20">
      <SingleCar ele={currCar} />
    </div>
  );
};

export default CarDetails;
