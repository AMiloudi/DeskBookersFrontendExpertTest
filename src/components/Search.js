import React, { PureComponent } from 'react'
import fetchSearchData from '../actions/offices/fetch'
import { connect } from 'react-redux'

class Search extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {persons: ''};
      this.state = {city: ''}
      this.handlePersonChange = this.handlePersonChange.bind(this)
      this.handleCityChange = this.handleCityChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCityChange(event) {
      this.setState({city: event.target.value});
    }

    handlePersonChange(event) {
      this.setState({persons: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      const {persons, city} = this.state;
      console.log(persons, city)
      this.props.fetchSearchData( persons, city)
      console.log(this.props.fetchSearchData(persons, city))
    }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
        <label>
          City:
          <input type="text" value={this.state.city} onChange={this.handleCityChange} />
        </label>
        <br/>
        <label>
          Amount of Persons:
          <input type="number" value={this.state.persons} onChange={this.handlePersonChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchSearchData })(Search)
