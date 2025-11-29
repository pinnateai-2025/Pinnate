import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import companyLogo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const navigate = useNavigate();

    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Handle sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                !event.target.closest(".mobile-menu") &&
                !event.target.closest(".hamburger")
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    return (
        <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
            {/* Logo */}
            <div className="company-logo">
                <img
                    src={companyLogo}
                    alt="company-logo"
                    onClick={() => navigate("/")}
                />
            </div>

            {/* Desktop Navbar */}
            <nav className="navbar">
                <ul>
                    <li><a href="#home" onClick={() => navigate("/")}>Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;