import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./teacher.css";

export default function Addteacher() {
  const [name, setname] = useState("");
  const [topic_taught, settopic_taught] = useState("");
  const [email, setemail] = useState("");
  const [NoOfLectures, setNoOfLectures] = useState("");
  const [Date, setDate] = useState("");

  const [teacherlist, setteacherlist] = useState([]);
  const navigate = useNavigate();

  const addteacher = () => {
    const newteacher = {
      name: name,
      topic_taught: topic_taught,
      email: email,
      NoOfLectures: NoOfLectures,
      Date: Date,
    };
    setteacherlist([...teacherlist, newteacher]);

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/teachers`, {
      method: "POST",
      body: JSON.stringify(newteacher),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/teachers"));
  };

  return (
    <div className="Teacher">
    <Sidebar/>
<div className="TeacherContainer">
    <Navbar/>
    <div>
      <button
        className="Backbutton btn btn-dark"
        onClick={() => navigate("/teachers")}
      >
        <FontAwesomeIcon className="buttonIcon" icon={faBackward} />
        <span>Back</span>
      </button>
      <div className="container Addteacher">
        <div class="row AddteacherInfo">
          <div class="col-sm-4 ">
            <label htmlfor="firstName" className="Addteacherlabel">
              FirstName:
            </label>
          </div>
          <div class="col-sm-4 input">
            <input
              type="text"
              id="firstName"
              onChange={(event) => setname(event.target.value)}
            />
          </div>
        </div>

        <div class="row AddteacherInfo">
          <div class="col-sm-4 ">
            <label htmlfor="lastName" className="Addteacherlabel">
              LastName:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="lastName"
              onChange={(event) => settopic_taught(event.target.value)}
            />
          </div>
        </div>
        <div class="row AddteacherInfo">
          <div class="col-sm-4 ">
            <label htmlfor="NoOfLectures" className="Addteacherlabel">
              NoOfLectures:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="NoOfLectures"
              onChange={(event) => setNoOfLectures(event.target.value)}
            />
          </div>
        </div>
        <div class="row AddteacherInfo">
          <div class="col-sm-4 ">
            <label htmlfor="email" className="Addteacherlabel">
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

        <div class="row AddteacherInfo">
          <div class="col-sm-4 ">
            <label htmlfor="Date" className="Addteacherlabel">
              Date:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="Date"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div className="buttonAdd">
              <button
                type="button"
                onClick={addteacher}
                className="btn btn-primary Addbutton "
              >
                Addteacher
              </button>
            </div>
          </div>
          {/* <div className='buttonAdd'>
      <button type="button" onClick={addteacher} className="btn btn-primary Addbutton " >Addteacher</button>
      </div> */}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
