import { Button, Skeleton } from "@chakra-ui/react";
import Loading from "./Loading";

const LoadingCarDetails = () => {
  return (
    <>
      <Loading />
      <div className="text-white mb-2">Loading please wait...</div>

      <div className="flex mb-5 bg-white rounded-xl text-black flex-wrap cursor-pointer">
        <div className="w-100 md:w-1/2 p-2 md:p-5">
          <Skeleton
            border={"1px solid red"}
            w="100%"
            h="100%"
            borderRadius={"10px"}
          ></Skeleton>
        </div>
        <div className="p-5 text-left flex flex-col gap-2 font-semibold font-serif flex-1">
          <Skeleton height="20px" />
          <Skeleton height="20px" w={"10%"} />
          <Skeleton height="20px" />
          <Skeleton height="20px" w={"10%"} />
          <Skeleton height="20px" />
          <Skeleton height="20px" w={"10%"} />
          <Skeleton height="20px" />
          <Skeleton height="20px" w={"10%"} />
          <Skeleton height="20px" />
          <Skeleton height="20px" w={"10%"} />
          <div className="text-end flex gap-2 my-2">
            <Button w={"100px"}>
              <Skeleton height="20px" />
            </Button>
            <Button w={"100px"}>
              <Skeleton height="20px" />
            </Button>
          </div>
        </div>
      </div>
    </> 
  );
};

export default LoadingCarDetails;
