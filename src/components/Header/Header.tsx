import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGlobe, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToContent = () => {
        const contentSection = document.querySelector('.content-section');
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSchedule = () => {
        const scheduleContainer = document.querySelector('.schedule-container');
        if (scheduleContainer) {
            scheduleContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-left">
                <img src="/logo-ct-max.jpg" alt="Logo" className="logo"/>
                <div className="text-container">
                    <h1 className="logo-text">Max <span className="logo-text-bold">Fight</span></h1>
                    <h2 className="sub-logo">Centro de treinamento</h2>
                </div>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><a href="#" onClick={scrollToContent}>Sobre</a></li>
                    <li><a href="#" onClick={scrollToSchedule}>Aula experimental</a></li>
                    <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Seja Aluno</a></li>
                    <li><Link to="/consultoria">Consultoria</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                <div className="header-icons">
                    <a href="https://www.instagram.com/ctmax.fight/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://ctmaxacademia.com.br/" target="_blank" rel="noopener noreferrer">
                        <FaGlobe className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@ctmaxacademia" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="social-icon" />
                    </a>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="social-icon" />
                    </a>
                </div>
                <div className="header-login">
                    <Link to="/login" className="btn btn-white btn-animate"><strong>Login</strong></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;