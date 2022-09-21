import React from "react";
import CSS from "./message.module.css";

export const Message = () => {
  return (
    <section className="container">
      <h2 className={CSS.messagetitle}><span>Message</span> from our Faculty Coordinator</h2>
      <div className={CSS.messagewrapper}>
        <div className={CSS.messagefaculty}>
          <img className={CSS.messageimage} src="https://i.postimg.cc/PxZWWpTc/anuradha-nongmaithem.jpg" alt="" />
          <h3 className={CSS.name}>Dr. Anuradha Nongmaithem</h3>
          <h5 className={CSS.post}>Faculty Mentor, NLC</h5>
        </div>
        <div className={CSS.messagecontent}>
          <p><strong>Greetings and a very warm welcome to NLC, NITA!</strong><br/><br/>
            NLC of National Institute of Technology Agartala is one of the most active and vibrant club in the campus. We foster and nurtures leaders of tomorrow who are capable of making difference in the society. Our students are involved into multifaceted activities, and leads in organizing various events round the clock without sacrificing their academic. We have strong faculty-student relations which resulted in strong team spirit and dedication. We promote inclusion, tolerance and brotherhood. I am very proud to be part of the club from its very inception. NLC takes pride in its students and alumni who have proven their spirit at the frontiers of knowledge and creativity across the gamut of academic and professional activities by engaging in research and community services. I take this opportunity to extend a personal invitation to you to visit and explore our website to learn more about us. <br/><br/>
            My blessings and wishes to all the members of the club for their future endeavors.</p>
        </div>
      </div>
    </section>
  );
};
