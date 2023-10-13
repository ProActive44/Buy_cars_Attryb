import { SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const LoadingCarCard = () => {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele, idx) => {
        return (
          <div
            key={idx}
            className="w-[400px] p-1 md:p-2 rounded-lg cursor-pointer bg-gray-700"
          >
            <img className="rounded-t-lg m-auto" />
            <div className="p-2 text-left flex flex-col gap-2">
              <p className="font-semibold text-xl"></p>
              <SkeletonText
                mt="4"
                noOfLines={1}
                spacing="4"
                skeletonHeight="2"
              />
              <div className="flex gap-1">
                <SkeletonCircle size="10" />
              </div>
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingCarCard;
