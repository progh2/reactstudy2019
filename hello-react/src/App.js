import React, {Component} from 'react';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
    render() {
        return (
            <div>
                <IterationSample></IterationSample>
                <hr/>
                <ScrollBox ref={
                    ref => (this.scrollBox = ref)
                }/>
                <br/>
                <button onClick={
                    () => this.scrollBox.scrollToBottom()
                }>
                    맨 밑으로
                </button>
            </div>
        );
    }
}
/*
const App = () => {
  return (
    <div>
      <ScrollBox ref={ref => (this.scrollBox = ref)} />
      <br />
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      <hr />
      <RefSample />
      <hr />
      <ValidationSample />
      <hr />
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
*/
export default App;
