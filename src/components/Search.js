import React, { PureComponent } from 'react'
import fetchSearchData from '../actions/offices/fetch'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import grey200 from 'material-ui/styles/colors';
import GoogleMap from './GoogleMap';
import DeskList from './DeskList';

const styles = {
hintTextStyle: {
  color: grey200,
}
}

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
    this.props.fetchSearchData(persons, city)
  }



  render() {
    return (
      <div className="Search">
        <div className="Form">
        <h1> Search for your Desk!</h1>
          <TextField
            hintText="City"
            value={this.state.city}
            onChange= {this.handleCityChange}
            hintStyle={styles.hintTextStyle}
          />
          <TextField
            hintText="Amount of Persons"
            value={this.state.persons}
            onChange={this.handlePersonChange}
            hintStyle={styles.hintTextStyle}
          />
         <RaisedButton
            label="Submit"
            primary={true}
            onClick={ this.handleSubmit}
          />
        </div>
        <div className= "List">
          <DeskList officeRows={this.props.offices ? this.props.offices.rows : []} />
        </div>
        <div className="Map">
          <GoogleMap officeRows={this.props.offices ? this.props.offices.rows : []} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ offices }) => ({ offices });

export default connect(mapStateToProps, { fetchSearchData })(Search)
