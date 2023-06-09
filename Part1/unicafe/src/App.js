
import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}:</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {

  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positivePercentage' value={positivePercentage} />
    </table>
  )
}


const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick} >{text}</button>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1);
  const neutralFeedback = () => setNeutral(neutral + 1);
  const badFeedback = () => setBad(bad + 1);

  const total = good + neutral + bad
  const average = ((good - bad) / total).toFixed(2) || 0
  const positivePercentage = (good * 100 / total).toFixed(2) + '%' || 0

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodFeedback} text='good' />
      <Button onClick={neutralFeedback} text='neutral' />
      <Button onClick={badFeedback} text='bad' />
      {total == 0 ? (
        <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
        </div>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positivePercentage={positivePercentage} />
      )}
    </div>
  )
}
export default App
