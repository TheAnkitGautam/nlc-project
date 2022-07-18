import { useEffect, useState, useContext } from "react";
import eventPoster from "./eventPoster.jpg";
import CSS from "./public_corner.module.css";
import logo from "./../Clubs/D-Zire.png";
import { Upcoming_events_list } from "./Events_list";
import { Link } from 'react-router-dom'
import { Button, Typography } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

const Events = () => {

  const { user, profile } = useContext(AuthContext);
  const [notExists, setNotExists] = useState(true)

  const handleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  }

  useEffect(() => {
    if (profile !== null && user !== null) {
      setNotExists(false)
    } else if (profile === null && user !== null) {
      setNotExists(true)
    } else {
      setNotExists(true)
    }
  }, [profile, user])


  return (
    <section className="pageLoadAnim">
      <div className={CSS.imgBox}>
        <img src={eventPoster} alt="" className={CSS.eventImg} />
      </div>
      <div className={CSS.noticeBox}>
        <h2 className={CSS.title}>
          <span>----------</span> Upcoming Events <span>----------</span>
        </h2>
        <div className={CSS.buttonContainer}>
          {
            !user && <>
              <Typography variant="body1" sx={{ mr: 2 }} color={'error'}>You can only register for events after Login!</Typography>
              <Button size="small" variant="outlined" color="primary" onClick={handleLogin} >Login Here</Button>
            </>
          }
          {
            (user && !profile) && <>
              <Typography variant="body1" sx={{ mr: 2 }} color={'error'}>Please create profile before registering for events!</Typography>
              <Button size="small" variant="outlined" color="primary"><Link to={'/profile'}>Create Profile</Link></Button>
            </>
          }
          {
            (user && profile) &&
            <Typography variant="body1" sx={{ mr: 2 }} color={'success'}>Click on Register Button to register for a event.</Typography>
          }
        </div>
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
                    <Button variant="contained" disabled={notExists}>
                      <Link to={'/events/rules'} state={{ from: Event.name }}>
                        Register
                      </Link>
                    </Button>
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

export default Events;