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
                            We’re a full-service digital marketing agency
                            that hustles hard to makes users happy while
                            infusing everything we do with the heart.
                        </p>
                    </div>
                </div>
                <div className="we-work">
                    <img src={WeDevelop} alt="We-Develop" className="we-develop-img" />
                    <div className="we-work-info">
                        <h6>We Develop</h6>
                        <p>
                            We see beyond the insights and take you to
                            the eye stand.
                        </p>
                    </div>
                </div>
                <div className="we-work">
                    <img src={WeDeliver} alt="We-Deliver" className="we-deliver-img" />
                    <div className="we-work-info">
                        <h6>We Deliver</h6>
                        <p>
                            As a multifaceted digital marketing agency,
                            we craft beautiful solutions that outdo
                            business goals and garner recognition.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTogether;
