import { useNavigate } from "react-router-dom";
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import bgVideo from "../../assets/pinnate-background.mp4";
import logoIllust from "../../assets/logo-illust.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Header = () => {

    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_53shxhb",   // Service ID
                "template_96i4eji",  // Template ID
                form.current,
                "8D6AnpyRj5ss70uO7"    // Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Your message has been sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Something went wrong, please try again.");
                }
            );
    };

    return (
        <div className='header-container' id="home">

            <Navbar />

            <video className="video-bg" autoPlay muted loop playsInline>
                <source src={bgVideo} type="video/mp4" />
            </video>

            <div className="logo-illust">
                <img src={logoIllust} alt="logo-illust" />
            </div>

            <div className='info-container'>
                <div className="heading">
                    <h1>Design That <span>Empower</span> <br /> Real <span>Bussiness Growth</span></h1>
                    <h6>Your website is your first impression. We make sure it’s <br /> unforgettable, high-converting, and built to dominate.</h6>
                    <p className='heading-p'>We bring expertise, innovation, and user-focused design to every project. Let us transform your online <br /> presence with intuitive website design that drive growth and engagement.</p>
                    <p className='mobile-view-para'>We bring expertise, innovation, and user-focused design to every project. Let us transform your online presence with intuitive website design that drive growth and engagement.</p>
                </div>
                <div className="btns">
                    <div className='let-connect'>
                        <button onClick={() => navigate("/contact")}>
                            Let's Connect
                        </button>
                    </div>
                    <div className='portfolio'>
                        <a href="#portfolio">
                            <button>Portfolio</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='form-container'>
                <form ref={form} onSubmit={sendEmail} className="form">
                     <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className="name"
                        required
                    />
                    <input
                        type="text"
                        name="user_phone"
                        placeholder="Phone Number"
                        className="phone-number"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email ID"
                        className="email-id"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Project Detail"
                        className="message"
                        required
                    ></textarea>
                    
                    <p><span>Note: </span> Your idea is 100% protected by our non <br /> disclosure agreement.</p>
                    <p className='mobile-para'><span>Note: </span> Your idea is 100% protected by our non disclosure agreement.</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Header;
