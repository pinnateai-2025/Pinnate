import "./About.css";
import AboutUs from "../../assets/about-us.png";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-heading">
                <h1>About <span>Us</span></h1>
            </div>
            <div className="about-us">
                <div className="about-us-img">
                    <img src={AboutUs} alt="about-us" />
                </div>
                <div className="about-us-info">
                    <p>
                        We are a multinational creative company that combines design expertise with technology and intelligence to revolutionize
                        your business. Our team is a powerhouse of logical thinking, creative minds, and problem-solving skills. Since 2015, we have
                        added skilful, experienced, tech-savvy, enthusiastic experts and professionals who strengthens our family. Who are
                        committed to providing the most appropriate solutions, consultation, and results according to industry standards so our clients can achieve their set goals.
                    </p>
                    <p>
                        Right from hearing your ideas and putting it into a product canvas, as well as establishing the presence of the product
                        globally we design your websites and applications for android and iOS effectively by working closely with project stakeholders
                        and clients. We provide various services under one roof.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
