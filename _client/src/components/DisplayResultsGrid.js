import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import phoneIcon from '../assets/phone.png';
import briefIcon from '../assets/brief.png';

class DisplayResultsGrid extends Component {
  
  static propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };
  }

  render() {
    
    const { data } = this.props.employees;
    
    return (
      <React.Fragment>
        <div>
          <ul className="cardRow">
            {data.map( ({ id, photo, name, title, department, organization, phone }) => (
              <li className = "empCard" id={id}>
                <div className="cardbg">
                  <div>
                    <img className="grdPhoto" src={photo} alt={name} />
                  </div>
                  <div className="bluebg" >{name}</div>
                  <div>
                    <img src={briefIcon} alt='briefcase' title='briefcase' height="20px" /> <br />
                    <span className="smaller">{title}</span> <br />
                    <span className="smaller">{department}</span> <br />
                    <span className="smaller">{organization}</span> <br />
                    <img src={phoneIcon} alt='phone' title='phone' height="15px" /> <br />
                    <span className="smaller">{phone}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="clear: both"> &nbsp; </div>

        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(mapStateToProps)(DisplayResultsGrid);

