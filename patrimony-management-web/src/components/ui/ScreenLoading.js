import React, { memo } from 'react';

import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

export const ScreenLoading = ({ loading }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.root} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

ScreenLoading.propTypes = {
  loading: PropTypes.bool
};

export default memo(ScreenLoading);
