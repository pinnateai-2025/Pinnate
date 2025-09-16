import "./Testimonials.css";
import virtue from "../../assets/testimonials-img.jpg";
import tablegem from "../../assets/testimonials-img-table-gem.jpeg";

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="testimonials-heading">
                <h1>Testim<span>on</span>ials</h1>
            </div>
            <div className="testimonials-inner-container">
                <div className="testimonials">
                    <p>
                        Working with Pinnate was a game-changer for my e-commerce journey. The team understood my vision perfectly and delivered a sleek, user-friendly website that my customers love. From design to functionality, everything exceeded my expectations. I’ve seen a significant boost in customer engagement and sales since launch.
                    </p>
                    <div className="testimonials-img">
                        <img src={tablegem} alt="testimonials-img-table-gem" />
                        <div className="testimonials-info">
                            <h6>Shahinda Abid</h6>
                            <p>Founder, The Table Gem</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <p>
                       Pinnate brought our ideas to life with precision and creativity. Their ability to blend strategy, design, and technology helped us launch a platform that truly reflects our brand’s professionalism. The team was highly collaborative, responsive, and dedicated to delivering excellence at every stage.
                    </p>
                    <div className="testimonials-img">
                        <img src={virtue} alt="testimonials-img-virtue" />
                        <div className="testimonials-info">
                            <h6>Vedang Aryaa</h6>
                            <p>Marketing Head, VirtuTeams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
