import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,faComputer

} from "@fortawesome/free-solid-svg-icons";
import './widgets.css'


const Widget = ({ type }) => {
    let data;
   
    switch (type) {
      case "Web-Development":
        data = {
          title: "Web-Development",
          Date:"12/24/2021",
        
          icon: (
            <FontAwesomeIcon icon={ faComputer}
              className="widgeticon"
              style={{ color: "#ff9900" }}
            />
          ),
        };
        break;
      case "Machine-learning":
        data = {
          title: "Machine-learning",
          Date:"8/1/2022",
          icon: (
            <FontAwesomeIcon icon={faDesktop }
            className="widgeticon"
            style={{ color: "crimson" }}
          />
          ),
        };
        break;
      case "Full-Stack":
        data = {
          title: "Full-Stack",
          Date:"4/18/2022",
          icon: (
            <FontAwesomeIcon icon={faDesktop}
            className="widgeticon"
            style={{ color: "green" }}
          />
          ),
        };
        break;
     
      default:
        break;
    }
    return (
      <div className="widget">
          <span>{data.icon}</span>
          <span className="widgettitle">{data.title}</span>
          <span>{data.Date}</span>
         
      </div>
    );
  };
  
  export default Widget;
  