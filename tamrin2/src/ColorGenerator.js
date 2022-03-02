import React, { Component } from "react";

class Colorgenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["#d47e7e"],
    };
    this.generate = this.generate.bind(this);
  }

  generate() {
    var mynewcolor = "#" + Math.random().toString(16).slice(2, 8);
    this.setState({ colors: [...this.state.colors, mynewcolor] });
  }

  render() {
    return (
      <div>
        <button onClick={this.generate}>add color</button>
        {this.state.colors.map((item) => (
          <div>
            <div
              style={{
                background: item,
                height: "10px",
                width: "10px",
                display: "inline-block",
              }}
            ></div>
            {item}
          </div>
        ))}
      </div>
    );
  }
}

export default Colorgenerator;
