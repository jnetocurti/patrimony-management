import React from 'react';

import { Box, Button } from '@material-ui/core';

import PropTypes from 'prop-types';
import Connect from 'src/store/connect';

const TransactionsForm = ({ dispatch }) => {
  const comeBack = () => {
    dispatch({
      type: 'navigate',
      payload: { currentRegisterView: 'basicForm' }
    });
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      <Button color="primary" variant="contained" onClick={comeBack}>
        Voltar
      </Button>
    </Box>
  );
};

TransactionsForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (_, props) => ({ ...props });

export default Connect(mapStateToProps)(TransactionsForm);
