import React from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/getEmployees';

function SearchBox {

  function handleSubmit(event) {
    event.preventDefault();
    getEmployees (event.text)
  }

  render() {
    return (
      <div>
      <h1>Edit {article.title}</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Search by : </label>
          <input type="text" name="title" value={article.title} onChange={handleChange} className="form-control" /> 
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
  employees: state.employees,
});

export default connect( mapStateToProps, { getEmployees } )(SearchBox);
