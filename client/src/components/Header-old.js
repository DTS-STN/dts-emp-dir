import React from 'react';
import gocEnLogo from '../img/GOC_black_en.jpg';

const Header = () => {
  return (
    <header>

      <div>
        <a class="skip-main" href="#Engagements">Skip to main content</a>
      </div>

      <div id="header-container" class="container-fluid">
        <div id="header" role="banner" class="row">
          <div class="col-8 col-md-4 col-sm-6 col-xs-8 col-lg-3 col-xl-3">
            <a id="gc-header-logo" href="https://www.canada.ca/">
              <img class="img-fluid pl-xl-1 pt-2 " src={gocEnLogo} alt="Government of Canada Logo" /></a>
          </div>
          <div class="col">
            <div class="pr-xl-3 pt-2 float-right">
              <p id="lang-toggle-button-label">
                <a id="lang-change-link" class="links" href="startfr.html" ><span>Fran&#231;ais</span></a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header;