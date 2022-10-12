import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faEye,
  faPenToSquare,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="Sidebarcontainer">
      <div className="Sidebar-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">sb-admin-2</span>
        </Link>

        <hr />
      </div>
      <div className="Sidebar-centre">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faSquare} className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Teachers</p>
          <Link to="/teachers/:id" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faEye} className="icon" />
              <span>TeacherDetails</span>
            </li>
          </Link>
          <Link to="/teachers/add" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faUserPlus} className="icon" />
              <span>AddTeachers</span>
            </li>
          </Link>
          <Link
            to="/teachers/edit/:id"
            style={{ textDecoration: "none" }}
          >
            <li>
              <FontAwesomeIcon icon={faPenToSquare} className="icon" />

              <span>EditTeachers</span>
            </li>
          </Link>

          <p className="title">Students</p>
          <Link to="/students/:id" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faEye} className="icon" />
            <span>StudentDetails</span>
          </li>
          </Link>
             <Link to="/students/add" style={{ textDecoration: "none" }}>       
          <li>
            <FontAwesomeIcon icon={faUserPlus} className="icon" />
            <span>AddStudents</span>
          </li>
          </Link>
            <Link to="/students/edit/:id" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faPenToSquare} className="icon" />
         
            <span>EditStudents</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
