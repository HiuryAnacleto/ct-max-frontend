import React, { useState, useEffect } from "react"
import Header from "../../components/Header/Header";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Home() {
    const [currentSection, setCurrentSection] = useState(0);
    const [fade, setFade] = useState(true);
    const [slideDirection, setSlideDirection] = useState('right');
    const [animating, setAnimating] = useState(false);

    const sections = [
        {
            title: "Bem-vindo ao CT Max Fight",
            description: "Somos um centro de treinamento especializado em artes marciais e condicionamento físico. Nossa missão é transformar vidas através do esporte, oferecendo treinamentos de alta qualidade e um ambiente acolhedor para todos os níveis.",
            image: "/imagem-treinamento.jpg"
        },
        {
            title: "Método F.I.G.H.T ",
            description: "O CT Max Fight nasceu da paixão por artes marciais e do desejo de criar um espaço onde todos possam desenvolver suas habilidades e melhorar sua qualidade de vida. Desde nossa fundação, temos ajudado centenas de alunos a alcançarem seus objetivos.",
            image: "/metodo-ct.jpg"
        },
        {
            title: "Nossas Modalidades",
            description: "Oferecemos uma variedade de modalidades para atender a todos os níveis e objetivos. Desde artes marciais tradicionais até treinamento funcional, temos o programa ideal para você.",
            image: "/modalidades-ct.jpg"
        },
        {
            title: "Muay-Thai Infantil",
            description: "Desenvolvemos um programa especializado para crianças, focando em valores como disciplina, respeito e autoconfiança. Nossas aulas de Muay-Thai infantil são adaptadas para cada faixa etária, promovendo o desenvolvimento físico e mental de forma segura e divertida. As crianças aprendem técnicas básicas, coordenação motora e valores importantes para a vida.",
            image: "/imagem-infantil.png"
        },
        {
            title: "Nosso Professor",
            description: "Nossa equipe é formada por profissionais altamente qualificados e experientes, comprometidos com o desenvolvimento de cada aluno.",
            image: "/professor-ct.png"
        }
    ];

    const handlePrevious = () => {
        setSlideDirection('left');
        setAnimating(true);
        setTimeout(() => {
            setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
            setAnimating(false);
        }, 400);
    };

    const handleNext = () => {
        setSlideDirection('right');
        setAnimating(true);
        setTimeout(() => {
            setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
            setAnimating(false);
        }, 400);
    };

    // Avanço automático do carrossel
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideDirection('right');
            setAnimating(true);
            setTimeout(() => {
                setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
                setAnimating(false);
            }, 400);
        }, 8000);
        return () => clearInterval(interval);
    }, [sections.length]);

    // --- MURAL ---
    const muralFotos = [
        {
            src: "/foto-mural1.jpg",
            data: "27/05/2024",
            dia: "Segunda-feira"
        },
        {
            src: "/foto-mural2.jpg",
            data: "28/05/2024",
            dia: "Terça-feira"
        },
        {
            src: "/foto-mural3.jpg",
            data: "29/05/2024",
            dia: "Quarta-feira"
        }
    ];
    const [muralIndex, setMuralIndex] = useState(0);
    const handleMuralPrev = () => setMuralIndex((prev) => prev === 0 ? muralFotos.length - 1 : prev - 1);
    const handleMuralNext = () => setMuralIndex((prev) => prev === muralFotos.length - 1 ? 0 : prev + 1);

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
                <div className={`content-section slide-${slideDirection}${animating ? ' sliding' : ''}`}>
                    <button className="nav-button" onClick={handlePrevious}>
                        <FaChevronLeft />
                    </button>
                    
                    <div className="text-content">
                        <h1 className="title">{sections[currentSection].title}</h1>
                        <p className="description">
                            {sections[currentSection].description}
                        </p>
                        
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

                <div className="schedule-container">
                    <div className="schedule-header">
                        <h2>Horarios das Aulas</h2>
                    </div>
                    <div className="schedule-grid">
                        <div className="schedule-day">
                            <h3>Segunda</h3>
                            <div className="time-slot">
                                <span className="time">18:30 hrs</span>
                                <span className="class-type">Muay-Thai</span>
                            </div>
                            <div className="time-slot">
                                <span className="time">19:30 hrs</span>
                                <span className="class-type">Muay-Thai</span>
                            </div>
                        </div>

                        <div className="schedule-day">
                            <h3>Terça</h3>
                            <div className="time-slot">
                                <span className="time">10:00 hrs</span>
                                <span className="class-type kickboxing">Kickboxing</span>
                            </div>
                            <div className="time-slot">
                                <span className="time">16:00 hrs</span>
                                <span className="class-type kickboxing">Kickboxing</span>
                            </div>
                            <div className="time-slot infantil">
                                <span className="infantil-label">Infantil</span>
                                <span className="time infantil-label">18:30 hrs</span>
                                <span className="class-type infantil-label">Muay-Thai</span>
                            </div>
                            <div className="time-slot">
                                <span className="time">19:30 hrs</span>
                                <span className="class-type">Muay-Thai</span>
                            </div>
                        </div>

                        <div className="schedule-day">
                            <h3>Quarta</h3>
                            <div className="time-slot">
                                <span className="time">18:30 hrs</span>
                                <span className="class-type"> Muay-Thai</span>
                            </div>
                            <div className="time-slot">
                                <span className="time">19:30 hrs</span>
                                <span className="class-type">Muay-Thai</span>
                            </div>
                        </div>

                        <div className="schedule-day">
                            <h3>Quinta</h3>
                            <div className="time-slot">
                                <span className="time">10:00 hrs</span>
                                <span className="class-type kickboxing">Kickboxing</span>
                            </div>
                            <div className="time-slot">
                                <span className="time">16:00 hrs</span>
                                <span className="class-type kickboxing">Kickboxing</span>
                            </div>
                            <div className="time-slot infantil">
                                <span className="infantil-label">Infantil</span>
                                <span className="time infantil-label">18:30 hrs</span>
                                <span className="class-type infantil-label">Muay-Thai</span>
                            </div>
                            <div className="time-slot">
                                <span className="time">19:30 hrs</span>
                                <span className="class-type">Muay-Thai</span>
                            </div>
                        </div>

                        <div className="schedule-day">
                            <h3>Sexta</h3>
                            <div className="time-slot">
                                <span className="time">18:30</span>
                                <span className="class-type">Muay-Thai</span>
                            </div>
                            <div className="time-slot">
                                <span className="time">19:30</span>
                                <span className="class-type">Muay-Thai</span>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-cta">
                        <button>
                            Clique abaixo e agende a sua aula experimental!
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;