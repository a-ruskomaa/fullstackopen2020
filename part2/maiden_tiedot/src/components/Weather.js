import React from 'react';

const Weather = ({ weather }) => {

    if (weather.current === undefined) {
        return <div>Fetching weather..</div>
      } else {
        return (
            <div>
            <h3>Weather in {weather.location.name}</h3>
            <div><strong>temperature: </strong> {weather.current.temperature} Celcius</div>
            <img src={weather.current.weather_icons[0]} alt="" />
            <div><strong>wind: </strong>{weather.current.wind_speed} km/h direction {weather.current.wind_dir}</div>
        </div>
        )
      }
}
        
export default Weather