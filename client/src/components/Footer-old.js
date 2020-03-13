import React from 'react';
import gocWoodmark from '../img/goc--footer-logo.svg';

const Footer = () => {
  return (

    // <!-- Footer -->

    <footer id="wb-info" >
      <div class="brand">
        <div class="container">
          <div class="row">
            <nav class="col-md-9 col-lg-9 ftr-urlt-lnk">
              <ul>
                <li>
                  <a id="about-canada" class="links" href="https://www.canada.ca/en/government/about.html" >About Canada.ca</a>
                </li>
                <li>
                  <a id="terms" class="links" href="https://www.canada.ca/en/transparency/terms.html" >Terms and conditions</a>
                </li>
                <li>
                  <a id="privacy" class="links" href="https://www.canada.ca/en/transparency/privacy.html" >Privacy</a>
                </li>
              </ul>
            </nav>
            <div class="col-xs-6 col-md-3 col-lg-3 text-right align-self-center">
              <img id="gc-footer-logo" src={gocWoodmark} alt="Symbol of the Government of Canada" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
