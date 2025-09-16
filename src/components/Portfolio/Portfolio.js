import "./Portfolio.css";
import TableGem from "../../assets/portfolio-table-gem.PNG";
import VirtuTeams from "../../assets/portfolio-virtu-teams.jpg";

const Portfolio = () => {
    return (
        <div className="portfolio-container" id="portfolio">
            <div className="portfolio-heading">
                <h1>Port<span>folio</span></h1>
            </div>
            <div className="portfolio-details">
                <div className="portfolio">
                    <img src={TableGem} alt="Table-Gem" />
                    <div className="portfolio-text">
                        <h6>The Table Gem</h6>
                        <p>
                            Table Gem is an e-commerce platform designed for modern living, offering a curated
                            collection of drinkware, serveware, home decor, etc. The website delivers a seamless
                            shopping experience with a clean, responsive design and intuitive navigation, making
                            it easy for customers to discover and purchase products that bring elegance and style
                            into their homes.
                        </p>
                    </div>
                </div>
                <div className="portfolio">
                    <img src={VirtuTeams} alt="Virtu-Teams" />
                    <div className="portfolio-text">
                        <h6>Virtu Teams</h6>
                        <p>
                            Virtuteams Marketing delivers tailored digital marketing solutions designed to elevate
                            businesses in today’s competitive landscape. Their services combine strategic content,
                            data-driven campaigns, and strong creative design to help brands reach the right audience
                            and build lasting connections. With a focus on measurable outcomes and modern aesthetics,
                            the site reflects professionalism, clarity, and innovation—qualities I draw inspiration
                            from in my own work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
