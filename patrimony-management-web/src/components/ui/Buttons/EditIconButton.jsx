import React, { memo } from 'react';

import { IconButton } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1)
  }
}));

const EditIconButton = memo((props) => {
  const classes = useStyles();
  return (
    <IconButton {...props} color="secondary" className={classes.root}>
      <EditOutlined />
    </IconButton>
  );
});

export default memo(EditIconButton);
