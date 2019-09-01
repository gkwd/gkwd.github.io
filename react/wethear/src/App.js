import React, { Component } from "react";
// import "./App.css";

const PLACES = [
  { name: "Tashkent", zip: "1512569"},
  { name: "Holubynka", zip: "708546" },
  { name: "San Jose", zip: "1689498" },
  { name: "Santa Cruz", zip: "5393068" },
  { name: "Honolulu", zip: "5856194" },
  { name: "London", zip: "2643743"},
  { name: "München", zip: "3220838"},
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;                                                       
    const URL = "http://api.openweathermap.org/data/2.5/weather?id=" + zip + "&lang=ru&appid=e4ef437a34170a4cb1387ee0bd5bce97&units=imperial";
    console.log(URL)
    console.log()
    fetch(URL)
      .then( res => res.json())
        .then(json => {
            this.setState({ weatherData: json });
        });
  }
  render() {
    const weatherD = this.state.weatherData;
    if (!weatherD) { 
      return <div className="loading_block">Loading...</div>; 
      
      }
    
    const weather = weatherD.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div className="weather_block">
        <h1>
          {weather.main} in {weatherD.name}
          <img src={iconUrl} alt={weatherD.description} />
        </h1>
          <p>Current: {weatherD.main.temp}°F</p>
          <p>High: {weatherD.main.temp_max}°F</p>
          <p>Low: {weatherD.main.temp_min}°F</p>
          <p>Wind Speed: {weatherD.wind.speed} mi/hr</p>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="container">
        <div className="wrapper">
          <div className="Button-group">
            {PLACES.map((place, index) => (
              <button
                key={index}
                  className='btn btn-3'
                    onClick={() => {
                  this.setState({ activePlace: index });
                }}
              >
                
                {place.name}
              </button>
            ))}
          </div>
        <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
        </div>
      </div>
    );
  }
}

export default App;