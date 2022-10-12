import React from 'react';
import { useState,useEffect } from 'react';
import Teacher from './Teacher';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import './teacher.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

export default function TeacherList() {
   
const [teacherlist, setteacherlist] = useState([]);
  const getteachers = () => {
    fetch('https://62a970daec36bf40bdb78cff.mockapi.io/teachers',
      { method: "GET" })
        .then((data) => data.json())
        .then((tea) =>  setteacherlist(tea));
     
  };
const deleteteachers = (id) => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/teachers/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getteachers());
  };
  useEffect(() => getteachers(), [])


  return(

  <div className="teacher-List">
       <div className="Teacher">
        <Sidebar/>
    <div className="TeacherContainer">
        <Navbar/>
  {teacherlist.map((tr)=>(<Teacher key={tr.id} teacher={tr}  id={tr.id} 
   deletebutton={
    <button type="button" class="btn btn-danger"  onClick={()=>deleteteachers(tr.id)}>
    Delete <FontAwesomeIcon icon={faTrash}/>
  </button>
    
   }
  
  />))}

  </div>
  </div>
  </div>
  ); 
}

  