import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import './component.css';

const Home = () => {
  return (
<div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          Home
        </div>
      </div>
    </div>
  );
};
  
export default Home