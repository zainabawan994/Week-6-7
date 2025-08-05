import React, { useState } from "react";

// Functional Component with Props
function Greeting({ name, message }) {
  return (
    <div>
      <h2>Hello, {name} 👋</h2>
      <p>{message}</p>
    </div>
  );
}

// Functional Component with State and Event Handling
function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// JSX & Functional Component
function App() {
  return (
    <div>
      <h1>React Practice with JSX, Components, Props, State, and Events</h1>
      <Greeting name="Zainab" message="Welcome to your first React lesson!" />
      <Greeting name="Ali" message="Hope you're enjoying React!" />
      <Counter />
    </div>
  );
}

export default App;
