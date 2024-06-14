import React from 'react';
// import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>

            <section className="top-shape-wrapper" id="about">

                <div className="" id="team">
                    <div className="container">

                        <div className="row">

                            <div className="col-md-6" >
                                <div className="main-services" style={{ textAlign: "left", marginTop: "0" }}>

                                    <ul>
                                        <li className="forli" style={{ fontSize: "26px", marginTop: "19px" }}><img
                                            src="/add_item.png"
                                            style={{ width: "50px", marginBottom: "0" }} alt="" /> Manage Inventory</li>
                                        <li className="forli"><img
                                            src="sales_invoice.png"
                                            style={{ width: "50px", marginBottom: "0" }} alt="" /> Create GST/Non GST Bills</li>
                                        <li className="forli"><img
                                            src="purchase_report.png"
                                            style={{ width: "50px", marginBottom: "0" }} alt="" /> Track Payments</li>
                                        <li className="forli"><img
                                            src="reports.png"
                                            style={{ width: "50px", marginBottom: "0" }} alt="" /> Analyse Reports</li>
                                        <li className="forli"><img
                                            src="sales_invoice.png"
                                            style={{ width: "50px", marginBottom: "0" }} alt="" /> Stay Connected 24 x 7</li>
                                        <li className="forli"><img
                                            src="send_quotation.png"
                                            style={{ width: "50px", marginBottom: "0" }} alt="" /> Send Quotations</li>
                                    </ul>
                                </div> <img src="wave.png" alt="" style={{ marginTop: "42px", width: "200px" }} />
                            </div>


                            <div className="col-md-6" style={{ marginTop: "156px" }}>
                                <div className="main-services" style={{ textAlign: "left" }}>

                                    <h3>Who is this for?</h3>
                                    <ul>
                                        <li className="forli"><img src="smallbusiness.png"
                                            style={{ width: "50px", marginBottom: "0" }}
                                            alt="" /> Small Businesses</li>
                                        <li className="forli"><img src="retailers.png"
                                            style={{ width: "50px", marginBottom: "0" }}
                                            alt="" /> Retailers</li>
                                        <li className="forli"><img src="wholesaler.png"
                                            style={{ width: "50px", marginBottom: "0" }}
                                            alt="" /> Wholesalers</li>
                                        <li className="forli"><img src="homebusiness.png"
                                            style={{ width: "50px", marginBottom: "0" }}
                                            alt="" /> Home Businesses </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className="section-grey small-padding-top" id="about">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12 text-center">
                            <h2 className="section-title">Why ESARWA?</h2>

                        </div>


                        <div className="col-md-3">
                            <div className="main-services">
                                <img src="aff pricing.png" className="width-100" alt="pic" />
                                <h3>Affordable Price</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="main-services">
                                <img src="easytouse.png" className="width-100" alt="pic" />
                                <h3>Easy to Use</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="main-services">
                                <img src="excellent.png" className="width-100" alt="pic" />
                                <h3>Excellence</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="main-services">
                                <img src="safe.png" className="width-100" alt="pic" />
                                <h3>Safe &amp; Secure</h3>
                            </div>
                        </div>


                        <div className="col-md-12 wow slideInUp" data-wow-delay="0.5s"
                            style={{ visibility: "visible", animationDelay: "0.5s", animationName: "bounceIn", textAlign: "center", marginTop: "100px" }}>
                            <img src="pc.png" alt="" style={{ width: "65%" }} />
                        </div>

                    </div>

                </div>

            </section>
            <section className="download-app-wrapper" id="download-app">
                <div className="download-app-wrapper-overlay"></div>
                <div className="shape-grey-image-top"></div>

                <div className="container">

                    <div className="row">

                        <div className="col-md-6 padding-top-100">
                            <h2 className="title-download-app-padding white-text">Get The App Now!</h2>
                            <h3 className="white-text">THE FUTURE OF BUSINESS</h3>
                            <p className="white-text">NOW AT AFFORDABLE PRICE</p>
                            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noreferrer"
                                className="btn-download-app">
                                <span className="fa fa-apple"></span>
                                <p><small>Download On</small><br />App Store</p>
                            </a>
                            <a href="https://play.google.com/store/games?hl=en_IN&gl=US"
                                target="_blank" rel="noreferrer" className="btn-download-app">
                                <span className="fa fa-android"></span>
                                <p><small>Get It On</small><br />Google Play</p>
                            </a>
                            <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="btn-download-app last">
                                <span className="fa fa-chrome"></span>
                                <p><small>Go to </small><br />Web</p>
                            </a>
                            <p className="white-text" style={{ fontSize: "28px", paddingTop: "16px" }}>To Check our Demo videos <a
                                href="https://www.youtube.com/" rel="noreferrer" className="white-text"
                                style={{ textDecoration: "underline" }} target="_blank">Click here</a></p>
                        </div>


                        <div className="col-md-6 wow slideInRight" data-wow-delay="0.15s"
                            style={{ visibility: "visible", animationDelay: "0.15s", animationName: "slideInRight" }}>
                            <img src="download-app-iphone.png" alt="" className="download-app-iphone width-100" />
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default About;