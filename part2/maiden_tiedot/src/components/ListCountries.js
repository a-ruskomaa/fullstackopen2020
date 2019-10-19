import React from 'react';
import CountryInfo from './CountryInfo'

const ListCountries = ({ countries, filter, setFilter }) => {

    var filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    const rows = () => {
        if (filteredCountries.length > 10) {
            return <div>Too many matches, specify another filter</div>
        }

        if (filteredCountries.length === 1) {
            return <CountryInfo country={filteredCountries[0]} />
        }

        return filteredCountries.map(country => <div key={country.alpha3Code}>{country.name} <button onClick={() => setFilter(country.name)}>show</button></div>)
    }

    return (
        <div>
            {rows()}
        </div>
    )
}


export default ListCountries