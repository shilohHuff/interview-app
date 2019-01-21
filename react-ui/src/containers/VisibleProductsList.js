import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList'
import { VisibilityFilters, addProduct } from '../redux/actions/actions'

//The responsibility of this class is to wire up the product list with the filtered products pulled from state.
//It pulles in all the proucts loaded form the REST service and then applies all the set filters to trim down that full list.
//Every time the filter changes, "getVisibleProducts" is retriggered by redux's connect. This causes a "live" update.
//
//There are two types of filters ive built in, String and Range. 
//Dropdowns and text boxes use the string method to filter products and ranges use a object.
// 
// Due to the slightly more complex nature of min/max i chose ot leverage a object to control the filter.
// This method was reused for both scenarios to avoid having to re-wire another filter. 
// If the scope of this application got more complex, this would have to be revisted.
//
// Finally the products are sorted alphaetically byt description, then department.
// The sort functionality could be extracted and made part of soem UI compoenent to give the user control. 
const getVisibleProducts = (products, visibilityFilter) => {
  for (var key in visibilityFilter) {
    if (!visibilityFilter.hasOwnProperty(key)) continue;
    
    if (typeof visibilityFilter[key] === 'string'){
      var filterText = visibilityFilter[key];
      if(filterText) {
        products = products.filter( (product) => {
          let text = product[key] + '';
          return text.toUpperCase().includes(filterText.toUpperCase());
        })
      }
    } else if (typeof visibilityFilter[key] === 'object'){
      var filterMin = visibilityFilter[key].min;
      var filterMax = visibilityFilter[key].max;
      filterMin = filterMin ? filterMin : 0;
      filterMax = filterMax ? filterMax : Number.MAX_SAFE_INTEGER;
      products = products.filter( (product) => {
        let value = product[key];
        return (value >= filterMin && value <= filterMax);
      })
    }
  }
  products.sort(compareProductDescriptions);
  products.sort(compareProductDepartments)
  return products;
}

//Function to compare products by their description
function compareProductDescriptions(product1,product2) {
  if (product1.description < product2.description)
    return -1;
  if (product1.description > product2.description)
    return 1;
  return 0;
}

//Function to compare products by their department
function compareProductDepartments(product1,product2) {
  if (product1.department < product2.department)
    return -1;
  if (product1.department > product2.department)
    return 1;
  return 0;
}


//Here is where we wire in products from state, filter them, 
//and then sort them, by leveraging all the methods discussed above.
const mapStateToProps = state => ({
  products: getVisibleProducts(state.products, state.visibilityFilter)
})


//This wires up the addProduct action that is leveraged when the REST service responds.
const mapDispatchToProps = dispatch => ({
   addProduct: product => dispatch(addProduct(product))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)