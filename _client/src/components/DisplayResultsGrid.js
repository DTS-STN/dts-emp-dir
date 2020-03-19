import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/employeeActions';
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

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    
    const { data } = this.props.employees;
    
    return (
      <React.Fragment>
        <div>
          {/* Grid Data rows */}
          {data.map( ({ id, photo, name, title, department, organization, phone }) => (


            <div className="row pb-4 pt-4" id={id} >

              <div className="col-3 cardbg">
                <div>
                  <img className="grdPhoto" src={photo} alt={name} />
                </div>
                <div className="bluebg" >
                  {name}
                </div>
                <div>
                  <img src={briefIcon} alt='briefcase' title='briefcase' height="20px" /> <br />
                  <span className="smaller">{title}</span> <br />
                  <span className="smaller">{department}</span> <br />
                  <span className="smaller">{organization}</span> <br />
                  <img src={phoneIcon} alt='phone' title='phone' height="15px" /> <br />
                  <span className="smaller">{phone}</span>
                </div>
              </div>

              <div className="col-3 cardbg">
                <div>
                  <img className="grdPhoto" src={photo} alt={name} />
                </div>
                <div className="bluebg" >
                  {name}
                </div>
                <div>
                  <img src={briefIcon} alt='briefcase' title='briefcase' height="20px" /> <br />
                  <span className="smaller">{title}</span> <br />
                  <span className="smaller">{department}</span> <br />
                  <span className="smaller">{organization}</span> <br />
                  <img src={phoneIcon} alt='phone' title='phone' height="15px" /> <br />
                  <span className="smaller">{phone}</span>
                </div>
              </div>

              <div className="col-3 cardbg">
                <div>
                  <img className="grdPhoto" src={photo} alt={name} />
                </div>
                <div className="bluebg" >
                  {name}
                </div>
                <div>
                  <img src={briefIcon} alt='briefcase' title='briefcase' height="20px" /> <br />
                  <span className="smaller">{title}</span> <br />
                  <span className="smaller">{department}</span> <br />
                  <span className="smaller">{organization}</span> <br />
                  <img src={phoneIcon} alt='phone' title='phone' height="15px" /> <br />
                  <span className="smaller">{phone}</span>
                </div>
              </div>

              <div className="col-3 cardbg">
                <div>
                  <img className="grdPhoto" src={photo} alt={name} />
                </div>
                <div className="bluebg" >
                  {name}
                </div>
                <div>
                  <img src={briefIcon} alt='briefcase' title='briefcase' height="20px" /> <br />
                  <span className="smaller">{title}</span> <br />
                  <span className="smaller">{department}</span> <br />
                  <span className="smaller">{organization}</span> <br />
                  <img src={phoneIcon} alt='phone' title='phone' height="15px" /> <br />
                  <span className="smaller">{phone}</span>
                </div>
              </div>

            </div>
          ))} 
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect( mapStateToProps, { getEmployees } )(DisplayResultsGrid);

