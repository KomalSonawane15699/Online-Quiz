import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; // Corrected capitalization
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'login', 'signup'

  const navigate = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onSignupClick={() => navigate('signup')} />;
      case 'signup':
        return <SignupPage onLoginClick={() => navigate('login')} />;
      case 'landing':
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;