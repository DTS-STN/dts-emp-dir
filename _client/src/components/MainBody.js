import React, { Component } from 'react';
//import { Container } from 'reactstrap';   NOTE: ReactStrap is kind of a version of bootstrap it will need to be added to the package.json
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import LoginModal from './auth/LoginModal';
import SearchBar from './SearchBar';
import DisplayResults from './DisplayResults';


class MainBody extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isSuperuser: PropTypes.bool,
    isAdmin: PropTypes.bool
  };

  render() {

    return (
      <div id="mainbody">

        <h1 id="banner-ed" className="bluetitle">Employee Directory</h1>

        {/* {this.props.isAuthenticated ? */}
          <div>
            <SearchBar />
            <DisplayResults />
          </div>
      {/* : 
          <div className="row">
            <div className="col-3">
              &nbsp;
            </div>
            <div className="col-6">
              <LoginModal />
            </div>
            <div className="col-3">
              &nbsp;
            </div>
          </div>
        }  */}

      </div>
    )
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
});

export default connect( mapStateToProps )(MainBody);
