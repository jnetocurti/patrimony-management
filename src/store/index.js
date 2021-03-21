import React from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from './hooks/useStore';
import useCombinedReducers from './hooks/useCombinedReducers';

const Provider = ({ children }) => {
  const { store, reducers } = useCombinedReducers();

  const triggerDispatchs = (action) => {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action);
    }
  };

  return (
    <StoreContext.Provider value={{ store, dispatch: triggerDispatchs }}>
      {children}
    </StoreContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object
};

export default Provider;
