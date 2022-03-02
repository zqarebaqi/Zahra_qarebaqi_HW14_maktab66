import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler} style={{ background: "pink" }}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
