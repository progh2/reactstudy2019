import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;

/*
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    const name = 'react';
    return <div className="react">{name}</div>
  }
}


function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '16px'
  };
  const somename = undefined;
  return (
    <>
      <div className="react">
        <form>
          <input></input>
        </form>
        안녕? {somename || '무명씨'}야!<br></br>
        {name === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
        {name === '리액트' ? <h1>리액트입니다</h1> : null}
        <h1>{name} 안녕!</h1>
        <h2
          style={{
            backgroundColor: 'Aqua',
            color: 'black',
            fontSize: 48,
            fontWeight: 'bold',
            padding: '16px'
          }}
        >
          잘 작동하니?
        </h2>
      </div>
    </>
  );
}

export default App;
*/
