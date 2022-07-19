import React from "react";
import CSS from "./message.module.css";

export const Message = () => {
  return (
    <>
        <h2 className={CSS.messagetitle}><span>Message</span> from our Faculty Coordinator</h2>
      <div className={CSS.messagewrapper}>
        <div className={CSS.messagefaculty}>
          <img className={CSS.messageimage} src="https://i.postimg.cc/PxZWWpTc/anuradha-nongmaithem.jpg" alt=""/>
          <h3 className={CSS.name}>Dr. Anuradha Nongmaithem</h3>
          <h5 className={CSS.post}>Faculty Coordinator</h5>
        </div>
        <div className={CSS.messagecontent}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi ipsum mollitia. Atque nesciunt amet veniam. Quam tempore iusto aliquid maiores odio vitae aperiam corporis nam, labore atque eaque laborum, voluptate consequatur, eum reiciendis! Odit quisquam deserunt natus, possi Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea voluptatum velit ex perferendis quod nisi molestias, saepe iste. Nihil quis repellat nostrum fugit laudantium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat quis esse provident unde ratione ex maiores, quia odio magnam rem voluptatum id minima adipisci mollitia nulla nobis dolor saepe omnis non sequi ipsum voluptate. mus alias consectetur sunt magnam aliquid? Quia, blanditiis neque. Laudantium, amet ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est.</p>
        </div>
      </div>
    </>
  );
};
