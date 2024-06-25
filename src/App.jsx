import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { CountProvider } from './contexts/CountContext';
import PrivatePages from './middlewares/PrivatePages';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CountProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/blog"
              element={
                <PrivatePages>
                  <Blog />
                </PrivatePages>
              }
            />
            <Route
              path="/post/:id"
              element={
                <PrivatePages>
                  <Post />
                </PrivatePages>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </CountProvider>
    </AuthProvider>
  );
}

export default App;
