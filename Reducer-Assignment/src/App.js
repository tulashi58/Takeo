import * as React from "react";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";

function countReducer(state, newState) {
  return newState;
}

function Task1({ initialCount = 0, step = 1 }) {
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  const increment = () => setCount(count + step);
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return (
    <>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
    </>
  );
}

export default App;