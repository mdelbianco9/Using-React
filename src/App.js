import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// This adds the header file
class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Header/>



        <Footer/>

      </div>
    );
  }
}

export default App;
