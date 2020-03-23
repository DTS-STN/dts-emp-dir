import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEmployees } from '../actions/employeeActions'

class DisplayResultsRows extends Component {
  
  static propTypes = {
    filteredData: PropTypes.array.isRequired,
    fetchEmployees: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      filteredData: ''
    };
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    
    return (
      <React.Fragment>
        <table className="bolder pb-3 mt-4 align-center">
          {/* Grid Row column titles */}
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
                <th scope="col">JobTitle</th>
                <th scope="col">Division</th>
                <th scope="col">WorkPhone</th>
                <th scope="col">CellPhone</th>
              </tr>
            </thead>
            {/* Grid Data rows */}
            <tbody>
              {this.props.filteredData.map( ({ id, FirstName, LastName, JobTitle, Division, WorkPhone, CellPhone }) => (
                <tr id={id} key={id}>
                  <td >{FirstName} </td>
                  <td >{LastName} </td>
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

const mapStateToProps = state => {
  const { data, searchTerm }  = state.employees
  console.log('inside mapstoprops')
  console.log (data);

  const removeNull = data.filter( data => data.LastName !== null )
  
  return {
    filteredData: removeNull.reduce((acc, obj) => {
      if (obj.FirstName.toLowerCase().includes(searchTerm) ||
          obj.LastName.toLowerCase().includes(searchTerm) ||
          obj.JobTitle.toLowerCase().includes(searchTerm) ||
          obj.Division.toLowerCase().includes(searchTerm) ||
          obj.CellPhone.replace(/-/gi,'').includes(searchTerm) ||
          obj.WorkPhone.replace(/-/gi,'').includes(searchTerm)) {
        acc.push(obj)
      }
      return acc
    }, [])
  }
};

export default connect(mapStateToProps, { fetchEmployees } )(DisplayResultsRows);

