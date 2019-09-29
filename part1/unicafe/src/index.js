import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = ({ good, neutral, bad }) => {

    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = good / total * 100

    if (total === 0) {
        return <p>No feedback given</p>
    }

    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="total" value={total} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positive + ' %'} />
                </tbody>
            </table>
        </div>
    )
}

const Statistic = ({ text, value }) => {
    return <tr><td>{text}</td><td>{value}</td></tr>
}



const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const GiveFeedback = function (feedback) {
        if (feedback === 'good') {
            return () => {
                setGood(good + 1)
            }
        }
        if (feedback === 'neutral') {
            return () => {
                setNeutral(neutral + 1)
            }
        }
        if (feedback === 'bad') {
            return () => {
                setBad(bad + 1)
            }
        }
    }



    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={GiveFeedback('good')} text={'good'} />
            <Button onClick={GiveFeedback('neutral')} text={'neutral'} />
            <Button onClick={GiveFeedback('bad')} text={'bad'} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}


ReactDOM.render(<App />,
    document.getElementById('root')
)