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

// Conditional Rendering Component
function LoginMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back, user!</p> : <p>Please log in to continue.</p>}
    </div>
  );
}

// List Rendering using .map()
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

// Form Handling Component
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      /><br /><br />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

// Lifting State Up Example
function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Temperature (°C): </label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

function TemperatureCalculator() {
  const [temperature, setTemperature] = useState('');
  const isBoiling = parseFloat(temperature) >= 100;

  return (
    <div>
      <h2>Boiling Water Checker</h2>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <p>{temperature && (isBoiling ? "Water will boil." : "Water won't boil.")}</p>
    </div>
  );
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>React Full Practice</h1>
      <Greeting name="Zainab" message="Welcome to your first React lesson!" />
      <Greeting name="Ali" message="Hope you're enjoying React!" />
      <Counter />
      <LoginMessage isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <UserList />
      <ContactForm />
      <TemperatureCalculator />
    </div>
  );
}

export default App;
