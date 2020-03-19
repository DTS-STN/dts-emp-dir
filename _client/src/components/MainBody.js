import React, { Component } from 'react';
//import { Container } from 'reactstrap';   NOTE: ReactStrap is kind of a version of bootstrap it will need to be added to the package.json
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import DisplayResults from './DisplayResults';


class MainBody extends Component {
  render() {

    //const { language } = this.props.language

    return (
      <div id="mainbody">

        <h1 className="bluetitle">Employee Directory</h1>

        {/* <Container> */}
        <SearchBar />
        <DisplayResults />

        {/* <div className="row placeholder">
          <div className="col-md-12 pt-3 bolder">
            <p>Your current language is : {language === 'fr' ? 'French' : 'English'} </p>
          </div>
        </div> */}

        {/* </Container> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language
});

export default connect( mapStateToProps )(MainBody);
