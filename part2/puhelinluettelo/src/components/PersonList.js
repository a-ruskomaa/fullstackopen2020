import React from 'react'

const PersonList = ({persons, filter, deletePerson}) => {

    const rows = () =>
        persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => <Person key={person.id} person={person} deleteHandler={() => deletePerson(person.id, person.name)}/>)


    const Person = ({ person, deleteHandler }) => {
        return (
        <li>{person.name} {person.number} <button onClick={deleteHandler}>delete</button></li>
        )
    }

    return (
        < div >
            <ul>
                {rows()}
            </ul>
        </div >
    )
}

export default PersonList