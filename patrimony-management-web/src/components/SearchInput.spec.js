/* eslint-disable no-undef */
import React from 'react';

import { TextField } from '@material-ui/core';

import { shallow } from 'enzyme';
import SearchInput, {
  SearchInputAdornment,
  SearchInputProgress
} from 'src/components/ui/SearchInput';

describe('src/components/SearchInputAdornment', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchInputAdornment />);
    expect(component).toMatchSnapshot();
  });
});

describe('src/components/SearchInputProgress', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchInputProgress />);
    expect(component).toMatchSnapshot();
  });
});

describe('src/components/SearchInput', () => {
  let placeholder;
  let searchStatus;
  const callback = jest.fn();

  beforeEach(() => {
    searchStatus = false;
    placeholder = undefined;
  });

  it('should render with default placeholder', () => {
    const component = shallow(
      <SearchInput {...{ callback, searchStatus, placeholder }} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with custom placeholder', () => {
    placeholder = 'Custom';
    const component = shallow(
      <SearchInput {...{ callback, searchStatus, placeholder }} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with SearchInputProgress input adornment', () => {
    searchStatus = true;
    const component = shallow(
      <SearchInput {...{ callback, searchStatus, placeholder }} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should perform the callback function when the input value changed', () => {
    const component = shallow(
      <SearchInput {...{ callback, searchStatus, placeholder }} />
    );

    component.find(TextField).simulate('change', { target: { value: 'foo' } });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('foo');
  });
});
