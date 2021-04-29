import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import {List} from "./components/List";
import Card from "./components/Card";

/*
  При помощи контекста свзать корзину и карточки

  У карточки добавить + и -???
  При нажатии на + Увеличивать количество товаров в корзине
*/

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Card name="Foo" id="1"/>
          <Card name="Bar" id="2"/>
          <Card name="Baz" id="3"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
