import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGlobe, FaYoutube, FaWhatsapp } from 'react-icons/fa';
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
                    <li><a href="sobre">Sobre</a></li>
                    <li><a href="aula-experimental">Aula experimental</a></li>
                    <li><a href="seja-aluno">Seja Aluno</a></li>
                    <li><a href="consultoria">Consultoria</a></li>
                </ul>
            </nav>
            <div className="header-right">
                <div className="social-icons">
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
                <div className="text-box">
                    <a href="http://localhost:3000/login" className="btn btn-white btn-animate"><strong>Login</strong></a>
                </div>
            </div>
        </header>
    );
};

export default Header;