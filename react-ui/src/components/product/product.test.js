import React from 'react';
import { shallow } from 'enzyme';
import Product from './product';

const groceryProduct = {
  "id": 113, 
  "description": "bread", 
  "lastSold": "2017-09-12T00:00:00.000+0000", 
  "shelfLife": 14, 
  "department": "Grocery", 
  "price": 1.5, 
  "unit": "Each", 
  "unitMultiple": 1, 
  "unitCost": 0.12
}

const pharmacyProduct = {
  "id": 113, 
  "description": "bread", 
  "lastSold": "2017-09-12T00:00:00.000+0000", 
  "shelfLife": 14, 
  "department": "Pharmacy", 
  "price": 1.5, 
  "unit": "Each", 
  "unitMultiple": 1, 
  "unitCost": 0.12
}

const produceProduct = {
  "id": 113, 
  "description": "bread", 
  "lastSold": "2017-09-12T00:00:00.000+0000", 
  "shelfLife": 14, 
  "department": "Produce", 
  "price": 1.5, 
  "unit": "Each", 
  "unitMultiple": 1, 
  "unitCost": 0.12
}

it('renders without crashing', () => {
  const component = shallow(<Product product={groceryProduct} />);
});

it('renders contain correct expiration text', () => {
  const component = shallow(<Product product={groceryProduct} />);
  expect(component.text().includes('Lasts for 14 days')).toBeTruthy();
});

it('renders contain correct unit text', () => {
  const component = shallow(<Product product={groceryProduct} />);
  expect(component.text().includes('$0.12 / Each')).toBeTruthy();
});

it('renders with grocery class', () => {
  const component = shallow(<Product product={groceryProduct} />);
  expect(component.html().includes('department-groceries')).toBeTruthy();
});

it('renders with produce class', () => {
  const component = shallow(<Product product={produceProduct} />);
  expect(component.html().includes('department-produce')).toBeTruthy();
});

it('renders with pharmacy class', () => {
  const component = shallow(<Product product={pharmacyProduct} />);
  expect(component.html().includes('department-pharmacy')).toBeTruthy();
});

it('renders with the wrong class', () => {
  const component = shallow(<Product product={produceProduct} />);
  expect(component.html().includes('department-pharmacy')).toBeFalsy();
});


