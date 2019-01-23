import React from 'react';
import { shallow } from 'enzyme';
import VisibleProductsList from './VisibleProductsList';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const groceryProduct = {
  "id": 111, 
  "description": "earth", 
  "lastSold": "2017-09-12T00:00:00.000+0000", 
  "shelfLife": 0, 
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
  "shelfLife": 10, 
  "department": "Pharmacy", 
  "price": 1.5, 
  "unit": "Each", 
  "unitMultiple": 1, 
  "unitCost": 0.12
}

const produceProduct = {
  "id": 113, 
  "description": "cat", 
  "lastSold": "2017-09-12T00:00:00.000+0000", 
  "shelfLife": 1, 
  "department": "Produce", 
  "price": 1.5, 
  "unit": "Each", 
  "unitMultiple": 1, 
  "unitCost": 0.12
}

const PRODUCTS = [groceryProduct,pharmacyProduct,produceProduct];

const stateWithNoFilter = {
  products : PRODUCTS,
  visibilityFilter : {}
}

const stateWithDepartmentFilter = {
  products : PRODUCTS,
  visibilityFilter : {
    department: 'Pharmacy'
  }
}

const stateWithShelfLifeFilter = {
  products : PRODUCTS,
  visibilityFilter : {
    shelfLife: {
      min: 1,
      max: 5
    }
  }
}

const stateWithDescriptionFilter = {
  products : PRODUCTS,
  visibilityFilter : {
    description: 'e'
  }
}

it('renders without crashing', () => {
  let store = mockStore(stateWithNoFilter)
  const component = shallow(<VisibleProductsList store={store}/>);
});

it('renders with all products available', () => {
  let store = mockStore(stateWithNoFilter)
  const component = shallow(<VisibleProductsList store={store}/>);

  expect(component.props().products).toBe(PRODUCTS);
});

it('renders with only pharmacy products available', () => {
  let store = mockStore(stateWithDepartmentFilter)
  const component = shallow(<VisibleProductsList store={store}/>);

  expect(component.props().products).toHaveLength(1);
  expect(component.props().products).toContain(pharmacyProduct);
});

it('renders with only products with shelf lifes between 1 and 5', () => {
  let store = mockStore(stateWithShelfLifeFilter)
  const component = shallow(<VisibleProductsList store={store}/>);

  expect(component.props().products).toHaveLength(1);
  expect(component.props().products).toContain(produceProduct);
});

it('renders with only products with descriptions containing an e', () => {
  let store = mockStore(stateWithDescriptionFilter)
  const component = shallow(<VisibleProductsList store={store}/>);

  expect(component.props().products).toHaveLength(2);
  expect(component.props().products).toContain(groceryProduct, pharmacyProduct);
});