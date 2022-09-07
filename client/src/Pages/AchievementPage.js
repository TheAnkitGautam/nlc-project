import React from "react";
import '../components/Achievements/Achievement.css';
import { Achievement_Set } from "../components/Achievements/AchievementSet";

const AchievementPage = () => {
  return (
    <div className="achievementPage pageLoadAnim">
      <h1 className="team-heading"><span className='meet-word'>Our </span>Achievements</h1>
      <div className="achievementWrapper">
        {
          Achievement_Set.map((Achievement) => {
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