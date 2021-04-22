import React, { memo, useCallback, useState } from 'react';

import { IconButton, makeStyles } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';

import PropTypes from 'prop-types';
import ConfirmDialog from 'src/components/Dialogs';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1)
  }
}));

const title = 'Deseja realmente exluir?';
const subtitle = 'Esta operação não poderá ser revertida posteriormente.';

const DeleteIconButton = ({ onConfirm, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleConfirm = useCallback(() => {
    setOpen(false);
    onConfirm();
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <IconButton
        {...rest}
        color="secondary"
        className={classes.root}
        onClick={() => setOpen(true)}
      >
        <DeleteOutline />
      </IconButton>
      <ConfirmDialog
        {...{ open, title, subtitle, handleClose, handleConfirm }}
      />
    </>
  );
};

DeleteIconButton.propTypes = {
  onConfirm: PropTypes.func
};

export default memo(DeleteIconButton);
