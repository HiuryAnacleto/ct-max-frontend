// Login.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de autenticação
        console.log('Login attempt:', { email, password, rememberMe });
    };

    return (
        <div className="login-container">
            <div className="login-section">
                <h1 style={{ color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="remember-forgot">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="remember">Lembrar-me</label>
                        </div>
                        <Link to="/recuperar-senha" className="forgot-password">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>
                <div className="register-link">
                    <p>
                        Não tem uma conta?{' '}
                        <Link to="/cadastro">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
  