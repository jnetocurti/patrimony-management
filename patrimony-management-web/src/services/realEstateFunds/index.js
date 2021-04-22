import api from 'src/api/realEstateFunds';

export const getAll = (searchTerm, dispatch) => {
  api.getAll(searchTerm)
    .then((res) => {
      dispatch({ type: 'fetchFunds', payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: 'fetchFundsError', payload: error });
    });
};

export default {
  getAll
};
