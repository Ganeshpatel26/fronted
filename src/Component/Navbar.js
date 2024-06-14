import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button onClick={toggleNavbar} className="navbar-toggle" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="/" className="" id="logo">
                        <img src="logo.png" alt="" style={{ width: "130px" }} />
                    </a>
                </div>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'in'}`} id="navbar-collapse-02">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="current"><Link className="" area-current="page" to="/">Home</Link></li>
                        <li className=""><Link className="" area-current="page" to="/about">About</Link></li>
                        <li className=""><Link className="" area-current="page" to="/pricing">Pricing</Link></li>
                        <li className=""><Link className="" area-current="page" to="/contact">Contact</Link></li>
                        <li className=""><Link to="/login" target="_self" className="external discover-btn">Login</Link></li>
                        <li className=""><Link to="/signup" target="_self" className="external discover-btn">Signup</Link></li>
                        <li className=""><Link to="/bills" target="_self" className="external discover-btn">Billing</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
