import React from 'react'
import {titleCase} from '../../utils/StringUtils'
import './FilterDropDown.css'

//Filter compoenent for handling all drop down entries for filters. This such as department madesense to be a drop down.
class FilterDropdown extends React.Component {

  constructor(props){
    super(props);
  }

  //Whenever the content of the dropdown changes, 
  //execute the update filter function to have it apply to the products list.
  onChange(event){
    this.props.updateFilter(event.target.value);
  }


  //This function handles rendering a list of options for each drop down.
  createDropdownList() {
    let dropdownOptions = []
    let dropdownValues = this.props.dropdownValues;

    dropdownValues.forEach((dropdownValue) => {
      dropdownOptions.push(
        <option className='filter-dropdown-item' value={dropdownValue}>{titleCase(dropdownValue)}</option>
      )
    })

    return dropdownOptions;
  }

  render() {
    return (  
      <div className='filter-wrapper'>
        <span className='filter-title'>{this.props.labelText}</span>
        <select className='filter-dropdown' onChange={this.onChange.bind(this)}>
          {this.createDropdownList()}
        </select>
      </div>
    );
  }
}

export default FilterDropdown