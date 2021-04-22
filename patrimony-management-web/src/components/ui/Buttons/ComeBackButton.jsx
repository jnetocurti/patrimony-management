import React, { memo } from 'react';

import { Button } from '@material-ui/core';
import { KeyboardBackspaceOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1)
  }
}));

const ComeBackButton = memo((props) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      color="secondary"
      variant="outlined"
      className={classes.root}
      startIcon={<KeyboardBackspaceOutlined />}
    >
      Voltar
    </Button>
  );
});

export default memo(ComeBackButton);
