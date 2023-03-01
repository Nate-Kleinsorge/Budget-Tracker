import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");
  const ping = async () => {
    const response = await fetch("/ping");
    const data = await response.text();
    setMessage(data);
  }
  return (
    <>
      <h1>Budget Tracker</h1>
      <h2>coming soon!</h2>
      <button onClick={ping}>ping the server</button>
      <p>server respsonded: {message}</p>
    </>
  );
}

export default App;
