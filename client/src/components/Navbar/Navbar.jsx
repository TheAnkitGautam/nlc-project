import React, {useState} from 'react';
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

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'auto'
        });
        handleMenu();
    };
    
    return (
        <>
            <nav className="navbar menu">
                <div className="nav-logo"><img className='logo-img' src={logo} alt="" /></div>
                <div className="center">
                    <ul className="nav-links">
                        <NavLink to='/'><li onClick={scrollToTop}>Home</li></NavLink>
                        <NavLink to='/team'><li onClick={scrollToTop}>Our Team</li></NavLink>
                        <NavLink to='/achievement'><li onClick={scrollToTop}>Achievments</li></NavLink>
                        <NavLink to='/public'><li onClick={scrollToTop}>Public Corner</li></NavLink>
                        <NavLink to='/about'><li onClick={scrollToTop}>About Us</li></NavLink>
                    </ul>
                </div>

                <ul className={menuState ? "mobile-nav is-active" : "mobile-nav"}>
                    <NavLink to='/'><li onClick={() => setMenuState(false)} onClick={scrollToTop}>Home</li></NavLink>
                    <NavLink to='/team'><li onClick={() => setMenuState(false)} onClick={scrollToTop}>Our Team</li></NavLink>
                    <NavLink to='/achievement'><li onClick={() => setMenuState(false)} onClick={scrollToTop}>Achievments</li></NavLink>
                    <NavLink to='/public'><li onClick={() => setMenuState(false)} onClick={scrollToTop}>Public Corner</li></NavLink>
                    <NavLink to='/about'><li onClick={() => setMenuState(false)} onClick={scrollToTop}>About Us</li></NavLink>
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