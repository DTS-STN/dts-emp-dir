import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEmployees } from '../actions/employeeActions'
import { getVisibleEmployees } from '../selectors/index.js'

class DisplayResultsRows extends Component {
  
  static propTypes = {
    filteredData: PropTypes.array.isRequired,
    fetchEmployees: PropTypes.func.isRequired,
    loading: PropTypes.object.isRequired
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
    console.log(this.props.filteredData)
  }

  render() {

    let { loading } = this.props.loading
    
    return (
      <React.Fragment>
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
              {loading ? null :
              this.props.filteredData.map((employee) => (
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
  return {
    filteredData: getVisibleEmployees(state),
    loading: state.employees
  }
};

export default connect(mapStateToProps, { fetchEmployees } )(DisplayResultsRows);

