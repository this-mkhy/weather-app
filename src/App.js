import React, { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Content from './components/Content/Content';
import Footer from './components/footer/Footer';

import {getWeatherData} from './api/getWeatherData'
import styles from './App.module.css';

const App = () => {
  console.log("getWeatherData", {getWeatherData});

  const [weatherData, setWeatherData] = useState({});
  const [coordinates, setCoordinates] = useState({
    latitude: 30.083,
    longitude: 31.283,
  });

  // Celsius to Fahrenheit
  // Celsius = (Celsius − 32) × 5/9
  // Fahrenheit = Celsius * 9/5 + 32
  const convertWeather = (type = "Cels") => {
    let FahrenheitDegree = 0;
    let CelsiusDegree = 0;
    if (weatherData.temperature) {
      if (type === "Cels") {
        CelsiusDegree = ((weatherData.temperature * 9) / 5 + 32).toFixed(0);
        setWeatherData({ ...weatherData, temperature: CelsiusDegree });
        CelsiusDegree = 0;

      } else {
        FahrenheitDegree = ((weatherData.temperature - 32) * (5 / 9)).toFixed(0);
        setWeatherData({ ...weatherData, temperature: FahrenheitDegree });
        FahrenheitDegree = 0;
      }
    } 
  };

  useEffect(() => {
    //coordinates will be the coordinates of user locate
    //built in browser geolocation api to get user coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setCoordinates(newLocation);
        getWeatherData(newLocation.latitude, newLocation.longitude, "")
          .then(data => {
            setWeatherData({
              temperature: data.current.temperature,
              description: data.current.weather_descriptions[0],
              wind_speed: data.current.wind_speed,
              wind_degree: data.current.wind_degree,
              pressure: data.current.pressure,
              precip: data.current.precip,
              humidity: data.current.humidity,
              img: data.current.weather_icons,
              location: data.location.name,
              region: data.location.region,
              country: data.location.country,
            });
            console.log('data is', data)
          })
      });
    } else {
      getWeatherData(coordinates.latitude, coordinates.longitude, "");
    }
    //should happen in the start
  }, []);


  return (
    <div className={styles.App}>
       <Header currentTemp={weatherData.temperature} convertWeather={convertWeather}/>
       <Content {...weatherData}/>
       <Footer {...weatherData}/>
    </div>
  );
}

export default App;
