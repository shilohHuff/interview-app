import React from 'react'
import FilterTextBox from '../../containers/FilterTextBox'
import FilterDropDown from '../../containers/FilterDropDown'
import FilterRange from '../../containers/FilterRange'
import './FilterContainer.css'

//Hard coded the list of departments here. This could be made dynamic by finding all unique the unique departments.
const DEPARTMENTS = ['', 'grocery', 'produce', 'pharmacy'];

//Hard coded the list of unit types here. This could be made dynamic by pulling uniques as well.
const UNIT_TYPES = ['', 'lb', 'each'];

//Slide out drawer for all the filter content.
//This handles instantiating all the different filters we could apply to the products list, as well as setting up the domain values for them.
class FilterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {active : false};
    this.determineContainerClass = this.determineContainerClass.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
    this.getFilterButtonContent = this.getFilterButtonContent.bind(this);
  }

  //Simple function to set the CSS class of the filter drawer based off the active flag.
  determineContainerClass(){
    return this.state.active ? 'filter-container-active' : 'filter-container-hidden';
  }

  //simple function to toggle the visibility of the filter drawer
  toggleFilters() {
    this.setState({active : !this.state.active});
  }

  //This controls the content for the filter button. Making the text changed added a nice touch i think.
  getFilterButtonContent() {
    if(this.state.active){
      return (
        <div>
          &lt; Hide Filters
        </div>
      );
    } else {
      return (
        <div>
          Show Filters &gt;
        </div>
      );
    }

  }

  render() {
    return (
      <div className='filter-container-wrapper'>
        <div className='filter-button-wrapper'>
          <button type='button' className='filter-button' onClick={this.toggleFilters}>
            {this.getFilterButtonContent()}
          </button>
        </div>
        {/*
           There is a fair amount of magic happenign here.
           The filter compoenents where made to be generic so I could reuse them
           to generically filter different attributes of a product.

           The "filterKey" is the property of the product that the filter is in charge of.
           The filter will use the bracket notation[] to set the property it needs to filter.

           This is also where we wire in the domain values for the dropdowns.
        
        */}
        <div className={this.determineContainerClass()}>
          <FilterDropDown filterKey={'department'} labelText="Department" dropdownValues={DEPARTMENTS}/>
          <FilterTextBox filterKey={'description'} labelText="Description"/>
          <FilterRange filterKey={'price'} labelText="Price"/>
          <FilterDropDown filterKey={'unit'} labelText="Unit Type" dropdownValues={UNIT_TYPES}/>
          <FilterRange filterKey={'unitCost'} labelText="Unit Cost"/>
          <FilterRange filterKey={'shelfLife'} labelText="Shelf Life(Days)"/>
        </div>
      </div>
    )
  }
}

export default FilterContainer