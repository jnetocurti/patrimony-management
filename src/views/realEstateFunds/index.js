import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';

import Results from './Results';
import Toolbar from './Toolbar';
import Page from '../../components/Page';
import userStore from '../../store/hooks/useStore';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.dark
  }
}));

const RealEstateFundsView = () => {
  const classes = useStyles();
  const { store } = userStore();

  return (
    <Page className={classes.root} title="Fundos Imobiliários">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results funds={store.funds} />
        </Box>
      </Container>
    </Page>
  );
};

export default RealEstateFundsView;
