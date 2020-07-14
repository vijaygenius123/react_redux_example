import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

const todoChangeHandler = val => store.dispatch({ type: 'CURRENT_TODO', payload: val })
const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <React.StrictMode>
      <App {...state} currentChange={todoChangeHandler} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
