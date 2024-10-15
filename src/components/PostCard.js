import React, { useEffect, useState } from 'react';
import '../styles/PostCard.css';
import UserApi from '../apis/UserApi'; // Import the API for fetching student details

const PostCard = ({ post }) => {
  const [studentDetails, setStudentDetails] = useState(null);

  // Fetch student details when the component mounts
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await UserApi.getUserById(post.STUDENT_ID);
      if (response) {
        //console.log('student',response);
        setStudentDetails(response); // Set the fetched student details
      }
    };

    fetchStudentDetails(); // Call the function to fetch student details
  }, [post.STUDENT_ID]);

  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div className="card-body">
        <h2 className="card-title">{post.PROJECT_NAME}</h2> {/* Display project name */}
        {studentDetails ? (
          <>
            <h5 className="card-subtitle mb-2 text-muted">Name: {studentDetails.FULL_NAME}</h5>
            <p className="card-text">Email: {studentDetails.EMAIL}</p>
            <p className="card-text">Phone: {studentDetails.PHONE_NUMBER}</p>
          </>
        ) : (
          <p className="card-text">Loading student details...</p>
        )}
        
        <p className="card-text">{post.ABSTRACT}</p>
      </div>
    </div>
  );
};

export default PostCard;
