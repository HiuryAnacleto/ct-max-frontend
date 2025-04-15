import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';

const Cadastro: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    celular: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    email: '',
    senha: '',
    repetirSenha: ''
  });

  const steps = [
    { number: 1, label: 'Dados Pessoais' },
    { number: 2, label: 'Endereço' },
    { number: 3, label: 'Dados de Acesso' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Aqui você pode adicionar a lógica para enviar os dados
      console.log(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderProgressSteps = () => {
    return (
      <div className="progress-steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className={`step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
              {step.number}
              <span className="step-label">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`step-connector ${currentStep > step.number ? 'active' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="celular">Celular</label>
              <input
                type="tel"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rua">Rua</label>
              <input
                type="text"
                id="rua"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="complemento">Complemento</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="repetirSenha">Repetir Senha</label>
              <input
                type="password"
                id="repetirSenha"
                name="repetirSenha"
                value={formData.repetirSenha}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-section">
        {renderProgressSteps()}
        <form className="cadastro-form" onSubmit={handleSubmit}>
          {renderStep()}
          
          <div className="form-actions">
            {currentStep > 1 && (
              <button
                type="button"
                className="cadastro-button back-button"
                onClick={handleBack}
              >
                Voltar
              </button>
            )}
            <button type="submit" className="cadastro-button">
              {currentStep === 3 ? 'Finalizar Cadastro' : 'Próxima Etapa'}
            </button>
          </div>

          <div className="login-link">
            <p>
              Já tem uma conta?{' '}
              <Link to="/login">Faça login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
