import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

///////////// PAGES
import { Main } from "./pages/Main";
class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className="my-5">
          React | React-router | Redux
          <br />
          TODO
        </h1>
        <Main />
      </div>
    );
  }
}

export default App;
