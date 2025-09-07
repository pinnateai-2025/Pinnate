import { useNavigate } from "react-router-dom";
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import bgVideo from "../../assets/pinnate-background.mp4";
import logoIllust from "../../assets/logo-illust.png";

const Header = () => {

    const navigate = useNavigate();

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
                    <p className='mobile-view-p'>We bring expertise, innovation, and user-focused design to every project. Let us transform your online presence with intuitive website design that drive growth and engagement.</p>
                </div>
                <div className="btns">
                    <div className='let-connect'>
                        <button onClick={() => navigate("/contact")}>
                            Let's Connect
                        </button>
                    </div>
                    <div className='portfolio'>
                        <a href="https://www.thetablegem.com/" target="_blank">
                            <button>Portfolio</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='form-container'>
                <div className="form">
                    <input type="text" placeholder='Name' className='name' />
                    <input type="text" placeholder='Phone Number' className='phone-number' />
                    <input type="text" placeholder='Email ID' className='email-id' />
                    <textarea
                        placeholder="Project Detail"
                        className="message">
                    </textarea>
                    <p><span>Note: </span> Your idea is 100% protected by our non <br /> disclosure agreement.</p>
                    <p className='mobile-para'><span>Note: </span> Your idea is 100% protected by our non disclosure agreement.</p>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
