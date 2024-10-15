import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MyPosts from './components/MyPosts';
import CreatePost from './components/CreatePost';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import UserContextProvider from './context/UserContext'; // Context provider
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Toast.css';

const App = () => {
  return (
    <UserContextProvider>
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/myposts" 
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/createpost" 
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/myprofile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      </Router>
    </UserContextProvider>
  );
};

export default App;
