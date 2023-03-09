import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from 'utils/auth.js';


export default function SignUp() {
  const {handleSignUp} = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSignUp({email, password, firstName, lastName});
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("") 
  };
   return (
    <>
    <section>
      <Link to="/login">←Login</Link>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
       
       
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
       
        
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
       
        
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="*********"
            name="password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
       
      
          <input type="submit"/>
        
      </form>
      </section>
      </>
   );
   }



