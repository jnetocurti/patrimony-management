import { useReducer } from 'react';

import realEstateFundsReducer, {
  realEstateFundsDefault
} from '../reducers/realEstateFunds';

const useCombinedReducers = () => {
  const [realEstateFundsStore, realEstateFunds] = useReducer(
    realEstateFundsReducer,
    realEstateFundsDefault
  );

  return {
    store: { ...realEstateFundsStore },
    reducers: [realEstateFunds]
  };
};

export default useCombinedReducers;
