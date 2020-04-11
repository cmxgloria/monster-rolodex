import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
        <SearchBox onSearchChange={this.onSearchChange} />
      </div>
    );
  }
}

export default App;
