import teamCardCSS from './teamCard.module.css';
import SingleCard from './SingleCard';
import { Executive_Team, Social_Team, Editorial_Team, Graphics_Team, Debating_Team } from './TeamData';
import Dots from './../Dots';
import SecondaryCard from './SecondaryCard';
import { Fade } from 'react-reveal';

const TeamCard = () => {
    return (
        <>
            <section className={teamCardCSS.card_box}>
                <h2 className={teamCardCSS.title}><span>Executive Posts</span></h2>
                <div className={teamCardCSS.card_wrap}>
                    {
                        Executive_Team.map((Exe_member, index) => {
                            return <SingleCard key={index} props={Exe_member} />
                        })
                    }
                </div>
                < Dots />
            </section>


            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Editorial Team</span></h3>
                <div className={teamCardCSS.social_card_wrap}>
                    {
                        Editorial_Team.map((Editorial_member, index) => {

                            return (
                                <Fade key={Editorial_member.index} delay={500} duration={1000}>
                                    <SecondaryCard key={index} props={Editorial_member} />
                                </Fade>
                            )
                        })
                    }
                </div>

                < Dots />
            </section>


            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Graphics & Tech. Team</span></h3>
                <div className={teamCardCSS.graphics_card_wrap}>
                    {
                        Graphics_Team.map((Graphics_member, index) => {
                            return (
                                <Fade key={Graphics_member.index} delay={200} duration={500}>
                                    <SecondaryCard key={index} props={Graphics_member} />
                                </Fade>
                            )
                        })
                    }
                </div>
                < Dots />
            </section>



            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Social Media Team</span></h3>
                <div className={teamCardCSS.social_card_wrap}>
                    {
                        Social_Team.map((Social_member, index) => {
                            return (
                                <Fade key={Social_member.index} delay={500} duration={1000}>
                                    <SecondaryCard key={index} props={Social_member} />
                                </Fade>
                            )
                        })
                    }
                </div>
                < Dots />
            </section>


            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Debating Society</span></h3>
                <div className={teamCardCSS.social_card_wrap}>
                    {
                        Debating_Team.map((Debating_member, index) => {
                            return (
                                <Fade key={Debating_member.index} delay={500} duration={1000}>
                                    <SecondaryCard key={index} props={Debating_member} />
                                </Fade>
                            )
                        })
                    }
                </div>
                < Dots />
            </section>
        </>
    );
}

export default TeamCard;