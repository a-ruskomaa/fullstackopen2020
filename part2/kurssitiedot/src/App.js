import React from 'react'
import Course from './components/Course'

const Courses = ({courses}) => (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => <Course key={course.id} course={course}/>)}
        </div>
    )

export default Courses
