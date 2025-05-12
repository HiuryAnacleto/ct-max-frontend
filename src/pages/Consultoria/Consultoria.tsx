import React from "react";
import "./Consultoria.css";

function Consultoria() {
    return (
        <div className="consultoria-container" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/imagem-fundo-consultoria.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }}>
            <div className="consultoria-section">
                <h1 className="consultoria-title">Consultoria de Aulas</h1>
                
                <div className="consultoria-content">
                    <div className="consultoria-card">
                        <h2>Aulas Privadas</h2>
                        <p>Treinamento personalizado focado em seus objetivos específicos:</p>
                        <ul>
                            <li>Desenvolvimento técnico individual</li>
                            <li>Preparação física personalizada</li>
                            <li>Horários flexíveis</li>
                            <li>Foco total do professor</li>
                        </ul>
                        <button className="saiba-mais-btn">Saiba Mais</button>
                    </div>

                    <div className="consultoria-card">
                        <h2>Aulas em Duplas</h2>
                        <p>Treinamento compartilhado com benefícios exclusivos:</p>
                        <ul>
                            <li>Preço mais acessível</li>
                            <li>Treino com parceiro</li>
                            <li>Desenvolvimento técnico em dupla</li>
                            <li>Horários flexíveis</li>
                        </ul>
                        <button className="saiba-mais-btn">Saiba Mais</button>
                    </div>
                </div>

                <div className="consultoria-info">
                    <h2>Nossos Objetivos</h2>
                    <div className="objetivos-grid">
                        <div className="objetivo-item">
                            <h3>Desenvolvimento Técnico</h3>
                            <p>Aprimoramento das técnicas específicas de cada modalidade</p>
                        </div>
                        <div className="objetivo-item">
                            <h3>Condicionamento Físico</h3>
                            <p>Melhoria da performance e saúde através de treinos personalizados</p>
                        </div>
                        <div className="objetivo-item">
                            <h3>Preparação para Competições</h3>
                            <p>Treinamento especializado para atletas competitivos</p>
                        </div>
                        <div className="objetivo-item">
                            <h3>Bem-estar</h3>
                            <p>Promoção da saúde física e mental através do esporte</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consultoria;