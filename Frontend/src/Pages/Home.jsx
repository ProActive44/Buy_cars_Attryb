import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInventory } from "../Redux/action";
import { FormLabel, Input } from "@chakra-ui/react";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((store) => store.Inventory);

  useEffect(() => {
    dispatch(getAllInventory());
  }, []);

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllInventory(search));
    setSearch("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert("enter pressed");
      // Submit the form when the Enter key is pressed
      handleSubmit(e);
    }
  };

  return (
    <div className="text-white ">
      <h1>home</h1>
      <div className="w-1/3 my-5 px-5">
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="mainSearch">Search cars here</FormLabel>
          <Input
            id={"mainSearch"}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </form>
      </div>
      <div className="font-serif">
        {data.length > 0 ? data?.map((ele, idx) => {
          return (
            <div
              key={ele._id}
              className="flex mb-5 bg-white rounded-xl text-black wrap"
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
        }) : <div>
            No Products found refresh page
            </div>}
      </div>
    </div>
  );
};

export default Home;
