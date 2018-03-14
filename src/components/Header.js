import React, { PureComponent } from 'react'

class Header extends PureComponent {
  render() {
    return (
      <div className="Header">
        <span><img alt= 'DeskbookersLogo' src={require('../Images/Deskbookers.png')}/></span>
      </div>
    )
  }
}

export default Header
