import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

const App = () => {
  return (
    <div>
      <ValidationSample />
      <hr></hr>
      <EventPractice />
      <hr></hr>
      <Say />
      <hr></hr>
      <Counter />
      <hr></hr>
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
    </div>
  );
};

export default App;
