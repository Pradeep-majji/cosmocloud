import React, { useState, useEffect, useContext } from 'react';
import OwnPostCard from './OwnPostCard';
import PostApi from '../apis/PostApi';
import Loading from './Loading';
import { UserContext } from '../context/UserContext';
import Navbar from './Navbar';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user}=useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await PostApi.getPostsByUser(user._id); // Fetch posts by user
      setPosts(response);
      setLoading(false);
    };
    
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loading />; // Show loading effect

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>My Posts</h1>
      {posts.map(post => (
        <OwnPostCard key={post._id} post={post} />
      ))}
    </div></>
  );
};

export default MyPosts;
