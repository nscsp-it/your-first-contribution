import React, { Component } from 'react';
import { DataGridDemo } from './Table';
import { SocialFollow } from "./socialFollow"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to NSCSP your-first-contribution Github Page 👋 </h1>
        <SocialFollow></SocialFollow>
        <DataGridDemo></DataGridDemo>
        
      </div>
    );
  }
}

export default App;
