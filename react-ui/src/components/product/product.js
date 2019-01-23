import React from 'react'
import PropTypes from 'prop-types'
import {titleCase} from '../../utils/StringUtils'
import './product.css'

//This compoenent handles rendering a individual product
const Product = ({ product }) => (
    <div className={getClassForDepartment(product.department).join(' ')} >
        <div className='product-content-wrapper'>
            <div>
                <div className='product-title'>{titleCase(product.description)}</div>
                <div className='product-shelf-life'>Lasts for {product.shelfLife} days</div>
            </div>
            <div className='product-details-container'>
                <div className='product-price'>${product.price.toFixed(2)}</div>
                <div className='product-unit-details'>
                    ${product.unitCost.toFixed(2)} 
                    {product.unitMultiple === 1 ? '' : ' per ' + product.unitMultiple} 
                    {' / ' + product.unit}
                </div>
            </div>
        </div>
        <div className={'product-department-'+product.department.toLowerCase()}> {titleCase(product.department)}</div>
    </div>
)


//This handles assigning a unique class for adding colors and such based on the department
const getClassForDepartment = (department) => {
    let classes = ['product-container'];
    switch(department) {
      case 'Grocery':
        classes.push('department-groceries');
        break;
      case 'Pharmacy':
        classes.push('department-pharmacy');
        break;
      case 'Produce':
        classes.push('department-produce');
        break;
      default:
        break;
    }
    return classes;
  }
export default Product