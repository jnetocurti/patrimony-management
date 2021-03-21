import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@material-ui/core';

import PropTypes from 'prop-types';

const ConfirmDialog = ({
  title,
  subtitle,
  children,
  open,
  handleClose,
  handleConfirm
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm} color="secondary">
          Confirmar
        </Button>
        <Button onClick={handleClose} color="secondary" autoFocus>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ConfirmDialog;
