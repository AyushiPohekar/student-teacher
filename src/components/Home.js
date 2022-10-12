import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./component.css";
import Widget from "./widgets/Widgets";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Web-Development" />
          <Widget type="Machine-learning" />
          <Widget type="Full-Stack" />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
