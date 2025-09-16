import "./FAQ's.css";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Bg from "../../assets/faq-bg.png";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Why should I choose Pinnate over other agencies?",
            answer: "Because we go beyond just delivering projects—we become your digital partner. With a focus on innovation, collaboration, and measurable results, Pinnate ensures your business is future-ready.",
        },
        {
            question: "Do you only work with large businesses or also with startups?",
            answer: "We work with businesses of all sizes. Whether you’re a startup looking to build your first digital presence or an enterprise seeking to scale, our solutions are tailored to fit your goals.",
        },
        {
            question: "How long does it take to build a website or app?",
            answer: "Project timelines depend on complexity and requirements. A standard website can take 3–6 weeks, while larger projects like apps or enterprise solutions may take 2–4 months. We provide clear timelines after understanding your needs.",
        },
        {
            question: "Can you integrate AI into my business processes?",
            answer: "Absolutely. We specialize in AI Solutions & Automation, including smart chatbots, predictive analytics, and workflow automation to improve efficiency, customer engagement, and decision-making.",
        },
        {
            question: "How much does a project cost?",
            answer: "Costs vary depending on the scope and complexity of the project. We create customized proposals based on your requirements, ensuring transparency and value for your investment.",
        },
        {
            question: "How do you ensure my project stands out?",
            answer: "Our approach combines strategy, creativity, and technology. We don’t use cookie-cutter templates—instead, we create bespoke solutions that align with your brand identity and business objectives.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <img src={Bg} alt="faq background glow" className="faq-bg" />
            <div className="faq-heading">
                <h1>
                    FAQ<span>'s</span>
                </h1>
            </div>

            <div className="faq-inner-container">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`faq ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <h3>{item.question}</h3>
                            {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                        </div>
                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: activeIndex === index ? "200px" : "0px",
                            }}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
