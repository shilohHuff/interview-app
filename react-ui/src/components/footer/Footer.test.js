import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  const component = shallow(<Footer />);
});

it('renders with correct footer text', () => {
  const component = shallow(<Footer />);
  expect(component.text().includes('Copyright content here.')).toBeTruthy();
});