import React, { Component } from 'react';
import '../App.css';
import Form from './Form'
import Form2 from './form2'
import Form3 from './form3'
import Weather from './Weather'
import Logout from './Logout'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class Main extends Component {

    state = {
      city: '',
      temp: '',
      pressure: '',
      wind: '',
      error: '',
      city2: '',
      temp2: '',
      pressure2: '',
      wind2: '',
      error2: '',
      city3: '',
      temp3: '',
      pressure3: '',
      wind3: '',
      error3: ''
    }

  gettingForecast = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;

  if(city) {

      const weatherApiLink = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`);
      const data = await weatherApiLink.json();
console.log(data)
      this.setState({
        temp: data.main.temp,
        city: data.name,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        error: ''
      })
    } else {
      this.setState({
        city: '',
        temp: '',
        pressure: '',
        wind: '',
        error: 'Enter city!'
      })
    }
    
    
  }
  gettingForecast2 = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;

  if(city) {

      const weatherApiLink = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`);
      const data = await weatherApiLink.json();
console.log(data)
      this.setState({
        temp2: data.main.temp,
        city2: data.name,
        pressure2: data.main.pressure,
        wind2: data.wind.speed,
        error2: ''
      })
    } else {
      this.setState({
        city2: '',
        temp2: '',
        pressure2: '',
        wind2: '',
        error2: 'Enter city!'
      })
    }
    
    
  }
  gettingForecast3 = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;

  if(city) {

      const weatherApiLink = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`);
      const data = await weatherApiLink.json();
console.log(data)
      this.setState({
        temp3: data.main.temp,
        city3: data.name,
        pressure3: data.main.pressure,
        wind3: data.wind.speed,
        error3: ''
      })
    } else {
      this.setState({
        city3: '',
        temp3: '',
        pressure3: '',
        wind3: '',
        error3: 'Enter city!'
      })
    }
    
    
  }


  render() {
    return (
      <div>
        <Logout />
        <Form weatherMethod={this.gettingForecast} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          pressure={this.state.pressure}
          wind={this.state.wind}
          error={this.state.error}
        />       
        <Form2  weatherMethod2={this.gettingForecast2} />
        <Weather 
          temp={this.state.temp2}
          city={this.state.city2}
          pressure={this.state.pressure2}
          wind={this.state.wind2}
          error={this.state.error2}
        />       
        <Form3  weatherMethod3={this.gettingForecast3} />
        <Weather 
          temp={this.state.temp3}
          city={this.state.city3}
          pressure={this.state.pressure3}
          wind={this.state.wind3}
          error={this.state.error3}
        />       
      </div>
      
      
      
        
    );
  }
}

export default Main;