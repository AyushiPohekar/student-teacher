import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
import './Student.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export default function Student({ id, student, deletebutton }) {
  const navigate = useNavigate();
  return (
 
    <div class="container student">
      <div class="row studentrow">
        <div class="col-sm">
         
          {student.id + ":"}
          <span className="name">
            {student.first_name + "  " + student.last_name}
          </span>
        </div>
        <div class="col-sm">{student.email}</div>
        <div class="col-sm studentbuttons">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => navigate(`/students/${id}`)}
          >
            View <FontAwesomeIcon icon={faEye} />
          </button>

          <button
            type="button"
            class="btn btn-success"
            onClick={() => navigate(`/students/edit/${id}`)}
          >
            Edit <FontAwesomeIcon icon={faPenToSquare} />
          </button>

          {deletebutton}
        </div>
      </div>
    </div>
   
  );
}
