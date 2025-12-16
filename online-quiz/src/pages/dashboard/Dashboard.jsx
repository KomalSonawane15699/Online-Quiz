import React from "react";
import "./Dashboard.css";


const statCards = [
  { label: "Total Quizzes", value: "2,543", change: "+12.5%", trend: "up" },
  { label: "Active Events", value: "2,543", change: "+12.5%", trend: "up" },
  { label: "Students", value: "2,543", change: "+12.5%", trend: "up" },
  { label: "Avg. Completion", value: "2,543", change: "-12.5%", trend: "down" },
];

const events = [
  { title: " Mid-term Quiz", meta: "Today, 2:30 PM • 32 participants", primary: true },
  { title: " Weekly Test", meta: "Tomorrow, 10:00 AM • 28 participants" },
  { title: " Final Exam", meta: "May 20, 9:00 AM • 45 participants" },
];

const quizzes = [
  { title: "Introduction to ", questions: 15, completions: 28, completionRate: 75 },
  { title: "Introduction to ", questions: 15, completions: 28, completionRate: 40 },
  { title: "Introduction to ", questions: 15, completions: 28, completionRate: 90 },
];

const topStudents = [
  { name: "Alex John", subject: "Science", score: 950 },
  { name: "Emma Watson", subject: "Mathematics", score: 920 },
  { name: "Michael Clark", subject: "Physics", score: 880 },
  { name: "Sophia Green", subject: "English", score: 890 },
  { name: "Lucia Wilde", subject: "Science", score: 870 },
];

function Dashboard() {
  return (
    <div className="dashboard-root">
      <div className="dashboard-shell">
        
        <header className="dashboard-topbar">
          <div className="dashboard-search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              className="dashboard-search-input"
            />
          </div>
          <button className="btn btn-primary">+ Create New Quiz</button>
        </header>

        
        <main className="dashboard-layout">
          
          <section className="dashboard-main">
            <header className="dashboard-header">
              <h1>Dashboard</h1>
              <p>Welcome back! Here's what's happening with your quizzes.</p>
            </header>

            
            <section className="stats-grid">
              {statCards.map((card) => (
                <article key={card.label} className="stat-card">
                  <p className="stat-label">{card.label}</p>
                  <h2 className="stat-value">{card.value}</h2>
                  <p
                    className={`stat-change ${
                      card.trend === "up" ? "up" : "down"
                    }`}
                  >
                    {card.change}
                  </p>
                </article>
              ))}
            </section>

            <section className="panel">
              <header className="panel-header">
                <h2>Recent Events</h2>
              </header>
              <div className="events-list">
                {events.map((event) => (
                  <article key={event.title} className="event-card">
                    <div className="event-info">
                      <h3>{event.title}</h3>
                      <p>{event.meta}</p>
                    </div>
                    {event.primary ? (
                      <button className="btn btn-accent">View Live</button>
                    ) : (
                      <button className="btn btn-outline">Manage</button>
                    )}
                  </article>
                ))}
              </div>
            </section>

            <section className="panel">
              <header className="panel-header">
                <h2>Recent Quizzes</h2>
              </header>
              <div className="quiz-grid">
                {quizzes.map((quiz, idx) => (
                  <article key={idx} className="quiz-card">
                    <div className="quiz-header">
                      <h3>{quiz.title}</h3>
                      <span className="quiz-arrow">›</span>
                    </div>
                    <p className="quiz-meta">
                      {quiz.questions} questions • {quiz.completions} completions
                    </p>
                    <div className="progress-row">
                      <span>Completion Rate</span>
                      <span>{quiz.completionRate}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${quiz.completionRate}%` }}
                      />
                    </div>
                  </article>
                ))}

                <article className="quiz-card quiz-create">
                  <button className="btn-circle">+</button>
                  <p>Create New Quiz</p>
                </article>
              </div>
            </section>
          </section>

         
          <aside className="dashboard-sidebar">
            <section className="panel">
              <header className="panel-header">
                <h2>Top Students</h2>
                <p className="panel-subtitle">
                  Students with highest quiz scores
                </p>
              </header>
              <ol className="student-list">
                {topStudents.map((student, index) => (
                  <li key={student.name} className="student-item">
                    <span className="student-rank">{index + 1}</span>
                    <div className="student-info">
                      <p className="student-name">{student.name}</p>
                      <p className="student-subject">{student.subject}</p>
                    </div>
                    <span className="student-score">{student.score}</span>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
