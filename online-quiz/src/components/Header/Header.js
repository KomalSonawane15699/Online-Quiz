import React, { useState } from 'react';
import './Header.css';
import SignupPage from '../../pages/signupPage/SignupPage';
import LoginPage from '../../pages/loginPage/LoginPage';

function Header({ onSignupClick, onLoginClick }) {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSignupClick = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const handleCloseModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(false);
  };

  return (
    <header className="landing-header">
      <div className="logo">Quizzy</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#subjects">Subjects</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
        <button className="btn-primary nav-button" onClick={handleLoginClick}>Sign In</button>
        <button className="btn-secondary nav-button" onClick={handleSignupClick}>Sign Up</button>
      </nav>
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <SignupPage onSignupClick={onSignupClick} onLoginClick={onLoginClick}  onNavigate={handleCloseModal} />
          </div>
        </div>
      )}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <LoginPage onSignupClick={onSignupClick} onLoginClick={onLoginClick} onNavigate={handleCloseModal} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;