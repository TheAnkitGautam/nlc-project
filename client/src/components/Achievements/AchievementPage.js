import React from "react";
import './Achievement.css';
import { Achievement_Set } from "./AchievementSet";

const AchievementPage = () => {
  return (
    <div className="achievementPage pageLoadAnim">
      <h1 className="team-heading"> <span className='meet-word'>OUR </span>ACHIEVEMENTS</h1>
      <div className="achievementWrapper">
        {
          Achievement_Set.map((Achievement, index) => {
            return (
              <div key={Achievement.index} className="achievementCard">
                <a href={Achievement.linkUrl} target="_blank" rel="noreferrer">
                  <div className="achievementCardFace achievementCardFront">
                    <img src={Achievement.frontImg} alt="" />
                  </div>
                  <div className="achievementCardFace achievementCardBack">
                    <img src={Achievement.backImg} alt="" />
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default AchievementPage;