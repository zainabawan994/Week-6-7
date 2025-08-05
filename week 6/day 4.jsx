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

// Functional Component with Conditional Rendering
function LoginMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back, user!</p> : <p>Please log in to continue.</p>}
    </div>
  );
}

// Functional Component using List with .map()
function UserList() {
  const users = ["Zainab", "Ali", "Fatima", "Ahmed"];

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

// JSX & Functional Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>React Practice: JSX, Components, Props, State, Events, Conditional Rendering & Lists</h1>
      <Greeting name="Zainab" message="Welcome to your first React lesson!" />
      <Greeting name="Ali" message="Hope you're enjoying React!" />
      <Counter />
      <LoginMessage isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <UserList />
    </div>
  );
}

export default App;
