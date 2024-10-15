import React, { useState } from 'react';
import '../styles/OwnPostCard.css'; // Import the custom CSS for modal
import PostApi from '../apis/PostApi'; // Import Post API
import { useNavigate } from 'react-router-dom';

const OwnPostCard = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState(post.PROJECT_NAME);
  const [abstract, setAbstract] = useState(post.ABSTRACT);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  // Open and close modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle post update (this will send the updated data to the API)
  const handleUpdate = async () => {
    setLoading(true); // Show loading

    const updatedPost = {
      STUDENT_ID: post.STUDENT_ID, // Use the same student ID
      PROJECT_NAME: projectName, // Updated project name
      ABSTRACT: abstract, // Updated abstract
      LIKE_COUNT: 0, // Keep the same like count
    };

    const response = await PostApi.updatePost(post._id, updatedPost); // Call update API

    if (response) {
      //console.log(response)
      alert('Post updated successfully!');
      navigate('/');
    } else {
      alert('Failed to update post.');
    }

    setLoading(false); // Stop loading
    handleCloseModal(); // Close the modal after update
  };

  // Delete post
  const handleDelete = async () => {
      const response=await PostApi.deletePost(post._id); // Call delete API
      console.log('response delete',response)
      if (response) {
        alert('Post deleted successfully!');
        navigate('/'); // Navigate after deletion
      } else {
        alert('Failed to delete post.',response);
      }
  };

  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div className="card-body">
        <h2 className="card-title">{post.PROJECT_NAME}</h2> {/* Display project name */}
        <p className="card-text">{post.ABSTRACT}</p> {/* Display abstract */}

        <button className="btn btn-warning" onClick={handleShowModal}>
          Update
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>

      {/* Modal for updating post */}
      {showModal && (
        <div className="custom-modal-overlay" onClick={handleCloseModal}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="custom-modal-body">
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project Name"
                required
              />
              <textarea
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                placeholder="Abstract"
                rows="1"
                required
              />
            </div>
            <div className="custom-modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
              <button className="btn btn-primary" onClick={handleUpdate} disabled={loading}>
                {loading ? 'Updating...' : 'Update Post'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnPostCard;
