import "./About.css";
import AboutUs from "../../assets/about-us.png";

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="about-heading">
                <h1>About <span>Us</span></h1>
            </div>
            <div className="about-us">
                <div className="about-us-img">
                    <img src={AboutUs} alt="about-us" />
                </div>
                <div className="about-us-info">
                    <p>
                        At Pinnate, we believe technology and creativity go hand in hand. We are a full-service digital solutions company dedicated to building meaningful digital experiences that help businesses grow, adapt, and thrive in today’s fast-changing world.
                    </p>
                    <p>
                        Our approach is holistic and collaborative—we don’t just deliver services, we partner with you to understand your goals, challenges, and vision. From designing stunning websites and user-centric apps to developing intelligent AI-driven solutions, we ensure that every project reflects innovation, efficiency, and long-term value.
                    </p>
                    <p>
                        With a team of skilled developers, designers, and strategists, Pinnate blends technology, design, and strategy into tailor-made solutions that drive measurable impact. Whether you’re a startup looking to establish your presence or an enterprise aiming to scale, we provide the expertise and support you need to succeed.
                    </p>
                    <p><strong>
                        At Pinnate, our mission is simple: to turn ideas into digital realities that inspire, engage, and deliver results.
                    </strong></p>
                </div>
            </div>
        </div>
    )
}

export default About;
