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
                        Executive_Team.map((Exe_member) => {
                            return <SingleCard key={Exe_member.index} props={Exe_member} />
                        })
                    }
                </div>
                < Dots />
            </section>


            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Editorial Team</span></h3>
                <div className={teamCardCSS.social_card_wrap}>
                    {
                        Editorial_Team.map((Editorial_member) => {

                            return (
                                <Fade delay={500} duration={1000}>
                                    <SecondaryCard key={Editorial_member.index} props={Editorial_member} />
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
                        Graphics_Team.map((Graphics_member) => {
                            return <SecondaryCard key={Graphics_member.index} props={Graphics_member} />
                        })
                    }
                </div>
                < Dots />
            </section>



            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Social Media Team</span></h3>
                <div className={teamCardCSS.social_card_wrap}>
                    {
                        Social_Team.map((Social_member) => {
                            return <SecondaryCard key={Social_member.index} props={Social_member} />
                        })
                    }
                </div>
                < Dots />
            </section>


            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Debating Society</span></h3>
                <div className={teamCardCSS.social_card_wrap}>
                    {
                        Debating_Team.map((Debating_member) => {
                            return <SecondaryCard key={Debating_member.index} props={Debating_member} />
                        })
                    }
                </div>
                < Dots />
            </section>
        </>
    );
}

export default TeamCard;