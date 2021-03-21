import axios from 'axios';
import config from 'src/config';

const {
  GET_ALL_URL,
  DELETE_URL,
  GET_ONE_URL,
  SAVE_URL
} = config.api.realStateFunds;

export const getOne = (options = {}) => {
  return axios.get(GET_ONE_URL, options);
};

export const getAll = (options = {}) => {
  return axios.get(GET_ALL_URL, options);
};

export const exclude = (options = {}) => {
  return axios.delete(DELETE_URL, options);
};

export const save = (options = {}) => {
  return axios.post(SAVE_URL, options);
};

export default {
  getOne,
  getAll,
  exclude,
  save
};
