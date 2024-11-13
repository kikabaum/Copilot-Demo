import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';
import { lineChartData, lineChartOptions } from "variables/charts";

const SalesTable = () => {
  if (!lineChartData || !lineChartOptions?.xaxis?.categories) {
    return null;
  }

  const { categories } = lineChartOptions.xaxis;

  return (
    <Box borderRadius="lg" bg="white" p={4}>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Monthly Sales Performance</TableCaption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              {categories.map((date) => (
                <Th key={date} isNumeric>
                  {new Date(date).toLocaleString('default', { month: 'short' })}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {lineChartData.map((dataset) => (
              <Tr key={dataset.name}>
                <Td>{dataset.name}</Td>
                {dataset.data.map((value, index) => (
                  <Td key={index} isNumeric>{value}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SalesTable;