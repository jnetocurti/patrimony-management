/* eslint-disable no-undef */
import { getAll } from '.';

const axios = require('axios');

describe('src/services/realEstateFunds', () => {
  it('should fetch all realEstateFunds and change the state for success', async () => {
    const dispatch = jest.fn();

    const mock = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: [] }));

    await getAll('searchTerm', dispatch);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ payload: [], type: 'FETCH_FUNDS' });
  });

  it('should fetch all realEstateFunds and change the state for fail', (done) => {
    const error = new Error();
    const dispatch = jest.fn();

    const mock = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.reject(error));

    getAll('searchTerm', dispatch);

    setImmediate(() => {
      expect(mock).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        payload: error,
        type: 'FETCH_FUNDS_ERROR'
      });
      done();
    });
  });
});
