import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is really working</p>
        <Person name="Paulo" age="26"/>
        <Person name="Kath" age="07"> My hobbies: Racing</Person>
      </div>
   );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
  }
}

export default App;
