import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const OEMTable = ({ data, setOEM }) => {
  const [selected, setSelected] = useState("");

  const handleOEMChange = (ele) => {
    setSelected(ele._id);
    setOEM(ele);
  };
  return (
    <TableContainer
      className="bg-slate-200 p-2 md:p-5 text-black rounded-md text-5xl"
      maxWidth={"100%"}
    >
      <Text
        className="text-sm sm:text-base md:text-2xl lg:text-4xl font-serif text-left mb-5 bg-gray-800 rounded text-white 
      p-2 cursor-pointer duration-500 ease-out hover:-translate-x-4"
      >
        Original Equipment Manufacturers Specifications
      </Text>
      <Table size="sm" variant={"unstyled"} cursor={"pointer"} overflow={'scroll'}>
        <Thead>
          <Tr className="tableHeadRow ">
            <Th fontWeight={"extrabold"}>NO.</Th>
            <Th>Model</Th>
            <Th>Year</Th>
            <Th>Price</Th>
            <Th>Colors</Th>
            <Th>Mileage</Th>
            <Th>Power (BHP)</Th>
            <Th>MaxSpeed</Th>
            <Th>Select OEM</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((ele, idx) => {
            return (
              <Tr
                key={ele._id}
                className="font-bold hover:rounded-lg"
                _hover={{ bg: "gray.300"}}
              >
                <Td>{idx + 1}.</Td>
                <Td>{ele.model}</Td>
                <Td>{ele.year}</Td>
                <Td>{ele.listPrice} ₹</Td>
                <Td>
                  <Flex gap={2}>
                    {ele.colors.map((color, idx) => {
                      return (
                        <div
                          key={idx}
                          style={{ backgroundColor: color.toLowerCase() }}
                          className="w-6 h-6 rounded-full cursor-pointer"
                        ></div>
                      );
                    })}
                  </Flex>
                </Td>
                <Td>{ele.mileage}</Td>
                <Td>{ele.power}</Td>
                <Td>{ele.maxSpeed}</Td>
                <Td>
                  <Button
                    onClick={() => handleOEMChange(ele)}
                    colorScheme={selected === ele._id ? "orange" : "yellow"}
                  >
                    Choose ODM
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OEMTable;
