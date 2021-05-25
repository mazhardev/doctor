import React from "react";
import Linkin from "./../assets/img/linkedin_2x.png";
import Instagram from "./../assets/img/instagram_2x.png";
import Facebook from "./../assets/img/facebook_2x.png";

const Footer = props => {
    return (
        <footer className="footer-class">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="social-group">
                            <img src={Linkin} alt="" className="footer-icon" />
                            <img src={Instagram} alt="" className="footer-icon" />
                            <img src={Facebook} alt="" className="footer-icon" />
                        </div>
                        <div className="footer-title">
                            <h4>Doctor</h4>
                        </div>
                        <div>
                            12 W 20th Street, 2th Fl
                            <br />
                            New York, NY 10023
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-title">
                            <h4>Doctor</h4>
                        </div>
                        <div>Provider? Join Us</div>
                        <div>Careers</div>
                        <div>FAQ</div>
                        <div>Blog</div>
                        <div>Press</div>
                        <div>Privacy Policy</div>
                        <div>Terms of Use</div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-title">
                            <h4>Services</h4>
                        </div>
                        <div>Unlimited Messaging Therapy</div>
                        <div>Couples Therapy</div>
                        <div>Talkspace for Business</div>
                        <div>Social Media Therapy</div>
                        <div>Gift Cards</div>
                        <div>Assessments</div>
                        <div>Student Plan</div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-title">
                            <h4>Useful links</h4>
                        </div>
                        <div>Customer Support</div>
                        <div>Couples Therapy</div>
                        <div>Talkspace for Business</div>
                        <div>Social Media Therapy</div>
                        <div>Gift Cards</div>
                        <div>Assessments</div>
                        <div>Student Plan</div>
                    </div>
                    <div className="col-md-12">
                        {/* <div className="footer-text">
                            If you are in a life threatening situation - don’t use this site. Call +1 (800) 273-8255 or use &nbsp;
                <span style={{ color: "#ff697a" }}>these resources</span>&nbsp; to get immediate help.
              </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
