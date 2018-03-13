import React, { PureComponent } from 'react'

class Footer extends PureComponent {
  render() {
    return (
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Footer
