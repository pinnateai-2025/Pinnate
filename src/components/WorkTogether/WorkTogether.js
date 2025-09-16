import "./WorkTogether.css";
import WeDiscuss from "../../assets/we-discuss.png";
import WeDiscuss1 from "../../assets/we-discuss1.png";
import WeDevelop from "../../assets/we-develop.png";
import WeDeliver from "../../assets/we-deliver.png";

const WorkTogether = () => {
    return (
        <div className="worktogether-container">
            <div className="worktogether-heading">
                <h1>Let's <span>Work</span> Together</h1>
            </div>
            <div className="worktogether-second-heading">
                <p className="desktop-view-p">
                    We’re passionate about brilliant ideas and the execution that brings it all together in one <br />
                    beautiful experience. If you are too, call or send us an email to get started.
                </p>
                <p className="mobile-view-p">
                    We’re passionate about brilliant ideas and the execution that brings it all together in one
                    beautiful experience. If you are too, call or send us an email to get started.
                </p>
            </div>
            <div className="work-together">
                <div className="we-work">
                    <div className="we-discuss-img">
                        <img src={WeDiscuss} alt="We-Discuss" className="we-discuss-img" />
                        <img src={WeDiscuss1} alt="We-Discuss" className="we-discuss1-img" />
                    </div>
                    <div className="we-work-info">
                        <h6>We Discuss</h6>
                        <p>
                            We’re a full-service digital solutions agency that listens, understands, and collaborates closely with you. Every project begins with meaningful discussions to uncover insights, align goals, and shape strategies that truly connect with your audience.
                        </p>
                    </div>
                </div>
                <div className="we-work">
                    <img src={WeDevelop} alt="We-Develop" className="we-develop-img" />
                    <div className="we-work-info">
                        <h6>We Develop</h6>
                        <p>
                            We go beyond ideas—we turn them into reality. With a blend of creativity, technology, and innovation, we design and develop solutions that are not only functional but also future-ready.
                        </p>
                    </div>
                </div>
                <div className="we-work">
                    <img src={WeDeliver} alt="We-Deliver" className="we-deliver-img" />
                    <div className="we-work-info">
                        <h6>We Deliver</h6>
                        <p>
                            We believe in delivering more than just projects—we deliver results. Our solutions are crafted to exceed business goals, create lasting impact, and build recognition for your brand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTogether;
