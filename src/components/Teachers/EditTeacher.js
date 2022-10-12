import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./teacher.css";

export default function EditTeacher() {
  const { id } = useParams();

  const [teacher, setteacher] = useState(null);

  const getteacher = () => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/teachers/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((ur) => setteacher(ur));
  };
  useEffect(() => getteacher(), []);
  return teacher ? <Editteacherform teacher={teacher} /> : "Loading...";
}

function Editteacherform({ teacher }) {
  const [name, setname] = useState(teacher.name);
  const [topic_taught, settopic_taught] = useState(teacher.topic_taught);
  const [email, setemail] = useState(teacher.email);
  const [NoOfLectures, setNoOfLectures] = useState(teacher.NoOfLectures);
  const [Date, setDate] = useState(teacher.Date);

  const navigate = useNavigate();
  const editteacher = () => {
    const updatedteacher = {
      name: name,
      topic_taught: topic_taught,
      email: email,
      NoOfLectures: NoOfLectures,
      Date: Date,
    };

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/teachers/${teacher.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedteacher),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/teachers"));
  };

  return (
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
              Name:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="firstName"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
          </div>
        </div>

        <div class="row AddteacherInfo">
          <div class="col-sm-4 ">
            <label htmlfor="lastName" className="Addteacherlabel">
              Topic-taught:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="lastName"
              value={topic_taught}
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
              value={NoOfLectures}
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
              value={email}
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
              value={Date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div className="buttonAdd">
              <button
                type="button"
                onClick={editteacher}
                className="btn btn-success Addbutton "
              >
                Apply-Changes
              </button>
            </div>
          </div>
          {/* <div className='buttonAdd'>
      <button type="button" onClick={addteacher} className="btn btn-primary Addbutton " >Addteacher</button>
      </div> */}
        </div>
      </div>
    </div>
  );
}
