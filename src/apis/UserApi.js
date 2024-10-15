import axios from 'axios';

const BASE_URL = 'https://free-ap-south-1.cosmocloud.io/development/api';
const HEADERS = {
  environmentId: '67053fe3f46082408f008ecf',
  projectId: '67053fe3f46082408f008ece',
  Accept: 'application/json',
};

const UserApi = {
  login: async (email, password) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/verify_user`,
        { EMAIL: email, PASSWORD: password },
        { headers: HEADERS }
      );
      return response.data;
    } catch (error) {
      console.error('Login API Error:', error);
      return null;
    }
  },

  getUserById: async (id) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/users/${id}`,
        { headers: HEADERS }
      );
      return response.data;
    } catch (error) {
      console.error('details by id  API Error:', error);
      return null;
    }
  },

  // Register User
  register: async (fullName, email, phoneNumber, password) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users`,
        { FULL_NAME: fullName, EMAIL: email, PHONE_NUMBER: phoneNumber, PASSWORD: password },
        { headers: HEADERS }
      );
      //console.log('after register');
      return response.data;
      
    } catch (error) {
      console.error('Register API Error:', error);
      return null;
    }
  },

  // Update User
  updateUser: async (userId, fullName, email, phoneNumber, password) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/users/${userId}`, // Use the userId in the URL
        { FULL_NAME: fullName, EMAIL: email, PHONE_NUMBER: phoneNumber, PASSWORD: password },
        { headers: HEADERS }
      );
      return response.data; // Return the response data (should contain the message)
    } catch (error) {
      console.error('Update User API Error:', error);
      return null; // Handle errors as needed
    }
  },

  
};

export default UserApi;
