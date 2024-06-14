import React from 'react';

function Contact() {
        return (
            <div>
                <br></br>

                <section className="section-white no-padding-bottom" id="contact">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12">
                                <h4>How to find us</h4>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30156.827198783118!2d72.88444935820894!3d19.125047053710816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8081c1d7b43%3A0xbaf100c54b8be366!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714376984928!5m2!1sen!2sin"
                                    width="100%" height="300" style={{ border: "0" }} title='maps1' allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>

                                <h5>Head Office</h5>
                                <p className="contact-info"><i className="fa fa-map-o"></i> Ganesh Consulting Services Pvt.Ltd Unit No.508,
                                    Shree Powai Plaza Co-operative Society Ltd, New Link Rd, Powai  , Mumbai, Maharashtra
                                    400071</p>
                                <p className="contact-info"><i className="fa fa-envelope-o"></i> <a
                                    href="mailto:contact@email.com">patelganesh470@gmail.com</a></p>
                                <p className="contact-info"><i className="fa fa-phone"></i> +91 8169139366</p>
                                <p className="contact-info"><i className="fa fa-phone"></i> +91 8169139366</p>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        );
    }

export default Contact;