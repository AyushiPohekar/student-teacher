import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./teacher.css";

export default function TeacherDetails() {
  const { id } = useParams();

  const [teacher, setteacher] = useState({});
  const getteacher = () => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/teachers/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tcr) => setteacher(tcr));
  };
  useEffect(() => getteacher(), [id]);
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="Backbutton btn btn-dark"
        onClick={() => navigate("/teachers")}
      >
        <FontAwesomeIcon className="buttonIcon" icon={faBackward} />
        <span>Back</span>
      </button>
      <div className="teacherdetail">
        <div className="card teacherdetailcard">
          <div className="card-body teacherdetailbody">
            <p className="card-title teacherdetailtitle">
              <div class="row">
                <div class="col-sm-6 teacherdetailcontent">Name:</div>
                <div class="col-sm-6 teacherdetailinfo">
                  {teacher.name }
                </div>
              </div>
            </p>
            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  teacherdetailcontent">topic-taught:</div>

                <div class="col-sm-6 teacherdetailinfo">{teacher.topic_taught}</div>
              </div>
            </p>

            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  teacherdetailcontent">NoOfLectures:</div>

                <div class="col-sm-6 teacherdetailinfo">{teacher.NoOfLectures}</div>
              </div>
            </p>
            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  teacherdetailcontent">Date-of-Completion:</div>

                <div class="col-sm-6 teacherdetailinfo">{teacher.Date}</div>
              </div>
            </p>

            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  teacherdetailcontent">EmailId:</div>

                <div class="col-sm-6 teacherdetailinfo">{teacher.email}</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
