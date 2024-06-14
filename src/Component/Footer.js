import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
        return (
            <>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>Copyright © 2022 GANESH Designed by <Link to="/" target="_blank">GANESH</Link></p>

                                <ul className="footer_social">
                                    <li>
                                        <a href="https://www.linkedin.com/in/ganesh-patel-268062217" target="_blank" rel="noreferrer" >
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/share/f1bAEFbrCLmRLFU1/?mibextid=qi2Omg" target="_blank" rel="noreferrer" >
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/patelganesh470?igsh=MjZlaWlkY3RyOHI0" target="_blank" rel="noreferrer" >
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    

                                </ul>
                                <p>
                                    <a href="privacy_policy.html">Privacy Policy</a> | <a href="terms_and_conditions.html">Terms And
                                        Conditions</a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default Footer;
