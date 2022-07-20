import React from "react";
import CSS from "./public_corner.module.css";
import { Previous_events_list} from "./Events_list";

const PreviousEvents = () => {
  return (
    <section className="pageLoadAnim">
      <div className={CSS.noticeBox}>
        <h2 className={CSS.title}>
          <span>----------</span> Previous Events <span>----------</span>
        </h2>
        <div className={CSS.eventContainer}>
          {Previous_events_list.map((Event, index) => {
            return (
              <div className={CSS.eventbox} key={index}>
                <div className={CSS.eventDesc}>
                  <div className={CSS.eventTitleBanner}>
                    <img className={CSS.eventLogo} src="https://i.postimg.cc/nL0ch7Mx/Untitled-design-1.png" alt="" />
                    <div className={CSS.eventTitle}>{Event.name}</div>
                  </div>
                  <div className={CSS.completionBtn}>Completed</div>
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
          })}
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
