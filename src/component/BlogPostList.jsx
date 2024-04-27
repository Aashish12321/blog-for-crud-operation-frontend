import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post'; 
import EditPost from './EditPost';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://127.0.0.1:5000/posts'); 
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  
  const handleEditComplete = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`/posts/${postId}`);
      console.log(response.data); 
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error(error); 
    }
  };

  const [editingPostId, setEditingPostId] = useState(null);

  const handleEditClick = (postId) => {
    setEditingPostId(postId);
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
  };



  return (
    <div className="post-list">
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {editingPostId === post.id ? (
            <EditPost post={post} onEditComplete={handleEditComplete} onCancel={handleCancelEdit} />
          ) : (
            <Post post={post} />
          )}
          {editingPostId !== post.id && (
            <>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              <button onClick={() => handleEditClick(post.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;

