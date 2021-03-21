/* eslint-disable no-undef */
import React from 'react';

import { TextField } from '@material-ui/core';

import { mount, shallow } from 'enzyme';
import SearchInput from 'src/components/SearchInput';

import RealEstateFundsView from '.';

const service = require('src/services/realEstateFunds');

beforeEach(() => {
  jest.spyOn(service, 'getAll').mockImplementation();
});

describe('src/views/realEstateFunds/RealEstateFundsView', () => {
  it('should render correctly', () => {
    const component = shallow(<RealEstateFundsView />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly on search', () => {
    const component = mount(<RealEstateFundsView />);

    component
      .find(SearchInput)
      .find(TextField)
      .find('input')
      .simulate('change', { target: { value: 'foo' } });

    expect(component).toMatchSnapshot();
  });
});
