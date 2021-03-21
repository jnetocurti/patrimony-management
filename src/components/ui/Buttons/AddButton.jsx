import React, { memo } from 'react';

import { Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1)
  }
}));

const AddButton = memo((props) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      color="primary"
      variant="contained"
      className={classes.root}
      startIcon={<AddOutlined />}
    >
      Adicionar
    </Button>
  );
});

export default memo(AddButton);
