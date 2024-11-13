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
} from '@chakra-ui/react';
import { lineChartData, lineChartOptions } from "variables/charts";

const SalesTable = () => {
  if (!lineChartData || !lineChartOptions?.xaxis?.categories) {
    return null;
  }

  const { categories } = lineChartOptions.xaxis;

  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Monthly Sales Performance</TableCaption>
        <Thead>
          <Tr>
            <Th>Month</Th>
            {lineChartData.map((dataset) => (
              <Th key={dataset.name} isNumeric>{dataset.name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {categories.map((date, index) => (
            <Tr key={index}>
              <Td>{new Date(date).toLocaleString('default', { month: 'long' })}</Td>
              {lineChartData.map((dataset) => (
                <Td key={dataset.name} isNumeric>{dataset.data[index]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;