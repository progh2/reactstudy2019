import React, { Component } from 'react';

class RefSample extends Component {
  input = React.createRef();
  handleFocus = () => {
    this.input.current.focus();
  };
  render() {
    return (
      <div>
        <input ref={this.input}></input> <br />
        <button onClick={this.handleFocus}>포커스 주기</button>
      </div>
    );
  }
}

export default RefSample;
