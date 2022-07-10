import React, { useContext, useState } from 'react';
import './navbar.css'
import logo from './logo-white.png';
import { useNavigate, NavLink } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Navbar = () => {

    const navigate = useNavigate();

    const [menuState, setMenuState] = useState(false);
    const handleMenu = () => {
        setMenuState((menuState) => {
            return (!menuState)
        })
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        handleMenu();
    };

    const { user, dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    }

    const handleLogout = () => {
        axios.get('/auth/logout')
            .then(dispatch({ type: 'LOGOUT' }))
            .then(navigate('/'))
            .catch(err => console.log(err));
    }

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
                    <NavLink to='/'><li onClick={scrollToTop}>Home</li></NavLink>
                    <NavLink to='/team'><li onClick={scrollToTop}>Our Team</li></NavLink>
                    <NavLink to='/achievement'><li onClick={scrollToTop}>Achievments</li></NavLink>
                    <NavLink to='/public'><li onClick={scrollToTop}>Public Corner</li></NavLink>
                    <NavLink to='/about'><li onClick={scrollToTop}>About Us</li></NavLink>
                </ul>

                <div className="nav-icon-wrapper">
                </div>
                {
                    user !== null ? (
                        <>
                            <Avatar
                                alt={user.user.fullName}
                                src={user.user.profilePic}
                                sx={{ mr: 1, width: 35, height: 35 }}
                            />
                            <Button sx={{ mr: 2 }} onClick={handleLogout}>Logout</Button>
                        </>
                    )
                        :
                        (
                            <Button sx={{
                                mr: 2,
                                "&:hover": { background: '#1565c0', color: 'white' }
                            }}
                                disableElevation
                                variant='outlined'
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        )
                }

                <div className="menu-btn" onClick={handleMenu}><i className={menuState ? "far fa-times-circle" : "fas fa-bars"} /></div>
            </nav>
        </>
    );
}

export default Navbar;