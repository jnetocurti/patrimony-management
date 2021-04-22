import axios from 'axios';
import { API_HOST } from 'src/config';

// const { GET_ALL_URL, DELETE_URL, SAVE_URL } = config.api.realStateFunds;

const BASE_URL = `${API_HOST}/real-estate-funds/`;

export const getOne = (ticker) => {
  return axios.get(`${BASE_URL}${ticker}`);
};

export const getAll = (options = {}) => {
  return axios.get(BASE_URL, options);
};

export const exclude = (ticker) => {
  return axios.delete(`${BASE_URL}${ticker}`);
};

export const save = (ticker, payload) => {
  return axios.put(`${BASE_URL}${ticker}`, payload);
};

export default {
  getOne,
  getAll,
  exclude,
  save
};
