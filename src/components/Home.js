import React, { useEffect, useState } from 'react';
import PostApi from '../apis/PostApi';
import Navbar from './Navbar'; // Import the Navbar component
import PostCard from './PostCard'; // Import the PostCard component
import Loading from './Loading'; // Import a loading component

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostApi.getAllPosts(100, 0);
        //console.log(response.data); // Log the response to check its structure
        setPosts(response.data);
      } catch (err) {
        setError(err.message); // Set error if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchPosts();
  }, []);

  // Render loading indicator while fetching posts
  if (loading) return <Loading />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <Navbar />
      {posts.length === 0 ? (
        <p>No posts available.</p> 
      ) : (
        posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
};

export default Home;
