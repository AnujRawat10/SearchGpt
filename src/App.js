import React from 'react';
import SignIn from './SignIn';
import logo from './assets/logo.svg';  // Adjust the path as necessary
import memo from './assets/memo.png';  // Adjust the path as necessary
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Open Search GPT</h1>
      </header>
      <div className='box'>
        <div className='source'>
        <h2>Open Source</h2>
        </div>
        
        <div className='built'>
          <div className='super'>
            <p>Built by</p>
            <img src={logo} alt="Supermemory Logo" />
            <a href="https://supermemory.ai">Supermemory.ai</a>
          </div>

          <div className='memo'>
            <p>Personalization by</p>
            <a href="https://memo.com" target="_blank" rel="noopener noreferrer">
              <img src={memo} alt="Memo" style={{ cursor: 'pointer' }} />
            </a>
          </div>
        </div>
      </div>
      <SignIn/>
    </div> 
  );
}

export default App;
