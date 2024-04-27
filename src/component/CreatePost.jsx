import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
    };
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/posts', newPost);
      console.log(response.data); 
      setTitle(''); 
      setContent('');
    } catch (error) {
      console.error(error); 
    }

    // Redirect to homepage after submission
    navigate('/');
  };

  return (
    <form className="edit-post-form" onSubmit={handleSubmit}>
      <h2>Create a new Post</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a catchy title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content here"
        />
      </div>
      <button onSubmit={'/'} type="submit" className="update-button">Create</button>
    </form>
  );
};

export default CreatePost;

