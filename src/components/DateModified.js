import React from 'react'


class DateModified extends React.Component {

  render() {

    return (

      <dl id="wb-dtmd">
        <dt>Date modified:</dt>
        <dd><time property="dateModified">2019-08-08</time></dd>
      </dl>
      
    )
  }
}

export default DateModified;
