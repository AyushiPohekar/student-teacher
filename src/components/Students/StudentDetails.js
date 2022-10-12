import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./Student.css";

export default function StudentDetails() {
  const { id } = useParams();

  const [student, setstudent] = useState({});
  const getstudent = () => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/students/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((usr) => setstudent(usr));
  };
  useEffect(() => getstudent(), [id]);
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="Backbutton btn btn-dark"
        onClick={() => navigate("/students")}
      >
        <FontAwesomeIcon className="buttonIcon" icon={faBackward} />
        <span>Back</span>
      </button>
      <div className="studentdetail">
        <div className="card studentdetailcard">
          <div className="card-body studentdetailbody">
            <p className="card-title studentdetailtitle">
              <div class="row">
                <div class="col-sm-6 studentdetailcontent">Name:</div>
                <div class="col-sm-6 studentdetailinfo">
                  {student.first_name + " " + student.last_name}
                </div>
              </div>
            </p>
            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  studentdetailcontent">Gender:</div>

                <div class="col-sm-6 studentdetailinfo">{student.gender}</div>
              </div>
            </p>

            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  studentdetailcontent">attendance:</div>

                <div class="col-sm-6 studentdetailinfo">{student.attendance}</div>
              </div>
            </p>

            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  studentdetailcontent">EmailId:</div>

                <div class="col-sm-6 studentdetailinfo">{student.email}</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
