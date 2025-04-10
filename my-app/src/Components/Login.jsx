import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleLogin = () => {
    const email = document.querySelector("input[placeholder='Email']").value;
    const password = document.querySelector("input[placeholder='Password']").value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className='logincontainer'>
      <div className='welcome'>
        <img src="/logo.jpeg" alt="logo" />
        <h2>Welcome to our CHEF SPOT</h2>
        <p>Opening the door to delicious and exclusive experiences</p>
      </div>

      <div className='line'></div>

      <div className='form'>
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type='button' onClick={handleLogin}>Submit</button>

        <div className='links'>
          <p>Don't have an account? <Link to="/register" style={{ color: "blue" }}>Register Now</Link></p>
         
        </div>
      </div>
    </div>
  );
}

export default Login;
