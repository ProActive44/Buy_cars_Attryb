import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInventory } from "../Redux/action";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SingleCar from "../Components/SingleCar";
import CarCard from "../Components/CarCard";
import LoadingCarCard from "../Components/LoadingCarCard";
import Loading from "../Components/Loading";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((store) => store.Inventory);
  const isLoading = useSelector((store) => store.isLoading);

  // console.log(isLoading);

  useEffect(() => {
    dispatch(getAllInventory());
  }, []);

  //   console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllInventory(search));
    setSearch("");
  };

  const handleReset = () => {
    dispatch(getAllInventory());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Submit the form when the Enter key is pressed
      handleSubmit(e);
    }
  };

  // console.log(data);
  return (
    <div className="text-white mb-10">
      <div className="flex gap-2 w-100 md:w-1/2 lg:w-1/3 my-5 px-5 justify-between items-center">
        <form onSubmit={handleSubmit} className="flex-1">
          <FormControl>
            <FormLabel>Search cars here</FormLabel>
            <Input
              placeholder="Search"
              value={search}
              onKeyPress={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FormHelperText textAlign="left">Press Enter</FormHelperText>
          </FormControl>
        </form>
        <Button onClick={handleReset} className="mt-1">
          RESET
        </Button>
      </div>
      <div className="font-serif">
        {data.length > 0 ? (
          <div className="flex flex-wrap gap-2 p-2">
            {data?.map((ele, idx) => {
              return <CarCard key={ele._id} ele={ele} />;
            })}
          </div>
        ) : isLoading ? (
          <>
            <div className="my-5">
              <Loading />
              <div className="text-white">Loading please wait...</div>
            </div>
            <LoadingCarCard />
          </>
        ) : data.length === 0 ? (
          <div className="mb-48 mt-10 font-semibold text-5xl">
            No Cars Found.
          </div>
        ) : (
          <p className="mb-48 mt-10 font-semibold text-5xl">
            Please try to refresh the page
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
