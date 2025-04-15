import React, { useState } from "react"
import Header from "../../components/Header/Header";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Home() {
    const [currentSection, setCurrentSection] = useState(0);

    const sections = [
        {
            title: "Bem-vindo ao CT Max Fight",
            description: "Somos um centro de treinamento especializado em artes marciais e condicionamento físico. Nossa missão é transformar vidas através do esporte, oferecendo treinamentos de alta qualidade e um ambiente acolhedor para todos os níveis.",
            image: "/imagem-treinamento.jpg"
        },
        {
            title: "Nossa História",
            description: "O CT Max Fight nasceu da paixão por artes marciais e do desejo de criar um espaço onde todos possam desenvolver suas habilidades e melhorar sua qualidade de vida. Desde nossa fundação, temos ajudado centenas de alunos a alcançarem seus objetivos.",
            image: "/historia-ct.jpg"
        },
        {
            title: "Nossas Modalidades",
            description: "Oferecemos uma variedade de modalidades para atender a todos os níveis e objetivos. Desde artes marciais tradicionais até treinamento funcional, temos o programa ideal para você.",
            image: "/modalidades-ct.jpg"
        },
        {
            title: "Nossa Estrutura",
            description: "Contamos com uma estrutura moderna e completa, equipada com os melhores materiais para garantir a qualidade do seu treinamento. Nossas instalações foram projetadas para proporcionar conforto e segurança.",
            image: "/estrutura-ct.jpg"
        },
        {
            title: "Nossos Professores",
            description: "Nossa equipe é formada por profissionais altamente qualificados e experientes, comprometidos com o desenvolvimento de cada aluno. Todos os nossos instrutores possuem certificações reconhecidas internacionalmente.",
            image: "/professores-ct.jpg"
        }
    ];

    const handlePrevious = () => {
        setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/Imagem-fundo.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1
            }} />
            <div style={{
                position: 'relative',
                zIndex: 1
            }}>
                <Header/>
                <div className="content-section">
                    <button className="nav-button" onClick={handlePrevious}>
                        <FaChevronLeft />
                    </button>
                    
                    <div className="text-content">
                        <h1 className="title">{sections[currentSection].title}</h1>
                        <p className="description">
                            {sections[currentSection].description}
                        </p>
                        <a href="#" className="cta-button">Agende uma aula experimental</a>
                    </div>
                    
                    <div className="image-content">
                        <img 
                            src={sections[currentSection].image} 
                            alt="Conteúdo" 
                            className="featured-image"
                        />
                    </div>

                    <button className="nav-button" onClick={handleNext}>
                        <FaChevronRight />
                    </button>
                </div>
                
                <div className="small-boxes-container">
                    <div className="small-box">
                        <h3>Artes Marciais</h3>
                        <p>Treinamentos especializados em diversas modalidades de artes marciais para todos os níveis.</p>
                    </div>
                    <div className="small-box">
                        <h3>Condicionamento Físico</h3>
                        <p>Programas de treinamento personalizados para melhorar sua performance e saúde.</p>
                    </div>
                    <div className="small-box">
                        <h3>Professores Qualificados</h3>
                        <p>Equipe de profissionais experientes e dedicados ao seu desenvolvimento.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;