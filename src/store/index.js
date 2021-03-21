import React, { createContext, useReducer } from 'react';

import PropTypes from 'prop-types';

import realEstateFundsReducer, {
  realEstateFundsInitialState
} from './realEstateFunds/realEstateFundsReducer';

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [realEstateFundsStore, realEstateFundsDispatch] = useReducer(
    realEstateFundsReducer,
    realEstateFundsInitialState
  );

  const combinedReducers = {
    store: { realEstateFundsStore },
    dispatch: realEstateFundsDispatch
  };

  return (
    <StoreContext.Provider value={combinedReducers}>
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node.isRequired
};

export default Store;
