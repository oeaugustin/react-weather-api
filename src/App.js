import React from 'react';
// import components 
import Heading from './components/Heading/Heading.js';
import Form from './components/Form/Form.js';
import Weather from './components/Weather/Weather.js';
import './App.css'

// api variables 
const API_KEY = "c6d2c5876bae37db5e11b8367f751203";

class App extends React.Component {
  state = {
    temperature: undefined,
    hiTemp: undefined,
    loTemp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined, 
    description: undefined,
    error: undefined 
  }
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    if (city && country){
      console.log(data);
      this.setState({ 
        temperature: data.main.temp,
        hiTemp: data.main.temp_max,
        loTemp: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity, 
        description: data.weather[0].description,
        error: ""
      });
    } else if (city){
        this.setState({ 
          temperature: undefined,
          hiTemp: undefined,
          loTemp: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined, 
          description: undefined,
          error: "Looks like you forgot to enter a country"
        });
      } else if (country){
        this.setState({ 
          temperature: undefined,
          hiTemp: undefined,
          loTemp: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined, 
          description: undefined,
          error: "Looks like you forgot to enter a city!"
        });
      } else {
        this.setState({ 
          temperature: undefined,
          hiTemp: undefined,
          loTemp: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined, 
          description: undefined,
          error: "Whoops, we couldn't find that location. Try another!"
        });
      }
    }
  render() {
    return (
      <div className="container">
        <Heading />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature = {this.state.temperature}
          hiTemp = {this.state.hiTemp}
          loTemp = {this.state.loTemp}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}  
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>    
    );
  }
}

export default App;
