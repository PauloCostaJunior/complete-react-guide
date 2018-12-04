import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: "Paulo" , age: "26" },
      { name: "Billy" , age: "6" },
      { name: "Johannes" , age: "25" }
    ],
    //will not be discarded
    otherState: 'some other value'
  }

  switchNameHandler = ( newName ) => {
    //console.log('hey');
    // Don't do this this.state.persons[0].name = "Max";
    this.setState( {
        persons: [
          { name: newName , age: "26" },
          { name:"Billy" , age: "6" },
          { name:"Johannes" , age: "25" }
        ]
     } );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is really working</p>
        <button onClick= {() => this.switchNameHandler('Maximillian!!')}>Switch Name Button</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}>My hobbies: MineCraft</Person>
      </div> 
    );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
  }
}

export default App;
