import React from "react";
import { FaInstagram, FaGlobe, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src="/logo-ct-max.jpg" alt="Logo CT Max" className="logo-principal" />
                    </div>
                    <div className="about-section">
                        <h3>Sobre o CT Max</h3>
                        <p>Centro de treinamento especializado em artes marciais e condicionamento físico, 
                           oferecendo excelência em treinamento e desenvolvimento pessoal.</p>
                    </div>
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
                </div>
                
                <div className="footer-right">
                    <h3>Localização</h3>
                    <p>R.Monsenhor Gercino 608 Itaum</p>
                    <p>Santa Catarina  - SC</p>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.0428953312044!2d-48.84178462370593!3d-26.325110468910644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb10285c4ec9d%3A0x1f79e47eff573da1!2sR.%20Monsenhor%20Gercino%2C%20608%20-%20Itaum%2C%20Joinville%20-%20SC%2C%2089210-145!5e0!3m2!1spt-BR!2sbr!4v1744497461939!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
