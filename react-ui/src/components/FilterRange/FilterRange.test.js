import React from 'react';
import { shallow } from 'enzyme';
import FilterRange from './FilterRange';

it('renders without crashing', () => {
  const component = shallow(<FilterRange updateFilterKey='test' labelText='cool label' />);
});

it('renders with correct label text', () => {
  const component = shallow(<FilterRange updateFilterKey='test' labelText='cool label' />);
  expect(component.text().includes('cool label')).toBeTruthy();
});

it('renders with correct filter key id text', () => {
  const component = shallow(<FilterRange updateFilterKey='test' labelText='cool label' />);
  expect(component.html().includes('filter')).toBeTruthy();
});

it('text change invokes updateFilter with inputted values', () => {
  let minValue = '';
  let maxValue = '';
  const updateFilter = (filterObject) =>{
    minValue = filterObject.min;
    maxValue = filterObject.max;
  }

  const component = shallow(<FilterRange updateFilterKey='test' labelText='cool label' updateFilter={updateFilter.bind(this)}/>);
  
  const minTextBox = component.find('#testmin');
  const maxTextBox = component.find('#testmax');
  minTextBox.simulate('change', {target: {value: '10'}});
  maxTextBox.simulate('change', {target: {value: '20'}});

  expect(minValue).toBe('10');
  expect(maxValue).toBe('20');
});


