import "./Choose.css";
import BestQuality from "../../assets/best-quality.png";
import Experience from "../../assets/experience.png";
import Copyright from "../../assets/copyrights.png";
import Communication from "../../assets/communication.png";
import Guaranteed from "../../assets/guaranteed.png";

const Choose = () => {
    return (
        <div className="choose-container">
            <div className="choose-heading">
                <h1><span>Why</span> Choose Us <span>?</span></h1>
            </div>
            <div className="choose-us">
                <div className="why-choose-us">
                    <img src={BestQuality} alt="BestQuality" />
                    <div className="why-choose">
                        <h6>Best Quality</h6>
                        <p>With native technologies</p>
                    </div>
                </div>
                <div className="why-choose-us">
                    <img src={Experience} alt="Experience" />
                    <div className="why-choose">
                        <h6>"8+" Years of</h6>
                        <p>IT Experience</p>
                    </div>
                </div>
                <div className="why-choose-us">
                    <img src={Copyright} alt="Copyright" />
                    <div className="why-choose">
                        <h6>Copyrights & IPR</h6>
                        <p>Complete source code</p>
                    </div>
                </div>
                <div className="why-choose-us">
                    <img src={Communication} alt="Communication" />
                    <div className="why-choose">
                        <h6>1 to 1 Communication</h6>
                        <p>Keep you on track</p>
                    </div>
                </div>
                <div className="why-choose-us">
                    <img src={Guaranteed} alt="Guaranteed" />
                    <div className="why-choose">
                        <h6>Guaranteed</h6>
                        <p>Project Delivery on Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose;
