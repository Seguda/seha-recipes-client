import React from 'react';
import './header.css';

export default function Header() {

    return (
       <div className="header">
            <div className="logo">
                <img src="http://localhost:3000/images/logo.png" alt="logo" className="logo" />
            </div>
            <h1 className="app-header">Share Your Yummies</h1>
       </div>
    )
}
