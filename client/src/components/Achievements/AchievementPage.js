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
              <a key={Achievement.index} href={Achievement.linkUrl} target="_blank">
                <div className="achievementCard">
                  <div className="achievementCardFace achievementCardFront">
                    <img src={Achievement.frontImg} alt="" />
                  </div>
                  <div className="achievementCardFace achievementCardBack">
                    <img src={Achievement.backImg} alt="" />
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  );
}

export default AchievementPage;