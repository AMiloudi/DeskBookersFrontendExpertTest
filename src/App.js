import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/theme';

class App extends Component {
  static childContextTypes = {
   muiTheme: PropTypes.object.isRequired,
 }

  getChildContext() {
   return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header />
          <Search />
          <Footer/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
