import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <Counter />
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
    </div>
  );
};

export default App;
