import React from 'react'
import './FilterRange.css'


//Filter compoenent for handling all numeric filters. Numbers lended themselfs to ranges better then simple contains filters.
class FilterRange extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  //Whenever the content of the text box changes, 
  //execute the update filter function to have it apply to the products list.
  //adjusts the min property of the filter object
  onChangeMin(event){
    let filter = {};
    filter.max = this.state.max;
    filter.min = event.target.value;
    this.props.updateFilter(filter);
    this.setState({
      min : event.target.value
    })
  }

  //Whenever the content of the text box changes, 
  //execute the update filter function to have it apply to the products list.
  //adjusts the max property of the filter object
  onChangeMax(event){
    let filter = {};
    filter.min = this.state.min;
    filter.max = event.target.value;
    this.props.updateFilter(filter);
    this.setState({
      max : event.target.value
    })
  }

  render() {
    return (  
      <div className='filter-wrapper'>
        <span className='filter-title'>{this.props.labelText}</span>
        <div className='filter-range-container'><span className='filter-range-label'>From</span><input id={this.props.updateFilterKey+'min'} onChange={this.onChangeMin.bind(this)}/></div>
        <div className='filter-range-container'><span className='filter-range-label'>To</span><input id={this.props.updateFilterKey+'max'} onChange={this.onChangeMax.bind(this)}/></div>
      </div>
    );
  }
}

export default FilterRange