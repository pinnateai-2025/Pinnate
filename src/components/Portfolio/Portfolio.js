import "./Portfolio.css";
import img1 from "../../assets/portfolio-img1.png";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";
import img4 from "../../assets/portfolio-img4.png";
import img5 from "../../assets/portfolio-img5.png";
import img6 from "../../assets/portfolio-img6.png";
import img7 from "../../assets/portfolio-img7.png";
import img8 from "../../assets/portfolio-img8.png";

const Portfolio = () => {
    return (
        <div className="portfolio-container" id="portfolio">
            <div className="portfolio-heading">
                <h1>Port<span>folio</span></h1>
            </div>
            <div className="portfolio-details">
                <div className="portfolio">
                    <img src={img1} alt="portfolio-img1" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={img2} alt="portfolio-img2" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={img3} alt="portfolio-img3" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={img4} alt="portfolio-img4" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={img5} alt="portfolio-img5" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={img6} alt="portfolio-img6" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={img7} alt="portfolio-img7" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={img8} alt="portfolio-img8" />
                    <div className="portfolio-text">
                        <h6>Encoto Pvt Ltd</h6>
                        <p>Lorem ipsum dolor sit amet. Sed molestias dolor sit inventore galisum et asperiores incidunt eum  sanfa csader quidem.nostrum. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
