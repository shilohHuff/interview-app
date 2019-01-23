import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const component = shallow(<Header />);
});

it('renders with correct title', () => {
  const component = shallow(<Header />);
  expect(component.text().includes('Interview Application')).toBeTruthy();
});