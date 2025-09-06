import "./Contact.css";
import Bg from "../../assets/contact-bg.png";
import Location from "../../assets/contact-location.png";
import Call from "../../assets/contact-call.png";
import Mail from "../../assets/contact-mail.png";

const Contact = () => {
    return (
        <div className="contact-container">
            <img src={Bg} alt="" className="contact-bg-image" />
            <div className="first-container">
                <div className="first-container-heading">
                    <h3>Tell Us About Your Project</h3>
                </div>
                <div className="input-textarea">
                    <div className="inputs">
                        <input type="text" placeholder='Name' className='input-name' />
                        <input type="text" placeholder='Phone Number' className='input-phone-number' />
                        <input type="text" placeholder='Email ID' className='input-email-id' />
                    </div>
                    <div className="textarea">
                        <textarea
                            placeholder="Project Detail"
                            className="textarea-message">
                        </textarea>
                    </div>
                </div>
                <p className="note"><span>Note: </span> Your idea is 100% protected by our non disclosure agreement.</p>
                <div className="submit-btn">
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
            <div className="second-container">
                <div className="second-container-heading">
                    <h3>Get In Touch With Us</h3>
                </div>
                <div className="contact-info">
                    <div className="contact-infomation">
                        <div className="contact-address">
                            <img src={Location} alt="location" />
                            <p>Address</p>
                        </div>
                        <div className="para">
                            <p>182 B, Golf Tower, Pitampura</p>
                            <p>New Delhi- 110034</p>
                        </div>
                    </div>
                    <div className="contact-infomation">
                        <div className="contact-call">
                            <img src={Call} alt="call" />
                            <p>Call Pinnate</p>
                        </div>
                        <div className="para">
                            <p>+91 9123456789</p>
                            <p>+91 9234567891</p>
                        </div>
                    </div>
                    <div className="contact-infomation">
                        <div className="contact-mail">
                            <img src={Mail} alt="mail" />
                            <p>Drop an Email</p>
                        </div>
                        <div className="para">
                            <p>Info@Pennate.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
