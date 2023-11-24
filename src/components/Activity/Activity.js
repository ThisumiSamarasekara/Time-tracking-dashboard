import React from "react";
import img from "../../images/icon-work.svg";
import img1 from "../../images/icon-ellipsis.svg";
import "../Activity/Activity.css";

export default function Activity({
  activity,
  image,
  hours,
  lastWeekHours,
  backgroundColor,
}) {
  return (
    <div className="main_container">
      <div className="activity_container" style={{ backgroundColor }}>
        <div className="activity_img">
          <img src={image} />
        </div>
      </div>
      <div className="info_container">
        <div className="activity_heading">
          <div className="activity_heading_name">
            <div className="heading1">
              <p>{activity}</p>
            </div>
            <div className="dots">
              <img src={img1} />
            </div>
          </div>
        </div>
        <div className="time">
          <p>{hours}hrs</p>
        </div>
        <div className="lastWeekTime">
          <p>Last Week - {lastWeekHours}hrs</p>
        </div>
      </div>
    </div>
  );
}
