import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

const OEMTable = ({ data }) => {
  return (
    <TableContainer >
        <p>Choose </p>
      <Table size="sm" colorScheme="">
        <Thead >
          <Tr className="tableHeadRow">
            <Th fontWeight={'extrabold'}>NO.</Th>
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
                <Td><Button>Choose ODM</Button></Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OEMTable;
