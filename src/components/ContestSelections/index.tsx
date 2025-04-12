import React, { useState } from 'react';
import './ContestSelections.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ContestSelections = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const options = [
        {
            title: "Opção 1",
            description: "Descrição da primeira opção"
        },
        {
            title: "Opção 2",
            description: "Descrição da segunda opção"
        },
        {
            title: "Opção 3",
            description: "Descrição da terceira opção"
        },
        {
            title: "Opção 4",
            description: "Descrição da quarta opção"
        }
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? options.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === options.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="contest-selections">
            <div className="selection-container">
                <button className="nav-button" onClick={handlePrevious}>
                    <FaChevronLeft />
                </button>
                
                <div className="selection-content">
                    <h3>{options[currentIndex].title}</h3>
                    <p>{options[currentIndex].description}</p>
                </div>
                
                <button className="nav-button" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default ContestSelections; 