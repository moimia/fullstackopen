const Course = ({ course }) => {
    return(
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }


const Header = ({ course }) => {
    return (
      <div>
        <h1> {course.name} </h1>
      </div>
    )
  }
  
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
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
  
  
  const Total = ({ course }) => {
    return (
      <div>
        <p><b>Total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
      </div>
    )
  }
  
export default Course 
  
  