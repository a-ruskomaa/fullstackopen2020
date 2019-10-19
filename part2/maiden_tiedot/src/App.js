import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ListCountries from './components/ListCountries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('countries fetched')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <div>
        find countries: <input value={filter} onChange={(event) => setFilter(event.target.value)} />
      </div>
      <ListCountries countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default App;
