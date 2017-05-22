import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import Main from './components/Main';

//import components
import Header from './components/Header.jsx';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav/>
        <Main/>
        <Aside/>
        <Footer />   
      </div>
    );
  }
}

export default App;
