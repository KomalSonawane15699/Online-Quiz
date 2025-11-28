import React from 'react';

function SignupPage({ onLoginClick }) {
  const isTeacher = false; // State to toggle if the teacher view is needed

  return (
    <div className="auth-page full-height-page">
      <div className="auth-visual-panel">
        <h1 className="logo">Quizzy</h1>
      </div>
      <div className="auth-form-panel signup-panel">
        <div className="form-container">
          <h2>Create Account</h2>
          <p>Choose your account type and start your journey</p>

          {/* Account Type Selector */}
          <div className="account-type-selector">
            <div className="type-card selected">
              <span className="icon">🎓</span>
              <h4>Student</h4>
              <p>Take quizzes and track your progress</p>
            </div>
            {/* You'd have other types like 'Teacher' here */}
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <span className="icon">G</span> Google
            </button>
          </div>
          <div className="or-separator">OR</div>

          <form className="auth-form">
            <div className="input-group">
              <label htmlFor="fullname">Full Name</label>
              <div className="input-field">
                <span className="icon">👤</span>
                <input type="text" id="fullname" placeholder="John Doe" required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-field">
                <span className="icon">✉️</span>
                <input type="email" id="email" placeholder="name@example.com" required />
              </div>
            </div>

            {/* Username only if not Student/Teacher */}
            {isTeacher && (
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <div className="input-field">
                        <span className="icon">⚙️</span>
                        <input type="text" id="username" placeholder="johndoe" required />
                    </div>
                </div>
            )}

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-field">
                <span className="icon">🔒</span>
                <input type="password" id="password" placeholder="********" required />
              </div>
            </div>

            <button type="submit" className="btn-primary full-width">Sign Up</button>
          </form>

          <p className="auth-footer-text">
            Already have an account? <a href="#" onClick={onLoginClick}>Sign In</a>
          </p>
        </div>

        {/* Mock Dashboard Sidebar from the second image */}
        <div className="mock-dashboard-sidebar">
            <div className="sidebar-header">
                <span className="logo">P Quizzy</span>
                <input type="text" placeholder="Q Search" />
            </div>
            <nav className="sidebar-nav">
                <div className="nav-group">
                    <a href="#" className="nav-item selected"><span className="icon">🎛️</span> Dashboard</a>
                    <a href="#" className="nav-item"><span className="icon">🧠</span> Quizzes</a>
                    <a href="#" className="nav-item"><span className="icon">📅</span> Events</a>
                    <a href="#" className="nav-item"><span className="icon">🧑‍🎓</span> Students</a>
                </div>
                <div className="nav-group">
                    <h4>Manage</h4>
                    <a href="#" className="nav-item"><span className="icon">⚙️</span> Settings</a>
                </div>
            </nav>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;