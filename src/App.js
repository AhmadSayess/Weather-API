import React, { Component } from "react";
import Search from "./components/Search";
import Card from "./components/Card";


import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
// import palceholder from "./img/weather-icons/150.png";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import Clear from "./img/weather-icons/clear.svg";
import WeatherItem from "./components/WeatherItem";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ahmad"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
        <Search handleInput={this.handleInputChange} /> */}
        <Search/>
        
        <div className="all">
          <WeatherItem/>
          <Card/>
        </div>
      </div>
    );
  }
}



export default App;
