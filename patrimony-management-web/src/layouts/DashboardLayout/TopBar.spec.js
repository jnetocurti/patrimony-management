/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';

import TopBar from './TopBar';

describe('src/components/SearchInput', () => {
  it('should render correctly', () => {
    const component = shallow(<TopBar />);
    expect(component).toMatchSnapshot();
  });
});
