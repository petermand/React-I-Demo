import React, { Component } from 'react';

class ClassCompWithState extends Component {
    constructor() {
      super();
      this.state = {
        someData: 8
      };
    }
  
  render() {
    return (
      <div>{`Hey Jerks, Have some data: ${this.state.someData}`}</div>
    );
  }
}

export default ClassCompWithState;