import axios from 'axios';

const BASE_URL = 'https://free-ap-south-1.cosmocloud.io/development/api';
const HEADERS = {
  environmentId: '67053fe3f46082408f008ecf',
  projectId: '67053fe3f46082408f008ece',
  Accept: 'application/json, text/plain',
};

const PostApi = {
  createPost: async (title, content, userId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/posts`,
        { STUDENT_ID: userId,
          PROJECT_NAME: title,
          LIKE_COUNT: 0,
          ABSTRACT: content },
        { headers: HEADERS }
      );
      return response.data;
    } catch (error) {
      console.error('Create Post API Error:', error);
      return null;
    }
  },

  // Get all posts
  getAllPosts: async (limit = 100, offset = 0) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/posts?limit=${limit}&offset=${offset}`,
        { headers: HEADERS }
      );
      return response.data;
    } catch (error) {
      console.error('Get All Posts API Error:', error);
      return null;
    }
  },

  // Get a post by its ID
  getPostsByUser: async (postId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/get_user_posts`,{
          user_id: postId
        },
        { headers: HEADERS }
      );
      return response.data;
    } catch (error) {
      console.error('Get Post By user API Error:', error);
      return null;
    }
  },

  // Update a post by its ID
  updatePost: async (postId, updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/posts/${postId}`,
        updatedData,
        { headers: HEADERS }
      );
      return response.data;
    } catch (error) {
      console.error('Update Post API Error:', error);
      return null;
    }
  },

  // Delete a post by its ID
  deletePost: async (postId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/posts/${postId}`, {
        headers: HEADERS,
        data: {} 
      });
      return response.data.message;
    } catch (error) {
      console.error('delete Post API Error:', error.response ? error.response.data : error.message);
      return null; 
    }
  },
  
};

export default PostApi;
