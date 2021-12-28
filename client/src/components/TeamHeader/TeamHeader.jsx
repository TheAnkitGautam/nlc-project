import './teamHeader.css';
import coord1 from './coord-1.png';
import Dots from '../TeamCard/Dots';
const TeamHeader = () => {
    return (
        <>
            <header className="team-header">
                <h1 className="team-heading"> <span className='meet-word'>MEET </span>OUR TEAM</h1>
                <p className="team-intro-para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div className="coordinator">
                    <div className="coord-wrap">
                        <div className="coordinator-img"><img src={coord1} alt="" /></div>
                        <div className="coordinator-desc">
                            <h3 className="coord-name">Dr. Anuradha Nongmaithem</h3>
                            <h5 className="coord-post">Faculty Coordinator</h5>
                            <div className="team-sm-icon">
                                <a href=""><i className="team-icon fab fa-instagram" /></a>
                                <a href=""><i className="team-icon fab fa-linkedin-in" /></a>
                            </div>
                            <p className="coord-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <Dots />
                        </div>
                    </div>
                    <div className="coord-wrap">
                        <div className="coordinator-img"><img src={coord1} alt="" /></div>
                        <div className="coordinator-desc">
                            <h3 className="coord-name">Anawil Tiwari</h3>
                            <h5 className="coord-post">President</h5>
                            <div className="team-sm-icon"><i className="team-icon fab fa-instagram" /><i className="team-icon fab fa-linkedin-in" /></div>
                            <p className="coord-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <Dots />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default TeamHeader;