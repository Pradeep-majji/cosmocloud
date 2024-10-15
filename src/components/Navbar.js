import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Import the UserContext
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(UserContext); // Access user state and logout function

  // State management for dropdowns
  //console.log('user',user);
  const [isPostsDropdownOpen, setIsPostsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      <Link to="/" className="navbar-brand">Explore Tech Yourself</Link>
        {user ? (
          <>
            <li 
              className="nav-item dropdown" 
              onMouseEnter={() => setIsPostsDropdownOpen(true)} 
              onMouseLeave={() => setIsPostsDropdownOpen(false)}
            >
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={isPostsDropdownOpen}
              >
                Posts
              </Link>
              {isPostsDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/createpost" className="dropdown-item">Create Post</Link>
                  <Link to="/myposts" className="dropdown-item">My Posts</Link>
                </div>
              )}
            </li>

            {/* Profile Dropdown */}
            <li 
              className="nav-item dropdown" 
              onMouseEnter={() => setIsProfileDropdownOpen(true)} 
              onMouseLeave={() => setIsProfileDropdownOpen(false)}
            >
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={isProfileDropdownOpen}
              >
                Profile
              </Link>
              {isProfileDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/myprofile" className="dropdown-item">My Profile</Link>
                  <Link to="/" className="dropdown-item" onClick={logout}>Logout</Link>
                </div>
              )}
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
