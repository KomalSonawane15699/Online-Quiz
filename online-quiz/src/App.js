import React, { useState } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import LoginPage from './pages/loginPage/LoginPage';
import SignupPage from './pages/signupPage/SignupPage';
import './App.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); 
  const navigate = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        // Renders Login Page as a modal over the Landing page content
        return (
            <>
                <LandingPage onNavigate={navigate} />
                <LoginPage onSignupClick={() => navigate('signup')} onNavigate={navigate} />
            </>
        );
      case 'signup':
        // Renders Signup Page as a modal over the Landing page content
        return (
            <>
                <LandingPage onNavigate={navigate} />
                <SignupPage onLoginClick={() => navigate('login')} onNavigate={navigate} />
            </>
        );
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
