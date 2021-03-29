import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    console.log(loggedInUser);
    return (
        <Container>
            <nav className="nav container">
                <div className="logo">
                <h1>Mama Riders</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/destination">Destination</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            {loggedInUser.isSignedIn ? <Link className="login-btn">{loggedInUser.email}</Link>  : <Link className="login-btn" to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    );
};

export default Header;