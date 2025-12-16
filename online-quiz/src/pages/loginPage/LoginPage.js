import React from "react";
import AuthModal from "../../components/AuthModal/AuthModal";
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';


function LoginPage({ onSignupClick, onNavigate }) {
    const navigate = useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();
    navigate('/dashboard'); // Navigates to the Dashboard page
  };
  return (
    <AuthModal title="Sign in" onNavigate={onNavigate}>
      <div className="card">
        <h2 className="card-title-ug">Welcome back</h2>
        <p className="subtitle">
          Enter your credentials to access your account
        </p>
<form className="auth-form-modal" onSubmit={handleLogin}>
  <div className="input-group">
    <input type="email" id="email" placeholder="Email" required />
  </div>

  <div className="input-group">
    <input type="password" id="password" placeholder="Password" required />
  </div>

  <button
    type="submit"
    className="btn-primary full-width modal-continue-btn"
  >
    Sign In
  </button>

  <a href="#" className="forgot-link">
    Can't sign in?
  </a>
</form>
        <p className="modal-footer-terms">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </AuthModal>
  );
}

export default LoginPage;
