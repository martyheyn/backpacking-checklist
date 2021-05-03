import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { SackContext } from '../context/globalState';
import { fetchWeather } from '../API/index';

const useStyles = makeStyles((theme) => ({
  forecast: {
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    marginTop: 1,
    background: '#34ddeb',
    textAlign: 'center',
    borderBottom: 'double',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityBox: {
    margin: 'auto',
    borderRadius: '20px',
    width: '30%',
    background: 'rgba(250, 250, 250, 0.85)',
    boxShadow: '10px 10px 5px 0px rgba(15, 15, 15, 0.404)',
  },
  city: {
    padding: 18,
  },
  temp: {
    fontSize: 35,
  },
  description: {
    fontSize: 25,
    fontWeight: 50,
    marginBottom: 35,
  },
}));

const Weather = () => {
  const [weather, setWeather] = useState({});
  const { location } = useContext(SackContext);

  const city = location.split(' ')[0];
  const state = location.split(' ')[1];

  // Fetch data from the Weather API Based off input
  useEffect(() => {
    const getAPI = async () => {
      // You can await here
      const data = await fetchWeather(city);

      setWeather(data);
    };
    getAPI();
  }, [city]);

  const classes = useStyles();

  return (
    <div>
      {weather.main && (
        <div className={classes.forecast}>
          <h1 className={classes.cityBox}>
            <span className={classes.city}>
              {weather.name} {state}
            </span>
            {/* <sup>{weather.sys.country}</sup> */}
          </h1>
          <div className={classes.temp}>
            {Math.round(weather.main.temp)}
            <sup>°F</sup>
          </div>
          <img
            className='city-icon'
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <h2 className={classes.description}>
            {weather.weather[0].description.toUpperCase()}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Weather;
