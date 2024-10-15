import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserApi from '../apis/UserApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await UserApi.login(email, password);
      if (response && response._id) {
        login(response);
        navigate('/'); 
      } else {
        toast.error('Invalid email or password'); // Show error toast
      }
    } catch (error) {
      toast.error('Login failed. Please try again.'); // Show error toast
    }
  };
  const navigateToRegister=()=>{
    navigate('/register')
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <button className="btn btn-secondary" onClick={navigateToRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
