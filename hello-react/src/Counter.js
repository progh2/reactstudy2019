import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 1,
    fixedNumber: 3
  };

  render() {
    const { fixedNumber, number } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // 방법1
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });

            // 방법2. return이 빠져서 더 깔끔하다.
            this.setState(prevState => ({
              number: prevState.number + 1
            }));
          }}
        >
          {' '}
          +1{' '}
        </button>
      </div>
    );
  }
}
export default Counter;
