import React, { Component } from "react";
import Button from "./button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() {
    this.setState({ counter: this.state.counter + 1 });
  }

  remove() {
    if (this.state.counter === 0) return;
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <Button title={"increase"} clickHandler={this.add} />
        <Button title={"decrese"} clickHandler={this.remove} />
      </div>
    );
  }
}

export default Counter;
