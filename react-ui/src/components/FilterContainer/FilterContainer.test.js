import React from 'react';
import { shallow } from 'enzyme';
import FilterContainer from './FilterContainer';


it('renders without crashing', () => {
  const component = shallow(<FilterContainer/>);
});

it('renders with drawer inactive by default', () => {
  const component = shallow(<FilterContainer/>);
  expect(component.state('active')).toBeFalsy();
});

it('toggle drawer state when filter button is clicked', () => {
  const component = shallow(<FilterContainer/>);

  const toggleFilterButton = component.find('.filter-button');
  toggleFilterButton.simulate('click');
  expect(component.state('active')).toBeTruthy();
});

it('toggles drawer state back to false when filter button is clicked twice', () => {
  const component = shallow(<FilterContainer/>);

  const toggleFilterButton = component.find('.filter-button');
  toggleFilterButton.simulate('click');
  toggleFilterButton.simulate('click');
  expect(component.state('active')).toBeFalsy();
});

it('render with active class if active state is true', () => {
  const component = shallow(<FilterContainer/>);
  const toggleFilterButton = component.find('.filter-button');
  toggleFilterButton.simulate('click');

  const container = component.find('.filter-container-active');
  expect(container.exists()).toBeTruthy();
});

it('render with hidden class if active state is false', () => {
  const component = shallow(<FilterContainer/>);
  
  const container = component.find('.filter-container-hidden');
  expect(container.exists()).toBeTruthy()
});


