
import { useState } from 'react'


const Statistics = (props) => {
  const { good, neutral, bad, total } = props
  const average = (good - bad / total) || 0
  const positivePercentage = (good * 100 / total) || 0

  return (
    <div>
      <h1>statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Percentage: {positivePercentage}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)} >Good</button>
      <button onClick={() => setNeutral(neutral + 1)} >Neutral</button>
      <button onClick={() => setBad(bad + 1)} >Bad</button>

      {total == 0 ? (
        <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
        </div>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      )}
    </div>
  )
}
export default App
