import React from 'react'
import { connect } from 'react-redux'
import { I18nProvider } from '@lingui/react'

import en from '../locale/en/messages.js'
import fr from '../locale/fr/messages.js'

const locMessages = {en, fr}

class I18nLoader extends React.Component {
  render () {
    const { children } = this.props
    const { language } = this.props.language

    return (
      <I18nProvider language={language} catalogs={locMessages}>
        {children}
      </I18nProvider>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language
});

export default connect( mapStateToProps )(I18nLoader);