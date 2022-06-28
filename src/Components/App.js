import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SinglePost from './SinglePost';
import CreatePost from './CreatePost';
import NavBar from './NavBar';




function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
