import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <Button onclick={() => setGood(good + 1)} text="good"/>
            </td>
            <td>
              <Button onclick={() => setNeutral(neutral + 1)} text="neutral"/>
            </td>
            <td>
              <Button onclick={() => setBad(bad + 1)} text="bad"/>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = all === 0 ? 0 : (props.good/all - props.bad/all)
  const positive = all === 0 ? 0 : props.good/all * 100

  let nofeedback = false

  if(all === 0){
    nofeedback = true
  }

  return (
    <div>
      <h1>
        statistics
      </h1>
      <div>
        { nofeedback ? <p>No feedback given</p> : 
        <div>
          <table>
            <tbody>
              <StatisticLine text="good" value={props.good}/>
              <StatisticLine text="neutral" value={props.neutral}/>
              <StatisticLine text="bad" value={props.bad}/>
              <StatisticLine text="all" value={all}/>
              <StatisticLine text="average" value={average}/>
              <StatisticLine text="positive" value={positive}/>
            </tbody>
          </table>
        </div>
        }
      </div>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}{props.text === "positive" && "%"}
        </td>
      </tr>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onclick}>
        {props.text}
      </button>
    </div>
  )
}

export default App