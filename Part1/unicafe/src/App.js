import { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const total = good + neutral + bad
//   const averageScore = (good - bad) / total || 0
//   const positivePercentage = (good * 100) / total || 0

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <button onClick={() => setGood(good + 1)} >Good</button>
//       <button onClick={() => setNeutral(neutral + 1)} >Neutral</button>
//       <button onClick={() => setBad(bad + 1)} >Bad</button>

//       <h1>statistics</h1>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total feedbacks: {total}</p>
//       <p>Average score: {averageScore}</p>
//       <p>Positive percentage: {positivePercentage}</p>
//     </div>
//   )
// }

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)} >Good</button>
      <button onClick={() => setNeutral(neutral + 1)} >Neutral</button>
      <button onClick={() => setBad(bad + 1)} >Bad</button>

      <Statistics good={good} />
    </div>
  )
}
export default App
