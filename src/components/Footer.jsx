// This is the fotter section

import googlePlay from "../assets/googlePlay.svg";
import appStore from "../assets/appStore.svg";
import socialIcon1 from "../assets/Social icon1.svg";
import socialIcon2 from "../assets/Social icon2.svg";
import socialIcon3 from "../assets/Social icon3.svg";
import socialIcon4 from "../assets/Social icon4.svg";
import socialIcon5 from "../assets/Social icon5.svg";
import clearlink_logo from "../assets/clearlink_logo.svg";

const FooterSection = () => {
    return (
      <div className="footer-section">
        <div className="quick-links-section">
            <div className="quick-links">
                <div className="about-clear-link">
                    <div className="nav-title">
                        <img className="nav-logo" alt="Logo" src={clearlink_logo} />
                        <p className="clear-link">
                        <span className="title-wrapper">ClearLink</span>
                        <span className="span">.</span>
                        </p>
                    </div>

                    <p className="text">
                        ClearLink is your gateway to effortless, high- <br />
                        quality video conferencing. Join us in shaping <br />
                        the future of communication!
                    </p>
                </div>

                <div className="links">
                    <div className="link">
                        <p className="link-title">Product</p>
                        <div className="link-content">
                            <p>Overview</p>
                            <p>Features</p>
                            <p>Solutions</p>
                            <p>Tutorials</p>
                            <p>Pricing</p>
                        </div>
                    </div>

                    <div className="link">
                        <p className="link-title">Company</p>
                        <div className="link-content">
                            <p>About us</p>
                            <p>Careers</p>
                            <p>Press</p>
                            <p>News</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div className="link">
                        <p className="link-title">Resources</p>
                        <div className="link-content">
                            <p>Blog</p>
                            <p>Events</p>
                            <p>Help centre</p>
                            <p>Tutorials</p>
                            <p>Support</p>
                        </div>
                    </div>

                    <div className="link">
                        <p className="link-title">Legal</p>
                        <div className="link-content">
                            <p>Terms</p>
                            <p>Privacy</p>
                            <p>Cookies</p>
                            <p>Licenses</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div className="link">
                        <p className="link-title-blue">Get the app</p>
                        <div className="link-content">
                            <button>
                                <img src={ googlePlay } alt="button" />
                            </button>
                            <button>
                                <img src={ appStore } alt="button" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="copyrights">
            <div className="copyright-container">
                <div className="text">
                    <p>© 2023 ClearLink. All rights reserved.</p>
                </div>
                <div className="socials">
                    <button className="social-icon">
                        <img src={socialIcon1} alt="icon" />
                    </button>

                    <button className="social-icon">
                        <img src={socialIcon2} alt="icon" />
                    </button>

                    <button className="social-icon">
                        <img src={socialIcon3} alt="icon" />
                    </button>

                    <button className="social-icon">
                        <img src={socialIcon4} alt="icon" />
                    </button>

                    <button className="social-icon">
                        <img src={socialIcon5} alt="icon" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default FooterSection;