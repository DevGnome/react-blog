import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SinglePost from './SingleNote';
import CreatePost from './CreateNote';
import About from './About';
import NavBar from './NavBar';




function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
