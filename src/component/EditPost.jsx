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

    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="content">Content:</label>
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditPost;

