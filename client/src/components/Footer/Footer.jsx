import { useState } from 'react';
import './footer.css'
import { Subscribe } from '../../utils/API_Calls';

const Footer = () => {

    const [email, setEmail] = useState("");
    const [err, setErr] = useState({
        color: "",
        msg: ""
    });

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (regex.test(email)) {
            try {
                let { data } = await Subscribe(email);
                setErr({ color: data.color, msg: data.msg });
                setEmail("");
            } catch (err) {
                setErr({ color: "red", msg: "Something went wrong. Try again" });
                setEmail("");
            }
        } else {
            setErr({ color: "red", msg: "Please enter a valid email.." });
        }
    }

    return (
        <div className="foot">
            <footer className="footer">
                <div className="footer-left">
                    <h3 className='footer-title'>Reach us on our Social Media Handles</h3>
                    <div className="icon-wrapper">
                        <div className="sm-icon">
                            <a href="https://www.instagram.com/nita_lit_club/"
                                rel="noreferrer" target="_blank"><i className="foot-icon fab fa-instagram" />
                            </a>
                            <h6 className='icon-text'>instagram</h6>
                        </div>
                        <div className="sm-icon">
                            <a href="https://www.instagram.com/nita_lit_club/"
                                rel="noreferrer" target="_blank"><i className="foot-icon fab fa-facebook" /></a>
                            <h6 className='icon-text'>facebook</h6>
                        </div>
                        <div className="sm-icon">
                            <a href="https://www.instagram.com/nita_lit_club/"
                                rel="noreferrer" target="_blank"><i className="foot-icon fab fa-linkedin" />
                            </a>
                            <h6 className='icon-text'>linkedin</h6>
                        </div>
                        <div className="sm-icon">
                            <a href="https://www.youtube.com/channel/UCN4F89ff2F2qECLEa0YNUHA"
                                rel="noreferrer" target="_blank"><i className="foot-icon fab fa-youtube" />
                            </a>
                            <h6 className='icon-text'>youtube</h6>
                        </div>
                        <div className="sm-icon">
                            <a href="mailto: nitaliteraryclub@gmail.com?subject=Query%20Regarding%20:-"
                                rel="noreferrer" target="_blank"><i className="foot-icon fas fa-envelope" />
                            </a>
                            <h6 className='icon-text'>Email</h6>
                        </div>
                    </div>
                </div >
                <div className="footer-right">
                    <h3 className='footer-title'>Subcribe us for event updates</h3>
                    <div className="footer-subs">
                        <input className='subs-input' onChange={handleEmail} value={email} placeholder='Enter your email' type="email" />
                        <button className='subs-btn' onClick={handleSubmit} >Subscribe</button>
                    </div>
                    <p className='error' style={{ color: err.color }}>{err.msg}</p>
                </div>
            </footer>
            <p className="copy-text">&copy; Designed and Developed by Web Development Team, NIT Agartala Literary Club</p>
        </div>
    );
}

export default Footer;