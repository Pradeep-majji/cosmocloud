import React, { useState } from 'react';
import PostApi from '../apis/PostApi';
import Loading from './Loading';
import Navbar from './Navbar';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const navigate=useNavigate()

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    await PostApi.createPost(title, content,user._id); // API call to create post
    setLoading(false);
    //console.log('added successfully')
    //toast.success('Post created successfully!');
    navigate('/');
  };

  if (loading) return <Loading />; // Show loading while post is being created

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>Create Post</h1>
      <form onSubmit={handleCreatePost}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
    </>
  );
};

export default CreatePost;
