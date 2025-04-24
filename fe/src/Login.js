import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you'll add styles here

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;