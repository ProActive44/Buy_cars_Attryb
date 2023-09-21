import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOEM } from "../Redux/action";
import OEMTable from "../Components/OEMTable";
import { useNavigate } from "react-router-dom";

const SellCars = () => {
  const data = useSelector((store) => store.OEM);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOEM());
  }, []);

  const isLogin = useSelector((store) => store.isLogin);
  const navigate = useNavigate();

  if (!isLogin) {
    navigate("/account");
    return;
  }

  return <div className="text-white">
    <h1 className="text-center">Sell Your Car</h1>
    <div>
        {
            data?.map((ele, idx)=>{
                return(
                    <div key={ele._id}>

                    </div>
                )
            })
        }
    </div>
    
    <OEMTable/>
  </div>;
};

export default SellCars;
