import './teamHeader.css';
// import coord1 from './coord-1.png';
import Dots from '../Dots';
import FacultyCord from '../TeamCard/FacultyCord';

const TeamHeader = () => {
    return (
        <>
            <header className="team-header">
                <h1 className="team-heading"><span>Meet </span>Our Team</h1>
                <p className="team-intro-para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                <FacultyCord />
                
                <div className="coordinator">
                    <div className="coord-wrap">
                        <div className="coordinator-img"><img className="coordinator-image" src="https://i.postimg.cc/XJ7hhq5J/anawil-tiwari.jpg" alt="" /></div>
                        <div className="coordinator-desc">
                            <h3 className="coord-name">Anawil Tiwari</h3>
                            <h5 className="coord-post">President</h5>
                            <div className="team-sm-icon">
                                <a href="https://fb.com"><i className="team-icon fab fa-instagram" /></a>
                                <a href="https://fb.com"><i className="team-icon fab fa-linkedin-in" /></a>
                            </div>
                            <p className="coord-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <Dots />
                        </div>
                    </div>
                    <div className="coord-wrap">
                        <div className="coordinator-img"><img className="coordinator-image" src="https://i.postimg.cc/DZ2XVJnt/tarang-vats.jpg" alt="" /></div>
                        <div className="coordinator-desc">
                            <h3 className="coord-name">Tarang Vats</h3>
                            <h5 className="coord-post">Vice President</h5>
                            <div className="team-sm-icon">
                                <a href="https://fb.com"><i className="team-icon fab fa-instagram" /></a>
                                <a href="https://fb.com"><i className="team-icon fab fa-linkedin-in" /></a>
                            </div>
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