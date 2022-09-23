import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = 'Half Stack application development'
  const partsArray = []

  const parts = [
    { part: "Fundamentals of React", exercise: 10, id: 1 },
    { part: "Using props to pass data", exercise: 7, id: 2 },
    { part: "State of a component", exercise: 14, id: 3 }
  ]
  parts.filter((item) =>
    item.exercise ? partsArray.push(item.exercise) : console.log("test")
  )

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total partsArray={partsArray} />
    </div>
  )
}

export default App