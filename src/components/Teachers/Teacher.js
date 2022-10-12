import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
import './teacher.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export default function Teacher({ id, teacher, deletebutton }) {
  const navigate = useNavigate();
  return (
 
    <div class="container teacher">
      <div class="row teacherrow">
        <div class="col-sm">
         
          {teacher.id + ":"}
          <span className="name">
            {teacher.name}
          </span>
        </div>
        <div class="col-sm">{teacher.email}</div>
        <div class="col-sm teacherbuttons">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => navigate(`/teachers/${id}`)}
          >
            View <FontAwesomeIcon icon={faEye} />
          </button>

          <button
            type="button"
            class="btn btn-success"
            onClick={() => navigate(`/teachers/edit/${id}`)}
          >
            Edit <FontAwesomeIcon icon={faPenToSquare} />
          </button>

          {deletebutton}
        </div>
      </div>
    </div>
   
  );
}
