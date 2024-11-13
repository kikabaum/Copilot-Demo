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
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { lineChartData } from 'variables/charts';
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";

const SalesTable = () => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Monthly Sales Data
        </Text>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" color="gray.400">
                <Th borderColor={borderColor}>Product Type</Th>
                {months.map(month => (
                  <Th borderColor={borderColor} key={month} isNumeric>{month}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {lineChartData.map(series => (
                <Tr key={series.name}>
                  <Td borderColor={borderColor} fontWeight="bold">{series.name}</Td>
                  {series.data.map((value, index) => (
                    <Td borderColor={borderColor} key={`${series.name}-${months[index]}`} isNumeric>
                      {value}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default SalesTable;