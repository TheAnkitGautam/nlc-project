import teamCardCSS from './teamCard.module.css';
import SingleCard from './SingleCard';
import { Executive_Team, Second_Team, Third_Team } from './TeamData';
import Dots from './Dots';

const TeamCard = () => {
    return (
        <>
            <section className={teamCardCSS.card_box}>
                <h2 className={teamCardCSS.title}>Executive Team</h2>
                <div className={teamCardCSS.card_wrap}>
                    {
                        Executive_Team.map((Exe_member) => {
                            return <SingleCard key={Exe_member.index} props={Exe_member} />
                        })
                    }
                </div>
                < Dots />
            </section>


            <section className={teamCardCSS.card_box}>
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
            </section>
        </>
    );
}

export default TeamCard;