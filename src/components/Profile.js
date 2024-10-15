import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import UserApi from '../apis/UserApi';
import Loading from './Loading';
import Navbar from './Navbar';

const Profile = () => {
  const { user, login } = useContext(UserContext); // Access user data and update function
  const [fullName, setFullName] = useState(user.FULL_NAME);
  const [email, setEmail] = useState(user.EMAIL);
  const [phoneNumber, setPhoneNumber] = useState(user.PHONE_NUMBER);
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
  
    const email = user.EMAIL; // Get the user's current email
    const password = user.password; // Get the user's current password
  
    try {
      // Update the user details using the UserApi
      const updatedUser = await UserApi.updateUser(user._id, fullName, email, phoneNumber); 
  
      if (updatedUser) {
        const user1 = await UserApi.login(email, password);
        console.log('Updated User:', user1);
        if (user1) {
          login(user1);
        } else {
          console.error('Login failed after updating user details.');
        }
      } else {
        console.error('Error occurred during user update.');
      }
    } catch (error) {
      console.error('Error in handleUpdateProfile:', error);
    } finally {
      setLoading(false); // Always set loading to false at the end
    }
  };
  

  if (loading) return <Loading />;

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>My Profile</h1>
      <form onSubmit={handleUpdateProfile}>
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
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div></>
  );
};

export default Profile;
