import React, { useState } from 'react';
import UserApi from '../apis/UserApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await UserApi.register(fullName, email, phoneNumber, password);
      console.log(response)
      if (response && response.id) {
        toast.success('Registration successful. You can now log in.'); // Show success toast
        navigate('/'); 
      } else if (response === 'Record Already Exists') {
        toast.error('User already exists.'); // Show error toast
      } else {
        toast.error('user already exists'); // Show error toast
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.'); // Show error toast
    }
  };
const navigateToLogin=()=>{
  navigate('/login')
}
  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
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
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <button className="btn btn-secondary" onClick={navigateToLogin}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Register;
