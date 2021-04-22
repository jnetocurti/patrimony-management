import React, { memo } from 'react';

import { Button } from '@material-ui/core';
import { SaveAltOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1)
  }
}));

const SaveButton = memo((props) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      color="primary"
      variant="contained"
      className={classes.root}
      startIcon={<SaveAltOutlined />}
    >
      Salvar
    </Button>
  );
});

export default memo(SaveButton);
