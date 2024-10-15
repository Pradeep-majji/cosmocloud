import React from 'react';
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
