import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom";

function Pricing() {
        return (
            <>
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
            </>
        );
    }

export default Pricing;