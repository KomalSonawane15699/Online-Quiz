import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [statCards, setStatCards] = useState([]);
  const [events, setEvents] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []); // Empty dependency array ensures it runs once on mount

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch all data in parallel for better performance
      const [statsRes, eventsRes, quizzesRes, studentsRes] = await Promise.all([
        fetch('/api/dashboard/stats'),
        fetch('/api/dashboard/events'),
        fetch('/api/dashboard/quizzes'),
        fetch('/api/dashboard/top-students')
      ]);

      const stats = await statsRes.json();
      const eventsData = await eventsRes.json();
      const quizzesData = await quizzesRes.json();
      const students = await studentsRes.json();

      setStatCards(stats);
      setEvents(eventsData);
      setQuizzes(quizzesData);
      setTopStudents(students);
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add refresh button functionality
  const handleRefresh = () => {
    fetchDashboardData();
  };

  if (loading) {
    return (
      <div className="dashboard-root">
        <div className="dashboard-shell">
          <main className="dashboard-layout">
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              Loading your dashboard...
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-root">
        <div className="dashboard-shell">
          <main className="dashboard-layout">
            <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
              {error}
              <br />
              <button onClick={handleRefresh} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Try Again
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Rest of your JSX remains the same, just replace data arrays with state
  return (
    <div className="dashboard-root">
      {/* Your existing JSX with statCards, events, quizzes, topStudents state */}
      {/* Add refresh button in header */}
      <header className="dashboard-topbar">
        <div className="dashboard-search-wrapper">
          <input type="text" placeholder="Search..." className="dashboard-search-input" />
        </div>
        <div>
          <button onClick={handleRefresh} className="btn btn-outline" style={{ marginRight: '0.5rem' }}>
            Refresh
          </button>
          <button className="btn btn-primary">+ Create New Quiz</button>
        </div>
      </header>
      {/* ... rest of component */}
    </div>
  );
}

export default Dashboard;
