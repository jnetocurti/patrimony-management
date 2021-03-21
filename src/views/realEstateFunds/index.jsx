import React from 'react';

import {
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Link,
  makeStyles
} from '@material-ui/core';

import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import ScreenLoading from 'src/components/ui/ScreenLoading';
import Connect from 'src/store/connect';

import RegisterView from './RegisterView';
import ResultsView from './ResultsView';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.dark
  },
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const title = 'Fundos Imobiliários';
const breadcrumbs = (
  <Breadcrumbs>
    <Link href="/app/real-estate-funds">{title}</Link>
  </Breadcrumbs>
);

const RealEstateFundsView = ({ currentView, globalLoading }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title={title}>
      <Container className={classes.container} maxWidth={false}>
        <Card>
          <CardHeader title={breadcrumbs} />
          <Divider variant="middle" />
          <CardContent>
            <ScreenLoading loading={globalLoading} />
            {currentView === 'results' && <ResultsView />}
            {currentView === 'register' && <RegisterView />}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

RealEstateFundsView.propTypes = {
  currentView: PropTypes.string.isRequired,
  globalLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  return { ...realEstateFundsStore, ...props };
};

export default Connect(mapStateToProps)(RealEstateFundsView);
