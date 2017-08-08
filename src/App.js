import React, { Component } from 'react';
import SearchBar from './containers/search-bar.component';
import WeatherList from './containers/weather-list.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
