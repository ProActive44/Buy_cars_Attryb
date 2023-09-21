import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOEM } from "../Redux/action";
import OEMTable from "../Components/OEMTable";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const SellCars = () => {
  const data = useSelector((store) => store.OEM);
  console.log(data);
  const dispatch = useDispatch();

  const toast = useToast();
  const loginFirst = () => {
    toast({
      title: "You have to log in First",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
  };
  const isLogin = useSelector((store) => store.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      loginFirst();
      navigate("/account");
      return;
    }
    dispatch(getAllOEM());
  }, [isLogin]);

  return (
    <div className="text-white">
      <h1 className="text-center my-5 font-serif font-bold text-yellow-300">Sell Your Car</h1>
      <div>
        <OEMTable data={data} />;
      </div>
      
    </div>
  );
};

export default SellCars;
