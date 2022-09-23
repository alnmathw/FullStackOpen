import { useState } from "react"

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const roundToTwo = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral 
  const average = all > 0 ? roundToTwo((good - bad) / all) : 0 
  const positive = all > 0 ? roundToTwo(good / all) : 0 

  if (all === 0) return ( <div> No Feedback </div> )
  return (
    <table>
      <tbody>
        <StatisticalLine text = "good" value = {good} />
        <StatisticalLine text = "bad" value = {bad} />
        <StatisticalLine text = "neutral" value = {neutral} />
        <StatisticalLine text = "all" value = {all} />
        <StatisticalLine text = "average" value = {average} />
        <StatisticalLine text = "positive" value = {positive + "%"} />
      </tbody>
    </table>
  );
};

const StatisticalLine = ({ text, value }) => (
  <tr>
    <td>
      {text}
    </td>
    <td>
      {value}
    </td>
  </tr>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <h2>
        Statistics
      </h2>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  );
};

export default App;