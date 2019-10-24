import React from 'react'

const PersonForm = ({addPerson, formData}) => {

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={formData.newName} onChange={(event) => formData.setNewName(event.target.value)} />
            </div>
            <div>
                number: <input value={formData.newNumber} onChange={(event) => formData.setNewNumber(event.target.value)} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm