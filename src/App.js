import React, { Component } from 'react';
import { DataGridDemo } from './components/Table.js';
import { SocialFollow } from './components/socialFollow.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "h1" >

				<h1>Welcome to NSCSP your-first-contribution Github Page Tested with Netfify 👋 </h1>
					
				</div>
        
        <DataGridDemo></DataGridDemo>

				<SocialFollow></SocialFollow>
        
      </div>
    );
  }
}

export default App;
  
