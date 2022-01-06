import { useState } from 'react';
import './navbar.css'
import logo from './logo-white.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const handleMenu = () => {
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
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/team'><li>Our Team</li></NavLink>
                        <li>Achievments</li>
                        <li>Public Corner</li>
                        <NavLink to='/about'><li>About Us</li></NavLink>
                    </ul>
                </div>

                <ul className={menuState ? "mobile-nav is-active" : "mobile-nav"}>
                    <NavLink to='/'><li onClick={() => setMenuState(false)}>Home</li></NavLink>
                    <NavLink to='/team'><li onClick={() => setMenuState(false)}>Our Team</li></NavLink>
                    <li onClick={() => setMenuState(false)}>Achievments</li>
                    <li onClick={() => setMenuState(false)}>Public Corner</li>
                    <NavLink to='/about'><li onClick={() => setMenuState(false)}>About Us</li></NavLink>
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