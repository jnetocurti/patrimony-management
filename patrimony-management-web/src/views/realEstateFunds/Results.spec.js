/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';

import results from './__mocks__/results';
import Results from './components/Results';

describe('src/views/realEstateFunds/Results', () => {
  it('should render correctly', () => {
    const component = shallow(<Results data={results} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with an empty list of funds', () => {
    const component = shallow(<Results data={[]} />);
    expect(component).toMatchSnapshot();
  });
});
