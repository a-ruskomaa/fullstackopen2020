import React, { useState, useEffect } from 'react'
import personService from './services/personService'
import PersonList from './components/PersonList'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)

  const formData = {
    newName,
    setNewName,
    newNumber,
    setNewNumber
  }

  const hook = () => {
    personService
      .getAll()
      .then(fetchedPersons => {
        setPersons(fetchedPersons)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson &&
      window.confirm(`${newName} is already added to the phonebook, do you want to update ${newName}'s phone number?`)) {
        const id = existingPerson.id
        const updatedPerson = {
          name: newName,
          number: newNumber,
          id: id
        }

        personService
          .update(id, updatedPerson)
          .then(response => {
            const updatedPersons = persons.map(person => person.id !== id ? person : updatedPerson)
            setPersons(updatedPersons)
            setNewName('')
            setNewNumber('')
            showInfo(`${updatedPerson.name}'s number has been updated`)
          })
          .catch(error => {
            console.log(error.response)
            // showError(error.response.data)
          })
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      console.log(newPerson)
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          showInfo(`${returnedPerson.name} has been added to the Phonebook`)
        })
        .catch(error => {
          const message = error.response.data.errors.join('\n')
          showError(message)
        })
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(returnedPerson => {
          setPersons(persons.filter(p => p.id !== id))
          showInfo(`${name} has been removed from the Phonebook`)
        })
        .catch(error => {
          console.log(error.response.data)
          // showError(error.response.data)
        })
    }

  }

  const showError = (message) => {
    setNotification({ message: message, type: 'error' })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const showInfo = (message) => {
    setNotification({ message: message, type: 'info' })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <h3>PersonFilter</h3>
      <PersonFilter value={filter} setFilter={setFilter} />
      <h3>Add new</h3>
      <PersonForm addPerson={addPerson} formData={formData} />
      <h3>Numbers</h3>
      <PersonList persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  )

}

export default App