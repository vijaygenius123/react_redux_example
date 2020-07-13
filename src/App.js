import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome To React With Redux</h2>
      </div>
      <div className="Todo-App">
        <form>
          <input type="text" />
        </form>
        <div className="Todo-List">
          <ul>
            <li>
              <input type="checkbox" /> Create Static UI
            </li>
            <li>
              <input type="checkbox" /> Create Initial State
            </li>
            <li>
              <input type="checkbox" /> Use State To Render UI
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
}

export default App;
