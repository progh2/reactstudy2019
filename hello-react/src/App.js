import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

const App = () => {
  return (
    <div>
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
