import React, { Component } from 'react';
//import { Container } from 'reactstrap';   NOTE: ReactStrap is kind of a version of bootstrap it will need to be added to the package.json
import { connect } from 'react-redux';
import SearchBox from './SearchBox';

class MainBody extends Component {
  render() {

    const { language } = this.props.language

    return (
      <div id="mainbody">
        {/* <Container> */}
        <SearchBox />


        <div className="row">
          <div className="col-md-12" Style="background-color: #e6f2ff; min-height: 450px; text-align: center;">
            <p>Your current language is : {language === 'fr' ? 'French' : 'English'} </p>
          </div>
        </div>

        {/* </Container> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language
});

export default connect( mapStateToProps )(MainBody);
