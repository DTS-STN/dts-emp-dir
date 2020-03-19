import React from 'react'
import rowsIcon from '../assets/rowsIcon.png';
import gridIcon from '../assets/gridIcon.png';


class DisplayIcons extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row pt-4">
          <img src={rowsIcon} height="30px" width="30px" alt="Display by rows" title="Display data as a table" /> 
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={gridIcon} height="30px" width="30px" alt="Display by grid" title="Display data as a grid" /> 
        </div>
      </React.Fragment>
    )
  }
}

export default DisplayIcons;
