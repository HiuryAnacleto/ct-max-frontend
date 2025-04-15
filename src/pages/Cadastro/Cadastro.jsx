import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaBuilding, FaTimes } from 'react-icons/fa';

const Cadastro = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    empresa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-section">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          // ... existing code ...
        </form>
      </div>
    </div>
  );
};

export default Cadastro; 