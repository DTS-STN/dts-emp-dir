import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/employeesActions';
import PropTypes from 'prop-types';

class DisplayResults extends Component {
  static propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    const { employees } = this.props.employees;
    return (
      <div>
        <ul>
          {employees.map(({ _id, name }) => (
            <li id={_id}>{name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect( mapStateToProps, { getEmployees } )(DisplayResults);

