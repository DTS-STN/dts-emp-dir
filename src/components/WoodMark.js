import React from 'react'
import { I18n } from '@lingui/react'
import { t } from '@lingui/macro'
import gocWoodmark from '../assets/wmms-blk.svg';


class WoodMark extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="brand">
        <div className="container">
          <div className="row">
            <nav className="col-md-10 ftr-urlt-lnk">
              <I18n>{({ i18n }) => (<h2 className="wb-inv">{i18n._(t`About this site`)}</h2>)}</I18n>
              <ul>
                {/* <li><I18n>{({ i18n }) => (<a href="https://www.canada.ca/en/social.html">{i18n._(t`Social media`)}</a>)}</I18n></li> */}
                {/* <li><I18n>{({ i18n }) => (<a href="https://www.canada.ca/en/mobile.html">{i18n._(t`Mobile applications`)}</a>)}</I18n></li> */}
                <li><I18n>{({ i18n }) => (<a href="https://www.canada.ca/en/government/about.html">{i18n._(t`About Canada.ca`)}</a>)}</I18n></li>
                <li><I18n>{({ i18n }) => (<a href="https://www.canada.ca/en/transparency/terms.html">{i18n._(t`Terms and conditions`)}</a>)}</I18n></li>
                <li><I18n>{({ i18n }) => (<a href="https://www.canada.ca/en/transparency/privacy.html">{i18n._(t`Privacy`)}</a>)}</I18n></li>
              </ul>
            </nav>
            <div className="col-xs-6 visible-sm visible-xs tofpg">
              <I18n>{({ i18n }) => (<a href="#wb-cont">{i18n._(t`Top of page`)} <span className="glyphicon glyphicon-chevron-up"></span></a>)}</I18n>
            </div>
            <div className="col-xs-6 col-md-2 text-right">
              <I18n>
                {({ i18n }) => (
                  <img src={gocWoodmark} alt={i18n._(t`Symbol of the Government of Canada`)} />
                )}  
              </I18n>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default WoodMark;
