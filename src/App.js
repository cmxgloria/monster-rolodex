import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      string: "hello gloria",
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.string}</p>
        <button
          onClick={() => {
            this.setState({ string: "hello matthew" });
          }}
        ></button>
      </div>
    );
  }
}

export default App;
