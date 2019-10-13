import React, { useState } from 'react'

const Persons = ({persons, filter}) => {

    const rows = () =>
        persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => <Person key={person.id} person={person} />)


    const Person = ({ person }) => {
        return <li>{person.name} {person.number}</li>
    }

    return (
        < div >
            <ul>
                {rows()}
            </ul>
        </div >
    )
}

export default Persons