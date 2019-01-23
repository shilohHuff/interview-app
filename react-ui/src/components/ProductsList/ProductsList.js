import React from 'react'
import PropTypes from 'prop-types'
import Product from '../product/product'
import './ProductsList.css'


class ProductsList extends React.Component {

  componentDidMount() {

    //This is where I execute the REST service call to retrieve our products.
    //This could leverage thunks / a custom middleware, but for simplicity sake I put it here.
    //Whenever data is recieved, each product is added individually by dispatching the action "ADD_PRODUCT"
    //This could be done in a loop, or something similar to make the application constanty sync with the database.
    fetch("http://localhost:8080/products")
      .then((response) => {
        return response.json();
    }).then((data) =>{
      data.map((product) => {
        this.props.addProduct(product);
      })
    }).catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <h2 className='product-list-title'>Products</h2>
        {/*Dont render the list if there is no products avaialble.*/}
        {this.props.products && (
        <div className='products-list-container'>
          {/*For each product create a new product component*/}
          {this.props.products.map((product, index) => (
            <Product key={index + 'products'} product={product} />
          ))}
        </div>
        )} 
      </div>
    )
  }
}

export default ProductsList