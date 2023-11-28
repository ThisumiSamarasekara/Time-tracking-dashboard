import React from "react";
import img1 from "../../images/icon-ellipsis.svg";
import "../Activity/Activity.css";

export default function Activity({
  activity,
  image,
  backgroundColor,
  selectedPeriod,
  hours,
  lastWeekHours,
}) {
  return (
    <div className="container">
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
        <div className="time_lastWeekTime">
          <div className="time">
            <p>
              {selectedPeriod === "Daily"
                ? `${hours}hrs`
                : selectedPeriod === "Weekly"
                ? `${hours}hrs`
                : `${hours}hrs`}
            </p>
          </div>
          <div className="lastWeekTime">
            <p>
              Last Week -{" "}
              {selectedPeriod === "Daily"
                ? `${lastWeekHours}hrs`
                : selectedPeriod === "Weekly"
                ? `${lastWeekHours}hrs`
                : `${lastWeekHours}hrs`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
