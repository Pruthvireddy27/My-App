import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Person from './Person/Person';
import { render } from '@testing-library/react';
// import person from './Person/Person';

class App extends Component {
  state = { 
    persons : [
      { id : '0', name: 'max', age: 28},
      { id : '1', name: 'manu', age: 29},
      { id : '2', name: 'Stephanie', age: 26}
    ],
    otherState : 'some other value',
    showPersons : false
  }

     nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = { ...this.state.persons[personIndex] };
     
      // const person = Object.assign({}, this.state.persons[personIndex])  

       person.name = event.target.value;

       const persons = [...this.state.persons];
       persons[personIndex] = person;

       this.setState({ persons: persons});
      
      }


  deletePersonHandler =(personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState ({persons : persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

 render() {
    const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border : '1x solid blue',
    padding : '8px'
  }
 

  let persons = null;
  if ( this.state.showPersons ) {
    persons = (
      <div>
        {this.state.persons.map ((person, index) => {
              return <Person 
              click ={() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id} 
              changed = {(event) => this.nameChangedHandler(event, person.id)}/>
        })}
      </div>
    );
  }

  render () 
  return (
    <div className="App">
      <h1>Hi, I'm react react app developer</h1>
      <p>This is really working</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Person</button>
     {persons}
    </div>
  );
 }
}


export default App;
