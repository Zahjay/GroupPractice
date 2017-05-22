import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import Main from './components/Main';
import Aside from '.components/Aside';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Aside value="This is an aside"/>
        <Footer />
        <Main/>
      </div>
    );
  }
}

export default App;
