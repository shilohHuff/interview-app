
// This function adds products to be displayed. 
const products = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [
          ...state,
          {
            id : action.product.id,
            description : action.product.description,
            lastSold : action.product.lastSold,
            shelfLife : action.product.shelfLife,
            department : action.product.department,
            price : action.product.price,
            unit : action.product.unit,
            unitMultiple : action.product.unitMultiple,
            unitCost : action.product.unitCost
          }
        ]
      default:
        return state
    }
  }
  
  export default products