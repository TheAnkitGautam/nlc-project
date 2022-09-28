import CSS from './AboutHero.module.css';
import heroImg from './aboutHero.png';
import Dots from '../Dots';


const AboutHero = () => {
    return (
        <>
            <h1 className={CSS.mainTitle} style={{ paddingTop: "90px" }}>
                <span className={CSS.aboutWord}>About </span>Us
            </h1>
            <p className={CSS.heroText}>
            NITA Literary club is a student's club where talented and creative minds get a chance to let their vices flow, express their thoughts and share something exciting. It is a conducive platform for nurturing such talents in today's students of technology. The objective of this club is to develop a passion among students towards literature. All through the year, the club organizes a number of events and sessions, online as well as offline to benefit students in the realms of writing and speaking. The club helps students develop solid thinking. Our club has a chain of 45+ enthusiastic members who works honestly for the literature. We, team NITA Literary Club believe that literature is the mirror of society and we are determined to carry it's glory forward.
            </p>
            <div className={`${CSS.img_box} imgAnim`}>
                <img className={CSS.heroImg} src={heroImg} alt="" />
            </div>
            <Dots />
        </>
    );
}

export default AboutHero;