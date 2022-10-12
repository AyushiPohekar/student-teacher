import React from 'react';
import { useState,useEffect } from 'react';
import Student from './Student';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import './Student.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

export default function StudentList() {
   
const [studentlist, setstudentlist] = useState([]);
  const getstudents = () => {
    fetch('https://62a970daec36bf40bdb78cff.mockapi.io/students',
      { method: "GET" })
        .then((data) => data.json())
        .then((stu) =>  setstudentlist(stu));
     
  };
const deletestudents = (id) => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/students/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getstudents());
  };
  useEffect(() => getstudents(), [])


  return(

  <div className="student-List">
       <div className="Student">
        <Sidebar/>
    <div className="StudentContainer">
        <Navbar/>
  {studentlist.map((sr)=>(<Student key={sr.id} student={sr}  id={sr.id} 
   deletebutton={
    <button type="button" class="btn btn-danger"  onClick={()=>deletestudents(sr.id)}>
    Delete <FontAwesomeIcon icon={faTrash}/>
  </button>
    
   }
  
  />))}

  </div>
  </div>
  </div>
  ); 
}

  