import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import { lineChartData } from "variables/charts.js";

const SalesTable = () => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (!lineChartData) {
    return <Skeleton height="400px" />;
  }

  return (
    <Box
      p="16px"
      bg="white"
      borderRadius="lg"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
    >
      <TableContainer>
        <Table variant='simple' size="sm">
          <Thead>
            <Tr>
              <Th>Product</Th>
              {months.map(month => (
                <Th key={month} isNumeric>{month}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {lineChartData.map((row) => (
              <Tr key={row.name}>
                <Td fontWeight="bold">{row.name}</Td>
                {row.data.map((value, index) => (
                  <Td key={index} isNumeric color={value >= 300000 ? "green.500" : "inherit"}>
                    {formatCurrency(value)}
                  </Td>
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