export const API_HOST = process.env.REACT_APP_API_HOST;

export default {
  api: {
    realStateFunds: {
      GET_ONE_URL: `${API_HOST}/${process.env.REACT_APP_REAL_STATE_FUNDS_GET_ONE_PATH}`,
      GET_ALL_URL: `${API_HOST}/${process.env.REACT_APP_REAL_STATE_FUNDS_GET_ALL_PATH}`,
      DELETE_URL: `${API_HOST}/${process.env.REACT_APP_REAL_STATE_FUNDS_GET_ALL_PATH}`,
      SAVE_URL: `${API_HOST}/${process.env.REACT_APP_REAL_STATE_FUNDS_GET_ALL_PATH}`
    }
  }
};
