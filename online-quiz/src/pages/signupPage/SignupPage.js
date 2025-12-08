import React from 'react';
import AuthModal from '../../components/AuthModal/AuthModal';
import './SignUpPage.css';

function SignupPage({ onLoginClick, onNavigate }) {
  const handleSignup =(e)=>{
    e.preventDefault();
    onNavigate("dashboard");
  }
  // The Signup page will use the AuthModal wrapper for centering
  return (
    <AuthModal 
        title="Create Account"
        onNavigate={onNavigate}
    >    
            <div className="card">
          <h2 className="card-title-bg">Create Account</h2>
          <p className="subtitle">Choose your account type and start your journey with us</p>    
          <div className="account-types">
            <button className="type student active">
              <div className="icon">🎓</div>
              <div className="label">Student</div>
              <div className="meta">Take quizzes and track your progress</div>
            </button>

            <button className="type teacher">
              <div className="icon">👩‍🏫</div>
              <div className="label">Teacher</div>
              <div className="meta">Create quizzes and manage students</div>
            </button>
          </div>

          <form className="form" onSubmit={handleSignup}>
            <div className="row">
              <input placeholder="Full Name" />
              <input placeholder="Username" />
            </div>

            <input className="wide" placeholder="name@example.com" />
            <input className="wide" placeholder="Password" type="password" />

            <button type="submit" className="btn-primary-signup">Sign Up</button>
          </form>

        <p className="modal-footer-terms">
            Already have an account? <a href="#" onClick={onLoginClick}>Sign In</a>
        </p>
        </div>
    </AuthModal>
  );
}

export default SignupPage;