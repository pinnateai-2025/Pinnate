import "./Footer.css";
import FooterLogo from "../../assets/footer-logo.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Mail from "../../assets/mail.png";
import Call from "../../assets/call.png";
import Location from "../../assets/location.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer">
                <div className="footer-logo">
                    <img src={FooterLogo} alt="footer-logo" />
                    <p>
                        Olive is a full-service digital & web
                        solutions agency based in New
                        Delhi, India
                    </p>
                </div>
                <div className="footer-contents">
                    <div className="footer-menu-icons">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-icons">
                            <a href="https://www.instagram.com/pinnate.ai?igsh=MWNiOGpwajI1dnh6Ng==" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                            <a href="https://www.linkedin.com/company/pinnate-ai/" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className="mail">
                            <img src={Mail} alt="mail" className="mail-logo" />
                            <p>Info@Pennate.com</p>
                        </div>
                        <div className="call">
                            <img src={Call} alt="call" className="call-logo" />
                            <div className="number">
                                <p>+91 9234567891</p>
                                <p>+91 9123456789</p>
                            </div>
                        </div>
                        <div className="location">
                            <img src={Location} alt="location" className="location-logo" />
                            <div className="address">
                                <p>182 B, Golf Tower, Pitampura</p>
                                <p>New Delhi- 110034</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
