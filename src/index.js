import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <React.StrictMode>
      <App {...state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)

setTimeout(() => {
  store.dispatch({ type: "TODO_ADD", payload: { id: 4, name: 'Add Todo From Dispatch', isCompleted: false } })
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
