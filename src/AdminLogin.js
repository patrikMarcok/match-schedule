// AdminLogin.js
import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import { adminCredentials } from './config';
import './App.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    // For simplicity, let's assume the credentials are hardcoded
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
      // Redirect to the admin page after successful login
      //history.push('/admin');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="App-header">
      <h2>Admin Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        

        {username === adminCredentials.username &&
        password === adminCredentials.password ? (
          <Link to={`/admin`}>
            <button>Login</button>
          </Link>
        ) : null}
      </form>
    </div>
  );
};

export default AdminLogin;