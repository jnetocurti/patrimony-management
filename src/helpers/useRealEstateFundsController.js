import { useCallback } from 'react';

import api from 'src/api/realEstateFunds';

const useRealEstateFundsController = (dispatch) => {
  const navigate = useCallback((newView) => {
    dispatch({ type: 'navigate', payload: newView });
  }, []);

  const search = useCallback((term) => {
    dispatch({ type: 'search', payload: { params: { term } } });
  }, []);

  const addNew = () => dispatch({ type: 'addNew' });

  const getOne = useCallback((ticker) => {
    dispatch({ type: 'setGlobalLoading' });
    api
      .getOne(ticker)
      .then((res) => dispatch({ type: 'getOne', payload: res.data }))
      .catch((error) => dispatch({ type: 'getOneError', payload: error }));
  }, []);

  const getAll = useCallback((searchTerm) => {
    api
      .getAll({ params: { searchTerm } })
      .then((res) => dispatch({ type: 'getAll', payload: res.data }))
      .catch((error) => dispatch({ type: 'getAllError', payload: error }));
  }, []);

  const exclude = useCallback((ticker) => {
    dispatch({ type: 'setGlobalLoading' });
    api
      .exclude({ params: { ticker } })
      .then((res) => dispatch({ type: 'exclude', payload: res.data }))
      .catch((error) => dispatch({ type: 'excludeError', payload: error }));
  }, []);

  const save = useCallback((payload) => {
    dispatch({ type: 'setGlobalLoading' });
    api
      .save(payload.ticker, payload)
      .then((res) => dispatch({ type: 'save', payload: res.data }))
      .catch((error) => dispatch({ type: 'saveError', payload: error }));
  }, []);

  return {
    navigate,
    search,
    addNew,
    getOne,
    getAll,
    exclude,
    save
  };
};

export default useRealEstateFundsController;
