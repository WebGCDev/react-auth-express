import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosClient.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const newPost = { title, content };
      const response = await axiosClient.post('/posts', newPost);
      setPosts([...posts, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await axiosClient.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Benvenuto, {user}</h2>
      <h3>Gestisci Articoli</h3>
      <form onSubmit={handleAddPost}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titolo
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Contenuto
          </label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Aggiungi Articolo
        </button>
      </form>
      <hr />
      <h3>Lista Articoli</h3>
      <ul className="list-group">
        {posts.map((post) => (
          <li
            key={post.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{post.title}</h5>
              <p>{post.content}</p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDeletePost(post.id)}
            >
              Cancella
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
