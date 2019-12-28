import React, { Component } from 'react';

class RefSample extends Component {
  render() {
    return (
      <div>
        <input
          ref={ref => {
            this.input = ref;
          }}
        ></input>
      </div>
    );
  }
}

export default RefSample;
