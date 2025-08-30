import "./FAQ's.css";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Bg from "../../assets/faq-bg.png";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What makes “Pinnate” different from agencies or freelancers?",
            answer: "We’re not just another agency – We’re India’s #1 website design & development powerhouse. Unlike agencies that charge high fees with slow turnaround times or freelancers who may lack reliability, we offer high-quality, fast, and scalable solutions with dedicated support.",
        },
        {
            question: "What makes “Pinnate” different from agencies or freelancers?",
            answer: "We’re not just another agency – We’re India’s #1 website design & development powerhouse. Unlike agencies that charge high fees with slow turnaround times or freelancers who may lack reliability, we offer high-quality, fast, and scalable solutions with dedicated support.",
        },
        {
            question: "What makes “Pinnate” different from agencies or freelancers?",
            answer: "We’re not just another agency – We’re India’s #1 website design & development powerhouse. Unlike agencies that charge high fees with slow turnaround times or freelancers who may lack reliability, we offer high-quality, fast, and scalable solutions with dedicated support.",
        },
        {
            question: "What makes “Pinnate” different from agencies or freelancers?",
            answer: "We’re not just another agency – We’re India’s #1 website design & development powerhouse. Unlike agencies that charge high fees with slow turnaround times or freelancers who may lack reliability, we offer high-quality, fast, and scalable solutions with dedicated support.",
        },
        {
            question: "What makes “Pinnate” different from agencies or freelancers?",
            answer: "We’re not just another agency – We’re India’s #1 website design & development powerhouse. Unlike agencies that charge high fees with slow turnaround times or freelancers who may lack reliability, we offer high-quality, fast, and scalable solutions with dedicated support.",
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
