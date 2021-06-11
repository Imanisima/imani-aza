import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'

import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'
import Chat from './components/Chat/Chat'
import Resume from './components/Resume/Resume'

import Footer from './components/Footer'

class App extends Component {
  render() {
    return (

      // <div id="colorlib-page">
      <div id="container-wrap">
        <Header></Header>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Works></Works>
          <Resume></Resume>
          <Chat></Chat>
        </div>

        <Footer></Footer>
      </div>
      // </div>
    );
  }
}

export default App;