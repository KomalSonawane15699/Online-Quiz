import React from 'react';
import AuthModal from '../components/AuthModal';

function SignupPage({ onLoginClick, onNavigate }) {
  // The Signup page will use the AuthModal wrapper for centering
  return (
    <AuthModal 
        title="Create Account"
        onNavigate={onNavigate}
    >
        <div className="social-login-modal">
            {/* ... Social login buttons ... */}
            <button className="social-btn google full-width">
                <span className="icon">G</span> Sign up with Google
            </button>
            <div className="or-separator">OR</div>
        </div>

        <form className="auth-form-modal">
            <div className="input-group">
                <input type="text" id="fullname" placeholder="Full Name" required />
            </div>
            <div className="input-group">
                <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="input-group">
                <input type="password" id="password" placeholder="Password" required />
            </div>

            <button type="submit" className="btn-primary full-width modal-continue-btn">Create Account</button>
        </form>

        <p className="modal-footer-terms">
            Already have an account? <a href="#" onClick={onLoginClick}>Sign In</a>
        </p>
    </AuthModal>
  );
}

export default SignupPage;