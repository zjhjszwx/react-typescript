import React, { Component } from 'react';
interface Greating {
  name: string;
  firstName?: string;
}
interface State {
  count: number;
}

export default class HelloClass extends Component<Greating, State> {
  state: State = {
    count: 0
  };
  render() {
    return <div>{this.props.name}</div>;
  }
}
