import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (

        <div className="App">
          <Header />
          <Search />
          <GoogleMap />
          <Footer/>
        </div>

    )
  }
}

export default App
