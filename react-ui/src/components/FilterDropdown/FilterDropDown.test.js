import React from 'react';
import { shallow } from 'enzyme';
import FilterDropDown from './FilterDropDown';

const DEPARTMENTS = ['', 'grocery', 'produce', 'pharmacy'];

it('renders without crashing', () => {
  const component = shallow(<FilterDropDown updateFilterKey='test' labelText='cool label' dropdownValues={DEPARTMENTS} />);
});

it('renders with correct label text', () => {
  const component = shallow(<FilterDropDown updateFilterKey='test' labelText='cool label' dropdownValues={DEPARTMENTS}/>);
  expect(component.text().includes('cool label')).toBeTruthy();
});

it('renders with correct filter key id text', () => {
  const component = shallow(<FilterDropDown updateFilterKey='test' labelText='cool label' dropdownValues={DEPARTMENTS}/>);
  expect(component.html().includes('filter')).toBeTruthy();
});

it('renders with correct dropdown options', () => {
  const component = shallow(<FilterDropDown updateFilterKey='test' labelText='cool label' dropdownValues={DEPARTMENTS}/>);
  expect(component.html().includes('grocery')).toBeTruthy();
  expect(component.html().includes('produce')).toBeTruthy();
  expect(component.html().includes('pharmacy')).toBeTruthy();
});




it('text change invokes updateFilter with inputted values', () => {
  let inputValue = '';
  const updateFilter = (value) =>{
    inputValue = value;
  }

  const component = shallow(<FilterDropDown updateFilterKey='test' labelText='cool label' updateFilter={updateFilter.bind(this)} dropdownValues={DEPARTMENTS}/>);
  
  const dropdown = component.find('.filter-dropdown');
  dropdown.simulate('change', {target: {value: 'test1'}});

  expect(inputValue).toBe('test1');
});


