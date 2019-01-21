import { VisibilityFilters } from '../actions/actions'


//Generically wires the filterkey property of state using the bracket notation.
//this allows for very genric code in regards to filters and avoid a ton of glue code.
const visibilityFilter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      var newState = Object.assign({}, state);
      newState[action.filterKey] =  action.filter;
      return newState;
    default:
      return state;
  }
}

export default visibilityFilter