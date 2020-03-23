import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DisplayResultsRows extends Component {
  
  static propTypes = {
    filteredData: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      filteredData: ''
    };
  }

  render() {
    
    return (
      <React.Fragment>
        <table className="bolder pb-3 mt-4 align-center">
          {/* Grid Row column titles */}
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Organization</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            {/* Grid Data rows */}
            <tbody>
              {this.props.filteredData.map( ({ id, name, title, department, organization, phone }) => (
                <tr id={id} key={id}>
                  <td >{name} <br /> <span className="smaller">{title}</span> </td>
                  <td >{department}</td>
                  <td >{organization}</td>
                  <td >{phone}</td>
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
    filteredData: data.reduce((acc, obj) => {
      if (obj.name.includes(searchTerm) ||
      obj.title.includes(searchTerm) ||
      obj.department.includes(searchTerm) ||
      obj.organization.includes(searchTerm) ||
      obj.phone.includes(searchTerm)) {
        acc.push(obj)
      }
      return acc
    }, [])
  }
};

export default connect(mapStateToProps)(DisplayResultsRows);

