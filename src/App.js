import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          Hello!
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
