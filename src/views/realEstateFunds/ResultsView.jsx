import React, { memo, useEffect } from 'react';

import { Box, Card, CardContent } from '@material-ui/core';

import PropTypes from 'prop-types';
import useRealEstateFundsController from 'src/helpers/useRealEstateFundsController';
import Connect from 'src/store/connect';

import Results from './components/Results';
import Toolbar from './components/Toolbar';

const ResultsView = memo(({ searchTerm, dispatch }) => {
  const { getAll } = useRealEstateFundsController(dispatch);

  useEffect(() => getAll(searchTerm), [searchTerm]);

  return (
    <Box>
      <Card>
        <CardContent>
          <Toolbar />
          <Box mt={3}>
            <Results />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
});

ResultsView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchTerm: PropTypes.any.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  const { results: { loading, searchTerm } } = realEstateFundsStore;
  return { loading, searchTerm, ...props };
};

export default Connect(mapStateToProps)(ResultsView);
