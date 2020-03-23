import React from 'react'
import SearchBox from './SearchBox';
//import DisplayIcons from './DisplayIcons';


class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row"> 
          <div className="col-11">
            <SearchBox />
          </div>
          <div className="col-1">
            &nbsp;
            {/* <DisplayIcons /> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SearchBar;
