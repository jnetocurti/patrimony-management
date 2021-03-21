import React, { memo } from 'react';

import { Grid } from '@material-ui/core';

import PropTypes from 'prop-types';
import { AddButton } from 'src/components/ui/Buttons';
import SearchInput from 'src/components/ui/SearchInput';
import useRealEstateFundsController from 'src/helpers/useRealEstateFundsController';
import Connect from 'src/store/connect';

const Toolbar = memo(({ loading, dispatch }) => {
  const { search, addNew } = useRealEstateFundsController(dispatch);

  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md={6}>
        <SearchInput
          callback={search}
          searchStatus={loading}
          placeholder="Pesquisar fundos imobiliários"
        />
      </Grid>
      <Grid item>
        <AddButton onClick={addNew} />
      </Grid>
    </Grid>
  );
});

Toolbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  const { results: { loading } } = realEstateFundsStore;
  return { loading, ...props };
};

export default Connect(mapStateToProps)(Toolbar);
