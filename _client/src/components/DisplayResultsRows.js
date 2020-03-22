import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/employeeActions';
import PropTypes from 'prop-types';

class DisplayResultsRows extends Component {
  
  static propTypes = {
    getEmployees: PropTypes.func.isRequired,
    filteredData: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      filteredData: ''
    };
  }

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    
    return (
      <React.Fragment>
        <div>
          {/* Grid Row column titles */}
            <div className="row bolder pb-3 mt-4" >
              <div className="col-1x bunder">Photo</div>
              <div className="col-2x bunder">Name</div>
              <div className="col-2x bunder">Department</div>
              <div className="col-2x bunder">Organization</div>
              <div className="col-2x bunder">Phone</div>
            </div>
            {/* Grid Data rows */}
            {this.props.filteredData.map( ({ id, photo, name, title, department, organization, phone }) => (
              <div className="row pb-1" id={id} >
                <div className="col-1x"><img className="empPhoto" src={photo} alt={name} /></div>
                <div className="col-2x">{name} <br /> <span className="smaller">{title}</span> </div>
                <div className="col-2x">{department}</div>
                <div className="col-2x">{organization}</div>
                <div className="col-2x">{phone}</div>
              </div>
            ))} 
        </div>
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

export default connect( mapStateToProps, { getEmployees } )(DisplayResultsRows);

