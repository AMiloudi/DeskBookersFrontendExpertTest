import React, { PureComponent } from 'react'

const style = {
  width: '50%',
  height: '50%',
  position: 'relative'
}

export class DeskList extends PureComponent {

  renderCard = (row, index) => {
    return (
      <div className="desk-container">
        <div className="desk-image">
          <img src={row.image_urls[0]} alt="DeskImage" />
        </div>
        <div className="desk-details">
            <h3>{row.name}</h3>
            <p>{row.address[0]} <br /> {row.address[1]}</p>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div className="resultList">
          {this.props.officeRows ? this.props.officeRows.map(this.renderCard) : ""}
      </div>
    );
  }
}

export default DeskList
