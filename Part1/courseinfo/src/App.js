const Header = ({ course }) => {
  return (
    <div>
      <h1> {course.name} </h1>
    </div>
  )
}


const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))
      }
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>{name} - {exercises} exercises </p>
    </div>
  )
}


const Total = ({ parts }) => {
  return (
    <div>
      <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
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
  const { name, parts } = course;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
