import React from 'react';

const PageNotFound = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary">Go to Home</a>
    </div>
  );
};

export default PageNotFound;
