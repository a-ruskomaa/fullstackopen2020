import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({parts}) => {
    return (
        <div>
           <Part part={parts[0]} />
           <Part part={parts[1]} />
           <Part part={parts[2]} />
        </div>
    )
}

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Total = ({parts}) => {
    const exercises = parts.map(p => p.exercises)
    return (
        <div>
            <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
        </div>
    )
}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))