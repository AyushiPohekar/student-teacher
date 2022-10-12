import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./Student.css";

export default function Editstudent() {
  const { id } = useParams();

  const [student, setstudent] = useState(null);

  const getstudent = () => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/students/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((ur) => setstudent(ur));
  };
  useEffect(() => getstudent(), []);
  return student ? <Editstudentform student={student} /> : "Loading...";
}

function Editstudentform({ student }) {
  const [first_name, setfirst_name] = useState(student.first_name);
  const [last_name, setlast_name] = useState(student.last_name);
  const [email, setemail] = useState(student.email);
  const [attendance, setattendance] = useState(student.attendance);
  const [gender, setgender] = useState(student.gender);

  const navigate = useNavigate();
  const editstudent = () => {
    const updatedstudent = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      attendance: attendance,
      gender: gender,
    };

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/students/${student.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedstudent),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/students"));
  };

  return (
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
          <div class="col-sm-4">
            <input
              type="text"
              id="firstName"
              value={first_name}
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
              value={last_name}
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
              value={attendance}
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
              value={email}
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
              value={gender}
              onChange={(event) => setgender(event.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div className="buttonAdd">
              <button
                type="button"
                onClick={editstudent}
                className="btn btn-success Addbutton "
              >
                Apply-Changes
              </button>
            </div>
          </div>
          {/* <div className='buttonAdd'>
      <button type="button" onClick={addstudent} className="btn btn-primary Addbutton " >Addstudent</button>
      </div> */}
        </div>
      </div>
    </div>
  );
}
