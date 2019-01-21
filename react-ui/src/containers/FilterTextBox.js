import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions/actions'
import FilterTextBox from '../components/FilterTextBox/FilterTextBox'

const mapStateToProps = (state, ownProps) => ({
})


//Wires the SET_FILTER function to allow the component to filter.
const mapDispatchToProps = (dispatch, ownProps) => ({
  updateFilter: (filter) => dispatch(setVisibilityFilter(ownProps.filterKey, filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTextBox)