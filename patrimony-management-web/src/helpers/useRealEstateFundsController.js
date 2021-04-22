import { useCallback } from 'react';

import api from 'src/api/realEstateFunds';

// TODO - Refatorar
const TIME = 900;

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
      .getOne({ params: { ticker } })
      .then((res) => setTimeout(() => dispatch({ type: 'getOne', payload: res.data }), TIME))
      .catch((error) => dispatch({ type: 'getOneError', payload: error }));
  }, []);

  const getAll = useCallback((searchTerm) => {
    api
      .getAll({ params: { searchTerm } })
      .then((res) => setTimeout(() => dispatch({ type: 'getAll', payload: res.data }), TIME))
      .catch((error) => dispatch({ type: 'getAllError', payload: error }));
  }, []);

  const exclude = useCallback((ticker) => {
    dispatch({ type: 'setGlobalLoading' });
    api
      .exclude({ params: { ticker } })
      .then((res) => setTimeout(() => dispatch({ type: 'exclude', payload: res.data }), TIME))
      .catch((error) => setTimeout(() => dispatch({ type: 'excludeError', payload: error }), TIME));
  }, []);

  const save = useCallback((ticker) => {
    dispatch({ type: 'setGlobalLoading' });
    api
      .exclude({ params: { ticker } })
      .then((res) => setTimeout(() => dispatch({ type: 'save', payload: res.data }), TIME))
      .catch((error) => setTimeout(() => dispatch({ type: 'saveError', payload: error }), TIME));
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
