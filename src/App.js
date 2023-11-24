import React, { useState } from "react";
import "./App.css";
import Activity from "./components/Activity/Activity";
import Profile from "./components/Profile/Profile";
import data from "./metaData/data.json";
import PlayIcon1 from "../src/images/icon-work.svg";
import PlayIcon2 from "../src/images/icon-play.svg";
import PlayIcon3 from "../src/images/icon-study.svg";
import PlayIcon4 from "../src/images/icon-exercise.svg";
import PlayIcon5 from "../src/images/icon-social.svg";
import PlayIcon6 from "../src/images/icon-self-care.svg";

function App() {
  return (
    <div className="App">
      <div className="profile_activities">
        <div className="profile">
          <Profile />
        </div>
        <div className="set1">
          <div className="activity">
            <div className="set1">
              {data.map((item, index) => {
                let image;
                let backgroundColor;
                if (index % 6 === 0) {
                  image = PlayIcon1;
                } else if (index % 6 === 1) {
                  image = PlayIcon2;
                  backgroundColor = "hsl(195, 74%, 62%)";
                } else if (index % 6 === 2) {
                  image = PlayIcon3;
                  backgroundColor = "hsl(348, 100%, 68%)";
                } else if (index % 6 === 3) {
                  image = PlayIcon4;
                  backgroundColor = "hsl(145, 58%, 55%)";
                } else if (index % 6 === 4) {
                  image = PlayIcon5;
                  backgroundColor = "hsl(264, 64%, 52%)";
                } else if (index % 6 === 5) {
                  image = PlayIcon6;
                  backgroundColor = "hsl(43, 84%, 65%)";
                }

                return (
                  <div key={index} className="activities">
                    <Activity
                      activity={item.title}
                      image={image}
                      hours={item.timeframes.daily.current}
                      lastWeekHours={item.timeframes.daily.previous}
                      backgroundColor={backgroundColor}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
