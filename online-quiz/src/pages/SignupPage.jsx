import React from "react";
import "./SignupPage.css";

export default function SignupPage() {
  return (
    <div className="signup-root">
      <div className="left-side">
        <h1 className="brand">Quizzy</h1>
      </div>

      <div className="right-side">
        <div className="card">
          <h2 className="card-title">Create Account</h2>
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

          {/* <div className="social-row">
            <button className="social google">Google</button>
            <button className="social facebook">Facebook</button>
          </div>

          <div className="or">OR</div> */}

          <form className="form">
            <div className="row">
              <input placeholder="Full Name" />
              <input placeholder="Username" />
            </div>

            <input className="wide" placeholder="name@example.com" />
            <input className="wide" placeholder="Password" type="password" />

            <button type="submit" className="btn-primary">Sign Up</button>
          </form>

          <p className="signin">
            Already have an account? <a href="#">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

