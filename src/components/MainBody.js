import React, { Component } from 'react';
//import { Container } from 'reactstrap';   NOTE: ReactStrap is kind of a version of bootstrap it will need to be added to the package.json
import { connect } from 'react-redux';

class MainBody extends Component {
  render() {

    const { language } = this.props.language

    return (
      <div id="mainbody">
        {/* <Container> */}

            <div>
              <div className="row">
                <div className="col-md-12" Style="background-color: #e6f2ff; min-height: 450px; text-align: center;">
                  <h1>Hello world !!</h1>
                  <p>Your content here </p>
                  <p>Your current language is : {language === 'fr' ? 'French' : 'English'} </p>
                </div>
              </div>
            </div>

        {/* </Container> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language
});

export default connect( mapStateToProps )(MainBody);
