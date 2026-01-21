import React, { useState } from "react";
import AuthModal from "../../components/AuthModal/AuthModal";
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';
import API_ENDPOINTS from '../../config/apiConfig';


function LoginPage({ onSignupClick, onNavigate }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = form.email && form.password && form.role;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    // Use API endpoint from config
    const apiUrl = API_ENDPOINTS.LOGIN;
    try {
      const payload = { ...form, role: form.role ? form.role.toUpperCase() : form.role };
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        const hasData = (Array.isArray(data) && data.length > 0) || (!Array.isArray(data) && data && Object.keys(data).length > 0);
        if (hasData) {
          const entry = Array.isArray(data) ? data[0] : data;
                const name = entry.firstname || entry.name || '';
                const email = entry.email || form.email;
                const roleValue = (entry.role || form.role || '').toString();
                const role = roleValue ? roleValue.toUpperCase() : '';
                const totalCoins = entry.coins || entry.totalCoins || entry.coins_balance || 0;
                const Id = entry.id || entry.userId || entry.teacherId || null;
            console.log('Login successful for:', name, email, role, 'teacherId=',Id);
            // Store dashboard state in localStorage for persistence
            const dashboardState = { name, emailId: email, role, totalCoins, Id };
            localStorage.setItem('dashboardState', JSON.stringify(dashboardState));
            navigate('/dashboard', {
              state: dashboardState
            });
        } else {
          setError('Invalid credentials or role. Please try again.');
        }
      } else {
        setError('Invalid credentials or role. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <AuthModal title="Sign in" onNavigate={onNavigate}>
      <div className="card">
        <h2 className="card-title-ug">Welcome back</h2>
        <p className="subtitle">
          Enter your credentials to access your account
        </p>
        <form className="auth-form-modal" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button
            type="submit"
            className={`btn-primary full-width modal-continue-btn${!isFormValid ? ' btn-disabled' : ''}`}
            disabled={!isFormValid}
          >
            Sign In
          </button>
          <a href="#" className="forgot-link">
            Can't sign in?
          </a>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </AuthModal>
  );
}

export default LoginPage;
