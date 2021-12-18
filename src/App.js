import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import palceholder from "./img/weather-icons/150.png";
// import palceholder from "./img/weather-icons/mostlycloudy.svg";
// import Clear from "./img/weather-icons/clear.svg";


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
        <div className="nav">
          <div className="innerNav">
            <input
              type="text" className="search" placeholder="Type in a city name">
            </input>
            <button type="button" className="myButton">
              FIND WEATHER
            </button>
          </div>
        </div>
        <div className="all">
          <div className="card">
            <img  src={palceholder} alt="sun" width="100" height="118" />
            <p>overcast clouds</p>
            <div className="temp"><b>Temperature</b> &nbsp; 10&#176; to 11 &#176;c </div>

            <div className="temp1"><b>Humidly  &nbsp; </b>78% &nbsp; <b>Pressure</b> &nbsp; 1008.48 </div>
          </div>
         <div className="listItem">
            <div><p>03.00</p>
            <img src={palceholder } alt="sun" width="75" height="75" />
            <p>8 &#176;C</p>
            </div>
            <div>
            <p>06.00</p>
            <img src={palceholder } alt="sun" width="75" height="75" />
            <p>9 &#176;C</p>
            </div>
            <div>
            <p>09.00</p>
            <img src={palceholder} alt="sun" width="75" height="75" />
            <p>14 &#176;C</p>
            </div>
            <div>
            <p>12.00</p>
            <img src={palceholder} alt="sun" width="75" height="75" />
            <p>17 &#176;C</p>
            </div>
            <div>
            <p>15.00</p>
            <img src={palceholder} alt="sun" width="75" height="75" />
            <p>18 &#176;C</p>
            </div>
            <div>
            <p>17.00</p>
            <img src={palceholder} alt="sun" width="75" height="75" />
            <p>16 &#176;C</p>
            </div>
            <div>
            <p>21.00</p>
            <img src={palceholder } alt="sun" width="75" height="75" />
            <p>13 &#176;C</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
