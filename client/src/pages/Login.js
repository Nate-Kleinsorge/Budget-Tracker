import { Helmet } from "react-helmet-async";

import { useState } from 'react';
import {useAuth} from "utils/auth.js";


export default function Login() {
  const { handleLogin , error } = useAuth();
   const [email, setEmail] = useState("");
   const [password , setPassword] = useState("")
   const handleFormSubmit = (event) => {
    event.preventDefault();
    handleLogin({email , password});
    setEmail("");
    setPassword("")
   };
    return (
        <>
        <Helmet >
            <title>Budget Tracker | About</title>
        </Helmet>
        <section>
          <header><h2>Login</h2></header>
          { error && <p>{error}</p>}
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input
                placeholder="email address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit"/>
                    <h1>About us</h1>
                    <h3>coming soon</h3>
        </form>
        </section>
        </>
    );
}
