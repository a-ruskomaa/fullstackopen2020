import React, { useState } from 'react'
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
  const [persons, setPersons] = useState(defaultNames)
  const [filter, setFilter] = useState('')

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