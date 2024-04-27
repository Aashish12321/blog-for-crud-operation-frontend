import React, { useState} from 'react';
import axios from 'axios';

const EditPost = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      content,
    };

    try {
      const response = await axios.put(`http://127.0.0.1:5000/posts/${post.id}`, updatedPost); 
      console.log(response.data); 
      alert('Update successful');

    } catch (error) {
      console.error(error); 
    }
    alert('Update successful')
  };

  return (
    <form className="edit-post-form" onSubmit={handleSubmit}>
    <h2>Edit Post</h2>
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
        placeholder="Write your content here"
      />
    </div>
    <button type="submit" className="update-button">Update</button>
  </form>
  );
};

export default EditPost;

