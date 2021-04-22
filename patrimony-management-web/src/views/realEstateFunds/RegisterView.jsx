import React, { memo } from 'react';

import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Tab
} from '@material-ui/core';
import { TabPanel, TabList, TabContext } from '@material-ui/lab';

import PropTypes from 'prop-types';
import Connect from 'src/store/connect';

import BasicForm from './components/BasicForm';
import TransactionsForm from './components/TransactionsForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  content: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper
  },
  tabList: {
    '& button': {
      textTransform: 'none'
    }
  }
}));

const RegisterView = memo(({ currentRegisterView, dispatch }) => {
  const classes = useStyles();

  const handleTabChange = (_event, newValue) => {
    dispatch({
      type: 'navigate',
      payload: { currentView: 'register', currentRegisterView: newValue }
    });
  };

  return (
    <div className={classes.root}>
      <TabContext value={currentRegisterView}>
        <AppBar position="static" className={classes.content}>
          <TabList onChange={handleTabChange} className={classes.tabList}>
            <Tab label="Dados" value="basicForm" />
            <Tab label="Transações" value="transactionsForm" />
          </TabList>
        </AppBar>
        <TabPanel value="basicForm">
          <Card>
            <CardHeader subheader="Informações básicas do fundo" />
            <Divider light variant="middle" />
            <CardContent>
              <BasicForm />
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value="transactionsForm">
          <Card>
            <CardHeader subheader="Consultar, lançar compras e vendas..." />
            <Divider light variant="middle" />
            <CardContent>
              <TransactionsForm />
            </CardContent>
          </Card>
        </TabPanel>
      </TabContext>
    </div>
  );
});

RegisterView.propTypes = {
  dispatch: PropTypes.func,
  currentRegisterView: PropTypes.any.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  const {
    register: {
      basicForm: { realEstateFund }
    },
    currentRegisterView
  } = realEstateFundsStore;
  return { realEstateFund, currentRegisterView, ...props };
};

export default Connect(mapStateToProps)(RegisterView);
