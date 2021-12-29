import teamCardCSS from './teamCard.module.css';
import SingleCard from './SingleCard';
import { Executive_Team, LinkedIn_Team, Social_Team } from './TeamData';
import Dots from './Dots';
import SecondaryCard from './SecondaryCard';

const TeamCard = () => {
    return (
        <>
            <section className={teamCardCSS.card_box}>
                <h2 className={teamCardCSS.title}><span>Executive Team</span></h2>
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
                <h3 className={teamCardCSS.secondary_title}><span>Linkedin Team</span></h3>
                <div className={teamCardCSS.secondary_card_wrap}>
                    {
                        LinkedIn_Team.map((LinkedIn_member) => {
                            return <SecondaryCard key={LinkedIn_member.index} props={LinkedIn_member} />
                        })
                    }
                </div>
                < Dots />
            </section>

            <section className={teamCardCSS.secondary_card_box}>
                <h3 className={teamCardCSS.secondary_title}><span>Social Team</span></h3>
                <div className={teamCardCSS.social_card_wrap}>
                    {
                        Social_Team.map((Social_member) => {
                            return <SecondaryCard key={Social_member.index} props={Social_member} />
                        })
                    }
                </div>
                < Dots />
            </section>
        </>
    );
}

export default TeamCard;


{/* <section className={teamCardCSS.card_box}>
                <h2 className={teamCardCSS.title}>Second Team</h2>
                <div className={teamCardCSS.card_wrap}>
                    {
                        Second_Team.map((Sec_member) => {
                            return <SingleCard key={Sec_member.index} props={Sec_member} />
                        })
                    }
                </div>
                < Dots />
            </section>


            <section className={teamCardCSS.card_box}>
                <h2 className={teamCardCSS.title}>Third Team</h2>
                <div className={teamCardCSS.card_wrap}>
                    {
                        Third_Team.map((Third_member) => {
                            return <SingleCard key={Third_member.index} props={Third_member} />
                        })
                    }
                </div>
                < Dots />
            </section> */}