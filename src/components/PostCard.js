import React from 'react';
import '../styles/PostCard.css'

const PostCard = ({ post }) => {
  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div className="card-body">
        <h2 className="card-title">{post.PROJECT_NAME}</h2> {/* Display project name */}
        <h5 className="card-subtitle mb-2 text-muted">Student ID: {post.STUDENT_ID}</h5> {/* Display student ID */}
        <p className="card-text">{post.ABSTRACT}</p> {/* Display abstract */}
        <p className="card-text">Post ID: {post._id}</p> {/* Display post ID for reference */}
      </div>
    </div>
  );
};

export default PostCard;
