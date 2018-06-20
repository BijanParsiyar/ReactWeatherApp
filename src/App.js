import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import SearchBar from "./containers/SearchBar";
import WeatherList from "./containers/WeatherList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app container">
          <SearchBar />
          <WeatherList />
        </div>
      </Provider>
    );
  }
}

export default App;
