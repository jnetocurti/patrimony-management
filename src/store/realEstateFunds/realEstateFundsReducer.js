import immer from 'immer';

import realEstateFundsActions from './realEstateFundsActions';

export const realEstateFundsInitialState = {
  results: {
    loading: false,
    error: false,
    searchTerm: '',
    realEstateFunds: []
  },
  register: {
    basicForm: {
      error: false,
      realEstateFund: {
        ticker: '',
        name: '',
        document: '',
        manager: '',
        segment: '',
        mandate: '',
        administrator: '',
        administratorDocument: ''
      }
    }
  },
  globalLoading: false,
  currentView: 'results',
  currentRegisterView: 'basicForm'
};

const realEstateFundsReducer = (state, action) => {
  const fn = realEstateFundsActions[action.type];

  if (fn) {
    return immer(state, (draftState) => {
      fn(draftState, action.payload, realEstateFundsInitialState);
    });
  }

  console.log('[WARNING] Action without reducer:', action);
  return state;
};

export default realEstateFundsReducer;
