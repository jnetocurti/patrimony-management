export const navigate = (state, payload) => {
  if (payload.currentView) {
    state.currentView = payload.currentView;
  }
  if (payload.currentRegisterView) {
    state.currentRegisterView = payload.currentRegisterView;
  }
};

export const setGlobalLoading = (state, payload = true) => {
  state.globalLoading = payload;
};

export const search = (state, payload) => {
  state.results.loading = true;
  state.results.error = false;
  state.results.searchTerm = payload;
};

export const getAll = (state, payload) => {
  state.results.loading = false;
  state.results.error = false;
  state.results.realEstateFunds = payload;
};

export const getAllError = (state, payload) => {
  state.results.loading = false;
  state.results.error = payload;
};

export const addNew = (state, _payload, initialState) => {
  const { realEstateFund } = initialState.register.basicForm;
  state.register.basicForm.realEstateFund = realEstateFund;
  navigate(state, {
    currentView: 'register',
    currentRegisterView: 'basicForm'
  });
};

export const getOne = (state, payload) => {
  state.globalLoading = false;
  state.register.basicForm.error = false;
  state.register.basicForm.realEstateFund = payload;
  navigate(state, {
    currentView: 'register',
    currentRegisterView: 'basicForm'
  });
};

export const getOneError = (state, payload) => {
  state.globalLoading = false;
  state.register.basicForm.error = payload;
};

export const exclude = (state) => {
  setGlobalLoading(state, false);
};

export const excludeError = (state) => {
  setGlobalLoading(state, false);
};

export const save = (state) => {
  console.log('save');
  state.globalLoading = false;
  // setGlobalLoading(state, false);
};

export const saveError = (state) => {
  console.log('save error');
  setGlobalLoading(state, false);
};

export default {
  navigate,
  setGlobalLoading,
  search,
  getAll,
  getAllError,
  addNew,
  getOne,
  getOneError,
  exclude,
  excludeError,
  save,
  saveError
};
