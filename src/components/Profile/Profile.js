import React, { useState } from "react";
import img from "../../images/image-jeremy.png";
import "../Profile/Profile.css";

export default function Profile() {
  const [selectedPeriod, setSelectedPeriod] = useState("Daily");

  const handlePeriodClick = (period) => {
    setSelectedPeriod(period);
  };
  return (
    <div className="main_container">
      <div className="profile_container">
        <div className="profile_img">
          <img src={img} />
        </div>
        <div className="profile_heading">
          <p className="heading1">Report for</p>
          <p className="heading2">Jeremy Robson</p>
        </div>
      </div>
      <div className="days_container">
        <div className="days_info">
          <p
            className={selectedPeriod === "Daily" ? "selected" : ""}
            onClick={() => handlePeriodClick("Daily")}
          >
            Daily
          </p>
          <p
            className={selectedPeriod === "Weekly" ? "selected" : ""}
            onClick={() => handlePeriodClick("Weekly")}
          >
            Weekly
          </p>
          <p
            className={selectedPeriod === "Monthly" ? "selected" : ""}
            onClick={() => handlePeriodClick("Monthly")}
          >
            Monthly
          </p>
        </div>
      </div>
    </div>
  );
}
