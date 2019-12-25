import React, { Component } from 'react';

export default class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={e => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}
