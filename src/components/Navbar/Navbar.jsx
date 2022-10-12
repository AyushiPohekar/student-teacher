import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark upperbar">
    <div class="container-fluid">
      
      
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
          <Link to="/students" style={{ textDecoration: "none" }}>
          <li class="nav-item ">
            <a class="nav-link " aria-current="page" href="#">Students</a>
          </li>
          </Link>
          <Link to="/teachers" style={{ textDecoration: "none" }}>
          <li class="nav-item">
            <a class="nav-link" href="#">Teachers</a>
          </li>
          </Link>
         
        </ul>
        <form class="d-flex" role="search">
        <li class="nav-item">
            <a class="nav-link" href="#">LogOut</a>
          </li>
          <img
              src="https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg"
              alt=""
              className="avatar"
            />
        </form>
      </div>
   
  </nav>
     
  );
};



export default Navbar