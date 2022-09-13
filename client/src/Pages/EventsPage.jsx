import { useEffect, useState } from "react";
import eventPoster from "../components/Events/eventPoster.jpg";
import CSS from "../components/Events/public_corner.module.css";
import { Upcoming_events_list } from "../components/Events/Events_list";
import { Link } from 'react-router-dom'
import { Button, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Start_Login } from "../utils/API_Calls";

const EventsPage = () => {

  const { data } = useAuth()
  const [notExists, setNotExists] = useState(true)

  const handleLogin = () => {
    Start_Login()
  }

  useEffect(() => {
    if (data?.profile !== null && data?.user !== null) {
      setNotExists(false)
    } else if (data?.profile === null && data?.user !== null) {
      setNotExists(true)
    } else {
      setNotExists(true)
    }
  }, [data?.profile, data?.user])


  return (
    <section className="pageLoadAnim">
      <div className={CSS.imgBox}>
        <img src={eventPoster} alt="" className={CSS.eventImg} />
      </div>
      <div className={CSS.noticeBox}>
        <h2 className={CSS.title}>
          <span>-------</span> Upcoming Events <span>-------</span>
        </h2>
        {
          !data &&
          <div style={{ display: 'flex', justifyContent: 'center' }} className={CSS.buttonContainer}>
            <Typography variant="body1" sx={{ mr: 2 }} color={'error'}>You can only register for events after Login!</Typography>
            <Button size="small" variant="outlined" color="primary" onClick={handleLogin}>Login Here</Button>
          </div>
        }
        <div style={!data?.profile ? { pointerEvents: "none", opacity:"0.7" } : {}} className={CSS.eventContainer}>
          {
            Upcoming_events_list.map((Event, index) => {
              return (
                <div className={CSS.eventbox} key={index}>
                  <div className={CSS.eventDesc}>
                    <div className={CSS.eventTitleBanner}>
                      {/* <img className={CSS.eventLogo} src={logo} alt="" /> */}
                      <div className={CSS.eventTitle}>{Event.name}</div>
                    </div>
                    <button className={CSS.registrationBtn} disabled={notExists}>
                      <Link to={`/event/${Event.name}`}>
                        Register
                      </Link>
                    </button>
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
    </section >
  );
};

export default EventsPage;