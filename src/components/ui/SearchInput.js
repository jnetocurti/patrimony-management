import React, { memo } from 'react';
import { Search as SearchIcon } from 'react-feather';

import {
  Box,
  CircularProgress,
  InputAdornment,
  makeStyles,
  SvgIcon,
  TextField
} from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  progress: {
    marginRight: theme.spacing(1)
  }
}));

export const SearchInputAdornment = () => {
  return (
    <InputAdornment position="start">
      <SvgIcon fontSize="small" color="action">
        <SearchIcon />
      </SvgIcon>
    </InputAdornment>
  );
};

export const SearchInputProgress = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} size="1.25rem" />;
};

const SearchInput = ({ callback, searchStatus, placeholder = 'Pesquisar' }) => {
  const handleChange = (e) => callback(e.target.value);

  return (
    <Box maxWidth={500}>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        onChange={handleChange}
        placeholder={placeholder}
        InputProps={{
          startAdornment: searchStatus ? (
            <SearchInputProgress />
          ) : (
            <SearchInputAdornment />
          )
        }}
      />
    </Box>
  );
};

SearchInput.propTypes = {
  callback: PropTypes.func,
  searchStatus: PropTypes.bool,
  placeholder: PropTypes.string
};

export default memo(SearchInput);
