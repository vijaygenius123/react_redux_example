import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome To React With Redux</h2>
      </div>
      <div className="Todo-App">
        <Message />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
