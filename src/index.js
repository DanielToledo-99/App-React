import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  const Content = Content => {
    return(
      <div>
        <part1 />
        <part2 />
        <part3 />
      </div>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content Content={Content} />
      <Total exercises5={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))