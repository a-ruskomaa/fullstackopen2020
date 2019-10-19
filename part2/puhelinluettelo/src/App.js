import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const defaultNames = [
  { name: 'Arto Hellas', number: '040-123456', id: '1' },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: '2' },
  { name: 'Dan Abramov', number: '12-43-234345', id: '3' },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: '4' }
]

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Filter</h3>
      <Filter value={filter} setFilter={setFilter} />
      <h3>Add new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  )

}

export default App