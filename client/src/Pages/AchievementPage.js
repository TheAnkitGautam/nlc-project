import React from "react";
import '../components/Achievements/Achievement.css';
import { AchievementsData } from "../components/Achievements/AchievementSet";
import pattern from '../components/Achievements/pattern6.png'

const AchievementPage = () => {
  return (
    <div className="achievementPage pageLoadAnim">
      <h1 className="team-heading"><span className='meet-word'>Our </span>Achievements</h1>
      <div className="achievement-container">
        {
          AchievementsData.map((val, ind) => {
            return (
              <div className="img-box">
                <div className="img-frame">
                  <img className="img-top" src={val.hoverImg} alt="Achievement Front" />
                  <img src={val.coverImg} alt="Achievement Back" />
                </div>
                <img className="pattern" src={pattern} alt="Pattern" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default AchievementPage;