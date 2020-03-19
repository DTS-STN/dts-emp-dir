import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/employeeActions';
import PropTypes from 'prop-types';

class SearchBox extends Component {

  static propTypes = {
    getEmployees: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    
    this.state = {
      search: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ search : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getEmployees (this.state.search)
  }

  render() {
    return (
      <div className="row mt-4">
        <form className="col-3" onSubmit={this.handleSubmit }>
          <div className="form-group">
            <input type="text" name="search" placeholder="Enter search criteria" onChange={ this.handleChange } className="form-control" />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

export default connect( mapStateToProps, { getEmployees } )(SearchBox);