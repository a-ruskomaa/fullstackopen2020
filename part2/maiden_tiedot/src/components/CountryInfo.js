import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './Weather';

const CountryInfo = ({ country }) => {
    const [weather, setWeather] = useState({})

    const hook = () => { axios
        .get(`http://api.weatherstack.com/current?access_key=a8112ae6dadd84d11ea65570369123c3&query=${country.capital},${country.name}`)
        .then(response => setWeather(response.data))
    }

    useEffect(hook, [])

    return (
        <div>
            <h2>{country.name}</h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h3>languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt={country.name} width='100' />
            <Weather weather={weather} />
        </div>
    )

}

export default CountryInfo