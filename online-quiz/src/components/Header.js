import React from 'react';

// Receives a navigation function as a prop to handle button clicks
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
      {/* Button uses the onNavigate prop to switch to the signup page */}
      <button className="nav-button" onClick={() => onNavigate('signup')}>Sign Up</button>
    </header>
  );
}

export default Header;