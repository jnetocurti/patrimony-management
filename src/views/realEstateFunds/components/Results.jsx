import React, { memo } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import PropTypes from 'prop-types';
import { DeleteIconButton, EditIconButton } from 'src/components/ui/Buttons';
import useRealEstateFundsController from 'src/helpers/useRealEstateFundsController';
import Connect from 'src/store/connect';

const Results = memo(({ realEstateFunds, dispatch }) => {
  const { getOne, exclude } = useRealEstateFundsController(dispatch);

  return (
    <Box mt={1}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Ticker</TableCell>
                <TableCell>Segmento</TableCell>
                <TableCell>Qtd</TableCell>
                <TableCell>Preço médio</TableCell>
                <TableCell>Valor total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {realEstateFunds.map((f) => (
                <TableRow key={f.ticker}>
                  <TableCell>
                    <EditIconButton onClick={() => getOne(f.ticker)} />
                    <DeleteIconButton onConfirm={() => exclude(f.ticker)} />
                  </TableCell>
                  <TableCell>{f.ticker}</TableCell>
                  <TableCell>{f.segment.description}</TableCell>
                  <TableCell>{f.quantity}</TableCell>
                  <TableCell>{f.averagePrice}</TableCell>
                  <TableCell>{f.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Box>
  );
});

Results.propTypes = {
  dispatch: PropTypes.func.isRequired,
  realEstateFunds: PropTypes.array.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  const { results: { realEstateFunds } } = realEstateFundsStore;
  return { realEstateFunds, ...props };
};

export default Connect(mapStateToProps)(Results);
