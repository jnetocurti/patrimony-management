import { useContext, createContext } from 'react';

import { realEstateFundsDefault } from '../reducers/realEstateFunds';

export const defaultStore = {
  store: { ...realEstateFundsDefault },
  dispatch: () => {}
};

export const StoreContext = createContext(defaultStore);

export default () => {
  return useContext(StoreContext);
};
