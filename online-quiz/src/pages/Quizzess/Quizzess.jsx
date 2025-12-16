
import React from "react";
import "./Quizzess.css";

const quizRows = [
  {
    title: "Introduction to Biology",
    status: "Published",
    statusType: "live",         
    updatedAt: "Created 2 days ago",
    questions: 25,
    attempts: 120,
  },
  {
    title: "Advanced Mathematics",
    status: "Draft",
    statusType: "draft",
    updatedAt: "Last edited 5 mins ago",
    questions: 40,
    attempts: 0,
  },
  {
    title: "Chemistry Fundamentals",
    status: "Scheduled",
    statusType: "scheduled",
    updatedAt: "Scheduled for 20 May",
    questions: 30,
    attempts: 45,
  },
];

function QuizzesPage() {
  return (
    <div className="app-root">
      {/* LEFT SIDEBAR */}
      <aside className="side-nav">
        <div className="side-header">
          <span className="logo-dot" />
          <span className="logo-text">Quizzy</span>
        </div>

        <div className="side-section">
          <p className="side-title">Main</p>
          <button className="side-item">
            <span className="side-dot" />
            Dashboard
          </button>
          <button className="side-item side-item-active">
            <span className="side-dot" />
            Quizzes
          </button>
          <button className="side-item">
            <span className="side-dot" />
            Events
          </button>
          <button className="side-item">
            <span className="side-dot" />
            Students
          </button>
        </div>

        <div className="side-section">
          <p className="side-title">Manage</p>
          <button className="side-item">
            <span className="side-dot" />
            Settings
          </button>
        </div>
      </aside>

      {/* MAIN COLUMN */}
      <div className="main-shell">
        {/* TOP BAR */}
        <header className="topbar">
          <h1 className="topbar-title">Quizzes</h1>
          <div className="topbar-right">
            <input
              className="search-input"
              placeholder="Search quizzes..."
            />
            <button className="btn-secondary">Export</button>
            <button className="btn-primary">+ Create New Quiz</button>
          </div>
        </header>

        {/* FILTER ROW */}
        <section className="filters-row">
          <div className="tabs">
            <button className="tab tab-active">All Quizzes</button>
            <button className="tab">Published</button>
            <button className="tab">Drafts</button>
            <button className="tab">Archived</button>
          </div>

          <div className="filters-right">
            <select className="filter-select">
              <option>All Categories</option>
              <option>Science</option>
              <option>Maths</option>
              <option>English</option>
            </select>
            <select className="filter-select">
              <option>Sort: Recently updated</option>
              <option>Sort: Name (A–Z)</option>
              <option>Sort: Attempts</option>
            </select>
          </div>
        </section>

        {/* QUIZ TABLE */}
        <section className="table-panel">
          <header className="table-header">
            <span>Quiz Library</span>
            <span className="table-subtitle">
              Browse and manage all your quizzes
            </span>
          </header>

          <div className="table-head-row">
            <span className="col-title col-main">Quiz</span>
            <span className="col-title">Status</span>
            <span className="col-title">Questions</span>
            <span className="col-title">Attempts</span>
            <span className="col-title col-actions">Actions</span>
          </div>

          <div className="table-body">
            {quizRows.map((q) => (
              <article key={q.title} className="table-row">
                <div className="col-main">
                  <p className="quiz-title">{q.title}</p>
                  <p className="quiz-meta">{q.updatedAt}</p>
                </div>

                <div className="col-status">
                  <span className={`status-pill status-${q.statusType}`}>
                    {q.status}
                  </span>
                </div>

                <div className="col-text">{q.questions}</div>
                <div className="col-text">{q.attempts}</div>

                <div className="col-actions">
                  <button className="mini-btn">View</button>
                  <button className="mini-btn">Edit</button>
                  <button className="mini-btn mini-danger">Delete</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuizzesPage;
