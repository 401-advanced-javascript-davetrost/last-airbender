import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './NotFound';

describe('NotFound component', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
