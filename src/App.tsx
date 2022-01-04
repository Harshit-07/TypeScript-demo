import React from 'react';
import './App.css';
import Greet from './components/greet';
// import Person from './components/person';
// import Persons from './components/persons';
import Status from './components/status';
import Heading from './components/heading';
import Oscar from './components/oscar';

function App() {

  // for objects
  const fullName = {
    first:'Bruce',
    last:'Wayne'
  }

  // for arrays
  const personsName = [
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Tony',
      last:'Stark'
    },
    {
      first:'Tim',
      last:'Cook'
    }
  ]

  return (
    <div className="App">
      {/* <Greet name='Harshit' greetCount={20} isLoggedIn={true}/> */}
      {/* <Person name={fullName}/> */}
      {/* <Persons names={personsName}/> */}
      {/* <Status message='success'/> */}
      {/* Single Children */}
      {/* <Heading>PlaceHolder Text</Heading> */}
      {/* Nested Children */}
      <Oscar>
        <Heading>This is Oscar Component</Heading>
      </Oscar>
    </div>
  );
}

export default App;
