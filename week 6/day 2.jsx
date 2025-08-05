import React from "react";

// Functional Component with Props
function Greeting({ name, message }) {
  return (
    <div>
      <h2>Hello, {name} 👋</h2>
      <p>{message}</p>
    </div>
  );
}

// JSX & Functional Component
function App() {
  return (
    <div>
      <h1>React Practice with JSX, Components, Props</h1>
      <Greeting name="Zainab" message="Welcome to your first React lesson!" />
      <Greeting name="Ali" message="Hope you're enjoying React!" />
    </div>
  );
}

export default App;
