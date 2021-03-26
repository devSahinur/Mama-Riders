import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
                            <Link className="login-btn" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    );
};

export default Header;