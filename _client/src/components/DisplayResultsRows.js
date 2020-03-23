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

    this.filterData = this.filterData.bind(this);
  }

  filterData(event) {
    this.setState ({ searchTerm: event.target.value }) 
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    
    // const { data } = this.props.employees;
    // const filterBy = this.state.searchTerm;

    // console.log (filterBy)
    
    return (
      <React.Fragment>

        {/* <div className="row"> 
          <div className="col-4">
            <input type="text" name="search" placeholder="Enter search criteria" onChange={ this.filterData } className="form-control" />
          </div>
          <div className="col-8">&nbsp;</div>
        </div> */}

        <table className="pb-3 mt-4 mb-4 align-center">
          {/* Grid Row column titles */}
            <thead>
              <tr>
                <th scope="col">Display Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Company</th>
                <th scope="col">Email</th>
                <th scope="col">Telephone Number</th>
                <th scope="col">City</th>
                <th scope="col">Province</th>
              </tr>
            </thead>
            {/* Grid Data rows */}
            <tbody>
              {this.props.filteredData.map((employee) => (
                <tr id={employee._id} key={employee._id}>
                  <td >{employee.DisplayName} </td>
                  <td >{employee.JobTitle} </td>
                  <td >{employee.Company}</td>
                  <td >{employee.Email}</td>
                  <td >{employee.telephoneNumber}</td>
                  <td >{employee.gcCityEnglish}</td>
                  <td >{employee.gcProvinceNameEnglish}</td>
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
  
  return {
    filteredData: data.filter( data => data.DisplayName !== null ).reduce((acc, obj) => {
      console.log(obj)
      if (obj.DisplayName.toLowerCase().includes(searchTerm) ||
          obj.JobTitle.toLowerCase().includes(searchTerm) ||
          obj.Company.toLowerCase().includes(searchTerm) ||
          obj.Email.toLowerCase().includes(searchTerm) ||
          obj.telephoneNumber.replace(/-/gi,'').includes(searchTerm) ||
          obj.gcCityEnglish.toLowerCase().includes(searchTerm) ||
          obj.gcProvinceEnglish.toLowerCase().includes(searchTerm)) {
        acc.push(obj)
      }
      return acc
    }, [])
  }
};

export default connect(mapStateToProps, { fetchEmployees } )(DisplayResultsRows);

