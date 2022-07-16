import React from "react";
import eventPoster from "./eventPoster.jpg";
import CSS from "./public_corner.module.css";
import logo from "./../Clubs/D-Zire.png";
import { Upcoming_events_list } from "./Events_list";

const Events = () => {
  return (
    <section className="pageLoadAnim">
      <div className={CSS.imgBox}>
        <img src={eventPoster} alt="" className={CSS.eventImg} />
      </div>
      <div className={CSS.noticeBox}>
        <h2 className={CSS.title}>
          <span>----------</span> Upcoming Events <span>----------</span>
        </h2>
        <h3 className={CSS.loginRemark}>Login to Register</h3>

        <div className={CSS.eventContainer}>
          {
            Upcoming_events_list.map((Event, index) => {
              return (
                <div className={CSS.eventbox} key={index}>
                  <div className={CSS.eventDesc}>
                    <div className={CSS.eventTitleBanner}>
                      <img className={CSS.eventLogo} src={logo} alt="" />
                      <div className={CSS.eventTitle}>{Event.name}</div>
                    </div>
                    <div className={CSS.registrationBtn}>Register</div>
                  </div>
                  <div className={CSS.eventDate}>
                    <div className={CSS.eventStart}>
                      <div className={CSS.dateTitle}>Starts:</div>
                      <div className={CSS.startDate}>{Event.startDate}</div>
                    </div>
                    <div className={CSS.eventStart}>
                      <div className={CSS.dateTitle}>Ends:</div>
                      <div className={CSS.startDate}>{Event.endDate}</div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Events;