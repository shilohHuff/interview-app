import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';

const groceryProduct = {
  "id": 111, 
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
  "id": 112, 
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

const PRODUCTS = [groceryProduct,pharmacyProduct,produceProduct];


it('renders without crashing', () => {
  const component = shallow(<ProductsList products={PRODUCTS} />);
});

it('renders the correct number of products', () => {
  const component = shallow(<ProductsList products={PRODUCTS} />);
  expect(component.find('.products-list-container').children()).toHaveLength(PRODUCTS.length);
});


it('renders without the list container if there is no products', () => {
  const component = shallow(<ProductsList />);
  expect(component.find('.products-list-container').exists()).toBeFalsy();
});


