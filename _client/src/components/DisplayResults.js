import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayResultsRows from './DisplayResultsRows';
import DisplayResultsGrid from './DisplayResultsGrid';


class DisplayResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display: ''
    };
  }

  render() {
    
    const { display } = this.props.display;
    
    return (
      <React.Fragment>
        <div>
          { display === 'row' 
            ? 
            <DisplayResultsRows />
            :   
            <DisplayResultsGrid />
          }
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  display: state.display
});

export default connect( mapStateToProps, null )(DisplayResults);

