import React from 'react';
import './header.css';

export default function Header() {

    return (
        <div className="header">
            <div className="logo">
                <img src="http://localhost:3000/images/logo.png" alt="logo" className="logo" />
            </div>
            <header>
            <div className="h1">
                Share Your Yummies
            </div>
            </header>
        </div>
    )
}