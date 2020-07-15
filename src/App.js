import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Footer from './components/Footer'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome To React With Redux</h2>
      </div>
      <Router>
        <div className="Todo-App">
          <Message />
          <TodoForm />
          <Route path="/:filter?" render={({ match }) => (
            <TodoList filter={match.params.filter} />
          )} />

          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
