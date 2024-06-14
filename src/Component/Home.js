import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <br></br>
            <div>
                <section className="home-section" id="home_wrapper" style={{ backgroundColor: "#fff" }}>
                    <div className="home-section-overlay"></div>

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6 padding-top-80">
                                <h2 style={{ color: "#fff" }}>Automated Accounting &amp; GST Software</h2>
                                <h2 style={{ color: "#fff", fontSize: "28px" }}>Create E-Invoice &amp; E-way bill in 10 seconds</h2>

                                <Link to='/login' target="_blank" className="btn-green scrool visible-xs">Login /
                                    Signup</Link>
                                <Link to='/login' target="_blank"
                                    className="btn-green scrool visible-md visible-lg" style={{ width: "33%" }}>Get Started</Link>
                                <div className="row" style={{ marginTop: "20px" }}>
                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <img src="playStore.png" alt='' style={{ width: "100%" }} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6">
                                        <img src="appStore.png" alt='' style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 wow bounceIn" data-wow-delay="0.5s"
                                style={{ visibility: "visible", animationDelay: "0.5s", animationName: "bounceIn", marginBottom: "100px" }}>
                                <img style={{ objectPosition: "-20% 0" }} src="main.png" className="width-86" alt="pic" />
                            </div>

                        </div>

                    </div>

                </section>


                <section className="top-shape-wrapper" id="about">

                    <div className="" id="team">
                        <div className="container">

                            <div className="row">

                                <div className="col-md-6" style={{ zIndex: "9999" }}>
                                    <div className="main-services" style={{ textAlign: "left", marginTop: "0" }}>

                                        <ul>
                                            <li className="forli" style={{ fontSize: "26px", marginTop: "19px" }}><img
                                                src="https://accountingsoftware.s3.ap-south-1.amazonaws.com/Website_Static/img/icon/add_item.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Manage Inventory</li>
                                            <li className="forli"><img
                                                src="https://accountingsoftware.s3.ap-south-1.amazonaws.com/Website_Static/img/icon/sales_invoice.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Create GST/Non GST Bills</li>
                                            <li className="forli"><img
                                                src="https://accountingsoftware.s3.ap-south-1.amazonaws.com/Website_Static/img/icon/purchase_report.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Track Payments</li>
                                            <li className="forli"><img
                                                src="https://accountingsoftware.s3.ap-south-1.amazonaws.com/Website_Static/img/icon/reports.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Analyse Reports</li>
                                            <li className="forli"><img
                                                src="https://accountingsoftware.s3.ap-south-1.amazonaws.com/Website_Static/img/icon/sales_invoice.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Stay Connected 24 x 7</li>
                                            <li className="forli"><img src="send_quotation.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Send Quotations</li>
                                        </ul>
                                    </div> <img src="wave.png" alt="" style={{
                                        marginTop: "42px",
                                        width: "200px"
                                    }} />
                                </div>


                                <div className="col-md-6" style={{ marginTop: "156px" }}>
                                    <div className="main-services" style={{ textAlign: "left" }}>

                                        <h3>Who is this for?</h3>
                                        <ul>
                                            <li className="forli"><img src="smallbusiness.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Small Businesses</li>
                                            <li className="forli"><img src="retailers.png" style={{ width: "50px", marginBottom: "0" }}
                                                alt="" /> Retailers</li>
                                            <li className="forli"><img src="wholesaler.png" style={{ width: "50px", marginBottom: "0" }}
                                                alt="" /> Wholesalers</li>
                                            <li className="forli"><img src="homebusiness.png"
                                                style={{ width: "50px", marginBottom: "0" }} alt="" /> Home Businesses </li>
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
                                    href="https://www.youtube.com/" className="white-text"
                                    style={{ textDecoration: "underline" }} target="_blank" rel="noreferrer">Click here</a></p>
                            </div>


                            <div className="col-md-6 wow slideInRight" data-wow-delay="0.15s"
                                style={{ visibility: "visible", animationDelay: "0.15s", animationName: "slideInRight" }}>
                                <img src="download-app-iphone.png" alt="" className="download-app-iphone width-100" />
                            </div>

                        </div>

                    </div>

                </section>

                <section className="section-grey small-padding-top" style={{ paddingTop: "140px" }} id="pricing">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 text-center">
                                <h2 className="section-title">PRICING</h2>

                            </div>


                            <div className="col-md-12 text-center" style={{ marginBottom: "25px" }}>


                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="price-box-white" style={{ padding: "22px 0" }}>
                                            <ul className="pricing-list">
                                                <li className="price-title" style={{ paddingBottom: "5px" }}>PREMIUM</li>
                                                <li className="price-value"
                                                    style={{ fontSize: "34px", marginTop: "1px", marginBottom: "1px", lineHeight: "35px" }}>
                                                    ₹2,221 </li>
                                                <li className="price-subtitle" style={{ marginBottom: "3px", fontSize: "19px" }}>Incl. GST</li>
                                                <li className="price-subtitle" style={{ marginBottom: "3px" }}>Per Year</li>
                                                <li className="price-text">5 Users + Admin</li>
                                                <li className="price-text">3 Businesses</li>
                                                <li className="price-text">Web &amp; Mobile Access (IOS &amp; Android)</li>
                                                <li className="price-text">1000 E-Way Bills</li>
                                                <li className="price-text">1000 E-Invoicing Bills</li>
                                                <li className="price-text">1000 SMS</li>
                                                <li className="price-subtitle">Monthly Price also available</li>
                                                <li className="btn-green scrool" style={{ padding: "10px 24px" }}><Link
                                                    to='/login' style={{ color: "#fff" }}>GET STARTED</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="price-box-white" style={{ padding: "22px 0" }}>
                                            <ul className="pricing-list">
                                                <li className="price-title" style={{ paddingBottom: "5px" }}>FREEDOM</li>
                                                <li className="price-value"
                                                    style={{ fontSize: "34px", marginTop: "1px", marginBottom: "1px", lineHeight: "35px" }}>
                                                    ₹3,840</li>
                                                <li className="price-subtitle" style={{ marginBottom: "3px", fontSize: "19px" }}>Incl. GST</li>
                                                <li className="price-subtitle" style={{ marginBottom: "3px" }}>Per Year</li>
                                                <li className="price-text">25 Users + Admin</li>
                                                <li className="price-text">Unlimited Businesses</li>
                                                <li className="price-text">Web &amp; Mobile Access (IOS &amp; Android)</li>
                                                <li className="price-text">5000 E-Way Bills</li>
                                                <li className="price-text">5000 E-Invoicing Bills</li>
                                                <li className="price-text">5000 SMS</li>
                                                <li className="price-subtitle">Monthly Price also available</li>
                                                <li className="btn-green scrool" style={{ padding: "10px 24px" }}><Link
                                                    to='/login' style={{ color: "#fff" }}>GET STARTED</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>


                <section className="section-white no-padding-bottom" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <h4>How to find us</h4>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30156.827198783118!2d72.88444935820894!3d19.125047053710816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8081c1d7b43%3A0xbaf100c54b8be366!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714376984928!5m2!1sen!2sin"
                                    width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade" title='googlemap'></iframe>

                                <h5>Head Office</h5>
                                <p className="contact-info"><i className="fa fa-map-o"></i> Ganesh Consulting Services Pvt.Ltd Unit No.508,
                                    Shree Powai Plaza Co-operative Society Ltd, New Link Rd, Andheri East, Mumbai, Maharashtra
                                    400071</p>
                                <p className="contact-info"><i className="fa fa-envelope-o"></i> <a
                                    href="mailto:contact@email.com">patelganesh470@gmail.com</a></p>
                                <p className="contact-info"><i className="fa fa-phone"></i> +91 8169139366</p>
                                <p className="contact-info"><i className="fa fa-phone"></i> +91 8169139366</p>

                            </div>
                        </div>
                    </div>
                </section>


                {/* <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-lg" style={{ width: "96% !important" }}>

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h4 className="modal-title">Book a Demo</h4>
                            </div>
                            <div className="modal-body" style={{ height: "650px" }}>
                                <iframe src="https://calendly.com/support-esarwa" frameborder="0"
                                    style={{ overflow: "hidden", height: "100%", width: "100%" }}></iframe>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    );
}
export default Home;