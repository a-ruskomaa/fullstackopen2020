import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(emptyVotes)

    const RandomAnecdote = () => {
        const randomInt = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomInt)
    }

    const VoteForSelectedAnecdote = () => {
        const newarr = [...votes]
        newarr[selected] += 1
        setVotes(newarr)
    }

    let maxVotes = 0
    let mostVoted = 0
    votes.forEach(function (value, i) {
        if (maxVotes < value) {
            maxVotes = value
            mostVoted = i
        }
    });

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <p>has {votes[selected]} votes</p>
            <div>
                <Button onClick={RandomAnecdote} text={'next anecdote'} />
                <Button onClick={VoteForSelectedAnecdote} text={'vote'} />
            </div>

            <h1>Anecdote with most votes</h1>
            {props.anecdotes[mostVoted]}
            <p>has {votes[mostVoted]} votes</p>
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const emptyVotes = new Array(anecdotes.length)
emptyVotes.fill(0)

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)