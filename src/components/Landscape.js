import React from 'react'
//import LandscapePng from '../assets/landscape.png'
import { Trans } from '@lingui/macro';


class Landscape extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="landscape">
        <nav className="container wb-navcurr">
          <h2 className="wb-inv"><Trans>About government</Trans></h2>
          {/* <ul className="list-unstyled colcount-sm-2 colcount-md-3">
            <li><a href="https://www.canada.ca/en/contact.html"><Trans>Contact us</Trans></a></li>
            <li><a href="https://www.canada.ca/en/government/dept.html"><Trans>Departments and agencies</Trans></a></li>
            <li><a href="https://www.canada.ca/en/government/publicservice.html"><Trans>Public service and military</Trans></a></li>
            <li><a href="https://www.canada.ca/en/news.html"><Trans>News</Trans></a></li>
            <li><a href="https://www.canada.ca/en/government/system/laws.html"><Trans>Treaties, laws and regulations</Trans></a></li>
            <li><a href="https://www.canada.ca/en/transparency/reporting.html"><Trans>Government-wide reporting</Trans></a></li>
            <li><a href="http://pm.gc.ca/eng"><Trans>Prime Minister</Trans></a></li>
            <li><a href="https://www.canada.ca/en/government/system.html"><Trans>About government</Trans></a></li>
            <li><a href="http://open.canada.ca/en"><Trans>Open government</Trans></a></li>
          </ul> */}
        </nav>
      </div>
      </React.Fragment>
    )
  }
}

export default Landscape;
