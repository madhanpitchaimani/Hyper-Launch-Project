import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = async () => {
    const firstName = document.querySelector("input[placeholder='FirstName']").value;
    const lastName = document.querySelector("input[placeholder='LastName']").value;
    const email = document.querySelector("input[placeholder='Email']").value;
    const password = document.querySelector("input[placeholder='password']").value;

    const newUser = { firstName, lastName, email, password };

    const res = await fetch('http://localhost:5000/users');
    const existingUsers = await res.json();

    const alreadyExists = existingUsers.find(user => user.email === email);

    if (alreadyExists) {
      alert("Email already registered!");
      return;
    }

    await fetch('http://localhost:6000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    alert("Registration successful!");
    navigate('/login');
  };

  return (
    <div className='logincontainer'>
      <div className='welcome'>
        <h2>Welcome to our CHEF SPOT</h2>
        <p>Opening the door to delicious and exclusive experiences</p>
      </div>

      <div className='line'></div>

      <div className='form'>
        <h2>Register</h2>
        <input type="text" placeholder='FirstName' />
        <input type="text" placeholder='LastName' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='password' />
        <button type='button' onClick={handleRegister}>Submit</button>

        <div className='links'>
          <p>Already have an account? <Link to="/login" style={{ color: "blue" }}>Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
