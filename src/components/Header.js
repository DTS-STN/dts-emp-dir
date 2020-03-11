import React from 'react'
import HeaderLang from '../components/HeaderLang'
import HeaderLogo from '../components/HeaderLogo'
import { Trans } from '@lingui/macro';
//import HeaderNav  from '../components/HeaderNav'
// import Breadcrump from '../components/Breadcrump';

class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="par iparys_inherited">
        <div className="global-header">
          <nav>
            <ul id="wb-tphp" className="wb-init wb-disable-inited">
              <li className="wb-slc"><a className="wb-sl" href="#wb-cont"><Trans>Skip to main content</Trans></a></li>
              <li className="wb-slc"><a className="wb-sl" href="#wb-info"><Trans>Skip to "About government"</Trans></a></li>
            </ul>
          </nav>

          <header>
            <div id="wb-bnr" className="container">
              <HeaderLang />
              <HeaderLogo />
            </div>

            {/* <HeaderNav /> */}
            {/* <Breadcrump /> */}

          </header>

        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Header;