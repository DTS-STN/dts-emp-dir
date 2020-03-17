import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/getEmployees';
//import PropTypes from 'prop-types';

class SearchBox extends Component {

  // static propTypes = {
  //   getEmployees: PropTypes.func.isRequired,
  //   employees: PropTypes.object.isRequired
  // };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchfor: undefined
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({searchfor: event.value})
    this.props.getEmployees (event.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit()}>
          <div className="form-group">
            <label>Search by : </label>
            <input type="text" name="title" value="" placeholder="Enter search criteria" onChange={this.handleSubmit()} className="form-control" /> 
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchfor: state.searchfor,
});

export default connect( mapStateToProps, { getEmployees } )(SearchBox);
