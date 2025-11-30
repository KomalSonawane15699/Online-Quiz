import React from 'react';

function Header({ onNavigate }) {
  return (
    <header className="landing-header">
      <div className="logo">Quizzy</div>
      <nav>
        <a href="#quiz">Quiz</a>
        <a href="#weekly">Weekly Quiz</a>
        <a href="#rewards">Rewards</a>
        <a href="#about">About</a>
      </nav>
      {/* Buttons navigate to the modal views on the top right */}
      <div>
        <button className="nav-button btn-secondary" onClick={() => onNavigate('login')}>Sign In</button>
        <button className="nav-button btn-primary" onClick={() => onNavigate('signup')}>Register</button>
      </div>
    </header>
  );
}

export default Header;