import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/employeeActions';
import PropTypes from 'prop-types';

class DisplayResultsRows extends Component {
  
  static propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      localData: '',
      searchTerm: ''
    };

    this.filterData = this.filterData.bind(this);
  }

  filterData(event) {
    this.setState ({ searchTerm: event.target.value }) 
  }

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    
    const { data } = this.props.employees;
    const filterBy = this.state.searchTerm;

    console.log (filterBy)
    
    return (
      <React.Fragment>

        <div className="row"> 
          <div className="col-4">
            <input type="text" name="search" placeholder="Enter search criteria" onChange={ this.filterData } className="form-control" />
          </div>
          <div className="col-8">&nbsp;</div>
        </div>

        <table className="pb-3 mt-4 mb-4 align-center">
          {/* Grid Row column titles */}
            <thead>
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">JobTitle</th>
                <th scope="col">Division</th>
                <th scope="col">WorkPhone</th>
                <th scope="col">CellPhone</th>
              </tr>
            </thead>
            {/* Grid Data rows */}
            <tbody>
              {data.map( ({ id, FirstName, LastName, JobTitle, Division, WorkPhone, CellPhone }) => (
                <tr id={id} key={id}>
                  <td >{FirstName}</td>
                  <td >{LastName}</td>
                  <td >{JobTitle}</td>
                  <td >{Division}</td>
                  <td >{WorkPhone}</td>
                  <td >{CellPhone}</td>
                </tr>
              ))} 
            </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect( mapStateToProps, { getEmployees } )(DisplayResultsRows);

