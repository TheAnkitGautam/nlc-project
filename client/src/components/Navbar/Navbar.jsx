import { useState } from 'react';
import './navbar.css'
import logo from './logo-white.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const handleMenu = (e) => {
        setMenuState((menuState) => {
            return (!menuState)
        })
    }

    return (
        <>
            <nav className="navbar menu">
                <div className="nav-logo"><img className='logo-img' src={logo} alt="" /></div>
                <div className="center">
                    <ul className="nav-links">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/team'><li>Our Team</li></Link>
                        <li>Achievments</li>
                        <li>Public Corner</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <ul className={menuState ? "mobile-nav is-active" : "mobile-nav"}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/team'><li>Our Team</li></Link>
                    <li>Achievments</li>
                    <li>Public Corner</li>
                    <li>About Us</li>
                </ul>

                <div className="nav-icon-wrapper">
                    <a href="https://www.instagram.com/nita_lit_club/" rel="noreferrer" target="_blank"><i className="foot-icon nav-sm nav-ig fab fa-instagram" /></a>
                    <a href="https://www.instagram.com/nita_lit_club/" rel="noreferrer" target="_blank"><i className="foot-icon nav-sm nav-fb fab fa-facebook" /></a>
                    <a href="https://www.instagram.com/nita_lit_club/" rel="noreferrer" target="_blank"><i className="foot-icon nav-sm nav-lik fab fa-linkedin" /></a>
                    <a href="https://www.youtube.com/channel/UCN4F89ff2F2qECLEa0YNUHA" rel="noreferrer" target="_blank"><i className="foot-icon nav-sm nav-yt fab fa-youtube" /></a>
                </div>
                <div className="menu-btn" onClick={handleMenu}><i className={menuState ? "far fa-times-circle" : "fas fa-bars"} /></div>
            </nav>
        </>
    );
}

export default Navbar;