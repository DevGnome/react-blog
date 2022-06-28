import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SinglePost from './SinglePost';
import CreatePost from './CreatePost';
import About from './About';
import NavBar from './NavBar';




function App() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts));
    }, []);

    console.log(posts);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
