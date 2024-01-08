// Login.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../Auth/AuthContext';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const { login } = useAuth();

  const handleLogin = () => {
    login(username, password);
    setLogged(true);
  };

  if (logged) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label className="label">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
          </label>
          <label className="label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </label>
          <button type="button" onClick={handleLogin} className="button">
            Login
          </button>
        </form>
        <p>
        Don't have an account? <Link to="/register">  Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
