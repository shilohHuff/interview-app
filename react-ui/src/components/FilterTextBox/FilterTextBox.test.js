import React from 'react';
import { shallow } from 'enzyme';
import FilterTextBox from './FilterTextBox';

it('renders without crashing', () => {
  const component = shallow(<FilterTextBox updateFilterKey='test' labelText='cool label' />);
});

it('renders with correct label text', () => {
  const component = shallow(<FilterTextBox updateFilterKey='test' labelText='cool label' />);
  expect(component.text().includes('cool label')).toBeTruthy();
});

it('renders with correct filter key id text', () => {
  const component = shallow(<FilterTextBox updateFilterKey='test' labelText='cool label' />);
  expect(component.html().includes('filter')).toBeTruthy();
});

it('text change invokes updateFilter with inputted value', () => {
  let inputText = '';
  const updateFilter = (filterValue) =>{
    inputText = filterValue;
  }

  const component = shallow(<FilterTextBox updateFilterKey='test' labelText='cool label' updateFilter={updateFilter.bind(this)}/>);
  
  const textBox = component.find('.filter-textbox');
  textBox.simulate('change', {target: {value: 'abc'}});

  expect(inputText).toBe('abc');
});


