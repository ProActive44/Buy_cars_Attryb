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
} from "@chakra-ui/react";
import { useState } from "react";

const OEMTable = ({ data, setOEM }) => {
  const [selected, setSelected] = useState("");

  const handleOEMChange = (id) => {
    setSelected(id);
    setOEM(id);
  };
  return (
    <TableContainer className="bg-slate-200 p-5 text-black rounded-md text-5xl">
      <Text
        className="text-4xl font-serif text-left mb-5 bg-gray-800 rounded text-white 
      p-2 cursor-pointer duration-500 ease-out hover:-translate-x-4"
      >
        Original Equipment Manufacturers Specifications
      </Text>
      <Table size="sm" colorScheme="">
        <Thead>
          <Tr className="tableHeadRow">
            <Th fontWeight={"extrabold"}>NO.</Th>
            <Th>Model</Th>
            <Th>Year</Th>
            <Th>Price</Th>
            <Th>Colors</Th>
            <Th>Mileage</Th>
            <Th>Power(BHP)</Th>
            <Th>MaxSpeed</Th>
            <Th>Select</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((ele, idx) => {
            return (
              <Tr key={ele._id}>
                <Td>{idx + 1}.</Td>
                <Td>{ele.model}</Td>
                <Td>{ele.year}</Td>
                <Td>{ele.listPrice} ₹</Td>
                <Td>feet</Td>
                <Td>{ele.mileage}</Td>
                <Td>{ele.power}</Td>
                <Td>{ele.maxSpeed}</Td>
                <Td>
                  <Button
                    onClick={() => handleOEMChange(ele._id)}
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
