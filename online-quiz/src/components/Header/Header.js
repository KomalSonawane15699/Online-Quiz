// src/components/Header/Header.js

import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="landing-header">
            <div className="logo">Quizzy</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#subjects">Subjects</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
                <button className="btn-secondary nav-button">Sign In</button>
                <button className="btn-primary nav-button">Sign Up</button>
            </nav>
        </header>
    );
}

export default Header;