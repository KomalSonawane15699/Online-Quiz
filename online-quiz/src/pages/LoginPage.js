import React from 'react';
import AuthModal from '../components/AuthModal';

function LoginPage({ onSignupClick, onNavigate }) {
  return (
    <AuthModal 
        title="Sign in"
        onNavigate={onNavigate}
    >
        <form className="auth-form-modal">
            
            <div className="input-group">
                <input type="email" id="email" placeholder="Email" required />
            </div>

            <button type="submit" className="btn-primary full-width modal-continue-btn">Continue</button>
            
            <a href="#" className="forgot-link">Can't sign in?</a>
        </form>

        <div className="social-login-modal">
            <button className="social-btn google full-width">
                <span className="icon">G</span> Sign in with Google
            </button>
            <button className="social-btn facebook full-width">
                <span className="icon">f</span> Sign in with Facebook
            </button>
            <button className="social-btn apple full-width">
                <span className="icon"></span> Sign in with Apple
            </button>
            {/* Removed: Sign in with Single Sign-On */}
        </div>
        
        <p className="modal-footer-terms">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
    </AuthModal>
  );
}

export default LoginPage;