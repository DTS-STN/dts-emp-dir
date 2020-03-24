import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { I18n } from '@lingui/react'
import { t } from '@lingui/macro'
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <I18n>
          {({ i18n }) => (
            <NavLink onClick={this.props.logout} href='#'>
              {i18n._(t`Logout`)} 
            </NavLink>
          )}
        </I18n>        
      </Fragment>
    );
  }
}

export default connect( null, { logout })(Logout);
