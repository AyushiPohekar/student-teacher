
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Student.css";

export default function AddStudent() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [attendance, setattendance] = useState("");
  const [gender, setgender] = useState("");

  const [Studentlist, setStudentlist] = useState([]);
  const navigate = useNavigate();

  const addStudent = () => {
    const newStudent = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      attendance: attendance,
      gender: gender,
    };
    setStudentlist([...Studentlist, newStudent]);

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/students`, {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/students"));
  };

  return (
    <div className="Student">
    <Sidebar/>
<div className="StudentContainer">
    <Navbar/>
    <div>
      <button
        className="Backbutton btn btn-dark"
        onClick={() => navigate("/students")}
      >
        <FontAwesomeIcon className="buttonIcon" icon={faBackward} />
        <span>Back</span>
      </button>
      <div className="container AddStudent">
        <div class="row AddStudentInfo">
          <div class="col-sm-4 ">
            <label htmlfor="firstName" className="AddStudentlabel">
              FirstName:
            </label>
          </div>
          <div class="col-sm-4 input">
            <input
              type="text"
              id="firstName"
              onChange={(event) => setfirst_name(event.target.value)}
            />
          </div>
        </div>

        <div class="row AddStudentInfo">
          <div class="col-sm-4 ">
            <label htmlfor="lastName" className="AddStudentlabel">
              LastName:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="lastName"
              onChange={(event) => setlast_name(event.target.value)}
            />
          </div>
        </div>
        <div class="row AddStudentInfo">
          <div class="col-sm-4 ">
            <label htmlfor="attendance" className="AddStudentlabel">
              attendance:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="attendance"
              onChange={(event) => setattendance(event.target.value)}
            />
          </div>
        </div>
        <div class="row AddStudentInfo">
          <div class="col-sm-4 ">
            <label htmlfor="email" className="AddStudentlabel">
              email
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="email"
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
        </div>

        <div class="row AddStudentInfo">
          <div class="col-sm-4 ">
            <label htmlfor="gender" className="AddStudentlabel">
              Gender:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="gender"
              onChange={(event) => setgender(event.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div className="buttonAdd">
              <button
                type="button"
                onClick={addStudent}
                className="btn btn-primary Addbutton "
              >
                AddStudent
              </button>
            </div>
          </div>
          {/* <div className='buttonAdd'>
      <button type="button" onClick={addStudent} className="btn btn-primary Addbutton " >AddStudent</button>
      </div> */}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
