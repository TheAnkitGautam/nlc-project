import './footer.css'

const Footer = () => {
    return (
        <div className="foot">
            <footer className="footer">
                <div className="footer-left">
                    <h3 className='footer-title'>Follow our Social Media Handles</h3>
                    <div className="icon-wrapper">
                        <div className="sm-icon">
                            <i className="foot-icon fab fa-instagram" />
                            <h6 className='icon-text'>instagram</h6>
                        </div>
                        <div className="sm-icon">
                            <i className="foot-icon fab fa-facebook" />
                            <h6 className='icon-text'>facebook</h6>
                        </div>
                        <div className="sm-icon">
                            <i className="foot-icon fab fa-linkedin" />
                            <h6 className='icon-text'>linkedin</h6>
                        </div>
                        <div className="sm-icon">
                            <i className="foot-icon fab fa-youtube" />
                            <h6 className='icon-text'>youtube</h6></div>
                        <div className="sm-icon">
                            <i className="foot-icon fas fa-envelope" />
                            <h6 className='icon-text'>Email</h6></div>
                    </div>
                </div >
                <div className="footer-right">
                    <h3 className='footer-title'>Subcribe us for event updates</h3>
                    <div className="footer-subs">
                        <input className='subs-input' placeholder='Enter your email' type="text" />
                        <button className='subs-btn'>Subscribe</button>
                    </div>
                </div>
            </footer >
            <p className="copy-text">&copy; Designed and Developed by Graphic & Technical Team NLC, NIT Agartala </p>
        </div>
    );
}

export default Footer;