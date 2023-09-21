import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInventory } from "../Redux/action";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((store) => store.Inventory);

  useEffect(() => {
    dispatch(getAllInventory());
  }, []);

  //   console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllInventory(search));
    setSearch("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Submit the form when the Enter key is pressed
      handleSubmit(e);
    }
  };

  return (
    <div className="text-white">
      <div className="w-1/3 my-5 px-5">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="mainSearch">Search cars here</FormLabel>
            <Input
              id={"mainSearch"}
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <FormHelperText textAlign='left'>Press Enter</FormHelperText>
          </FormControl>
        </form>
      </div>
      <div className="font-serif">
        {data.length > 0 ? (
          data?.map((ele, idx) => {
            return (
              <div
                key={ele._id}
                className="flex mb-5 bg-white rounded-xl text-black wrap cursor-pointer"
              >
                <div className="w-1/2 p-5 ">
                  <img src={ele.image} className="rounded-md" />
                </div>
                <div className="border p-5 text-left flex flex-col gap-2 font-semibold">
                  <p className="font-bold text-2xl md:text-4xl mb-1">
                    {ele.title}
                  </p>
                  <p>{ele.description}</p>
                  <p>{ele.majorScratches}</p>
                  <p>{ele.kmsOnOdometer}</p>
                  <p>originalPaint: {ele.originalPaint ? "Yes" : "No"}</p>
                  <p>previousBuyers: {ele.previousBuyers}</p>
                  <p>Price: {ele.price}</p>
                  <p>registrationPlace: {ele.registrationPlace}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Products found refresh page</div>
        )}
      </div>
    </div>
  );
};

export default Home;
