import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        { name: "Naren", age: "27" },
        { name: "Satyam", age: "25" },
        { name: "Parth", age: "24" }
      ]
    });

    const [otherState, setOtherState] = useState('Some Other Value');
    // console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: "27" },
        { name: "Satyam", age: "26" },
        { name: "Parth", age: "24" }
      ]
    })
  }

  // usernameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: "Naren", age: "27" },
  //       { name: event.target.value, age: "26" },
  //       { name: "Parth", age: "24" }
  //     ]
  //   })
  // }
  return (
    <div className="App">
      <h1>Hi I am a react app.</h1>
      <p>Hello World! let's play.</p>

      <button onClick={() => switchNameHandler('maxmilian')}>Click Here</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        click={switchNameHandler.bind(this, 'Naren')}
         >Hello this extra</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React app') );

export default App;