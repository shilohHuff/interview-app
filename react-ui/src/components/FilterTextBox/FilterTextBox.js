import React from 'react'
import './FilterTextBox.css'

//Filter compoenent for handling all generic text entry for filters.
class FilterTextBox extends React.Component {

  //Whenever the content of the text box changes, 
  //execute the update filter function to have it apply to the products list.
  onChange(event){
    this.props.updateFilter(event.target.value);
  }

  render() {
    return (
      <div className='filter-wrapper'>
        <span className='filter-title'>{this.props.labelText}</span>
        <input className='filter-textbox' id={this.props.updateFilterKey + 'filter'} onChange={this.onChange.bind(this)}/>
      </div>
    );
  }
}

export default FilterTextBox