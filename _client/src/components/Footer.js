import React from 'react'
import WoodMark from './WoodMark';
import Landscape from './Landscape';   //NOTE: this is the blue section of the canada layout 


class Footer extends React.Component {
  render() {
    return (

      <div className="par iparys_inherited">
      <div className="global-footer">
        <footer id="wb-info">

          <Landscape /> 
          <WoodMark />

        </footer>
      </div>
      </div>
    )
  }
}

export default Footer;
