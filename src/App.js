import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubProject from './components/SubProject';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {Array(5).fill(5).map((item, index) => <li className='list-item'>{index}</li>)}
      </header>
      <div className='content'>
        <SubProject />
      </div>
    </div>
  );
}

export default App;
