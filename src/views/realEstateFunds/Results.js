import React from 'react';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Results = ({ funds }) => {
  return (
    <Card>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ticker</TableCell>
                <TableCell>Segmento</TableCell>
                <TableCell>Qtd</TableCell>
                <TableCell>Preço médio</TableCell>
                <TableCell>Valor total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {funds.map((f) => (
                <TableRow key={f.ticker}>
                  <TableCell>{f.ticker}</TableCell>
                  <TableCell>{f.segment}</TableCell>
                  <TableCell>{f.quantity}</TableCell>
                  <TableCell>{f.averagePrice}</TableCell>
                  <TableCell>{f.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  funds: PropTypes.array.isRequired
};

export default Results;
