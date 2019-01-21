
export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  product
})

export const setVisibilityFilter = (filterKey, filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filterKey,
  filter
})

