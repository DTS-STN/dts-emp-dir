import React from 'react'
import rowsIcon from '../assets/rowsIcon.png';
import gridIcon from '../assets/gridIcon.png';
import { connect } from 'react-redux';
import { setDisplayStyle } from '../actions/displayActions'
import PropTypes from 'prop-types';


class DisplayIcons extends React.Component {

  static propTypes = {
    setDisplayStyle : PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      display: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(display) {
    this.setState({ display: display }, () =>
    this.props.setDisplayStyle( display ),
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="row pt-4">
          <a href="#row"><img onClick={() => this.handleClick('row')} src={rowsIcon} height="30px" width="30px" alt="Display by rows" title="Display data as a table" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#grid"><img onClick={() => this.handleClick('grid')} src={gridIcon} height="30px" width="30px" alt="Display by grid" title="Display data as a grid" /></a>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  display: state.display
});

export default connect( mapStateToProps, { setDisplayStyle })(DisplayIcons);
