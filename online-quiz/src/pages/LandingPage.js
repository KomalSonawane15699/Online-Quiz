import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card'; 

// Data for sections (No changes here from previous step)
const quizCategories = [
    { name: 'Tech', icon: '💻', description: 'Test your knowledge in software and hardware.' },
    { name: 'Mathematics', icon: '📐', description: 'Challenge yourself with math problems.' },
    { name: 'Sciences', icon: '🔬', description: 'Explore physics, chemistry, and nature.' },
    { name: 'Aptitude', icon: '💡', description: 'Test your reasoning and problem-solving skills.' },
    { name: 'Knowledge & Affairs', icon: '📰', description: 'Quizzes on general facts and global events.' }, 
    { name: 'Languages', icon: '🗣️', description: 'Test your skills in English, Spanish, and more.' }, 
];

const features = [
    { name: 'Personalized Learning', description: 'Adaptive quizzes based on your knowledge level and learning pace.' },
    { name: 'Reward System', description: 'Earn points and real rewards for your achievements.' },
    { name: 'Teacher Dashboard', description: 'A platform for educators to create and manage quizzes.' },
    { name: 'Progress Tracking', description: 'Adaptive quizzes that adjust to your knowledge level.' },
    { name: 'Competitive Leaderboards', description: 'Compete with peers and climb the ranks.' },
    { name: 'Mobile Friendly', description: 'Access quizzes anytime, anywhere on any device.' },
];


function LandingPage({ onNavigate }) {
  // Mock data for the new Streaks section
  const streakDays = [
      { day: 'M', active: true },
      { day: 'T', active: true },
      { day: 'W', active: true },
      { day: 'T', active: false },
      { day: 'F', active: false },
      { day: 'S', active: false },
      { day: 'S', active: false },
  ];
  
  // Calculate Streak Count
  const currentStreak = streakDays.filter(s => s.active).length;

  return (
    <div className="landing-page">
      
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="subtitle">The ultimate quiz experience</p>
          <h1>Learn, Quiz, **Earn Rewards**</h1>
          <p>Join thousands of students and teachers on the ultimate quiz platform. Test your knowledge, compete with peers, and win exciting rewards.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onNavigate('signup')}>Get Started</button>
            <button className="btn-secondary">Explore Quizzes</button>
          </div>
          <p className="join-info">Join **15,000+** students joined this week</p>
        </div>
      </section>
      
      {/* --- Streaks Section (With Count) --- */}
      <section className="streaks-section">
          <h2>Your **Daily Streaks**</h2>
          <div className="streak-count-display">
              <span className="current-streak-fire">🔥</span>
              <span className="streak-number">{currentStreak} Days</span>
          </div>

          <div className="streak-container">
              {streakDays.map((s, index) => (
                  <div key={index} className={`streak-day-item ${s.active ? 'active' : ''}`}>
                      <span className="streak-fire">🔥</span>
                      <span className="streak-day-label">{s.day}</span>
                  </div>
              ))}
          </div>
          <p className="streak-text">Keep your streak going to earn bonus rewards!</p>
      </section>


      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore **Quiz Categories**</h2>
        <p>Discover quizzes across various subjects to test and expand your knowledge</p>
        <div className="categories-grid">
          {quizCategories.map((category) => (
            <Card 
                key={category.name} 
                title={category.name} 
                description={category.description} 
                icon={category.icon} 
                linkText="Explore Quizzes" 
                type="category" 
            />
          ))}
        </div>
      </section>

      {/* Why Quizzy Section (Features) */}
      <section className="why-quizzy-section">
        <h2>Why **Quizzy**</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <Card 
                key={feature.name} 
                title={feature.name} 
                description={feature.description} 
                type="feature" 
            />
          ))}
        </div>
      </section>

      {/* Ready to Start Section (UPDATED) */}
      <section className="ready-start-section">
        <div className="start-content">
          <h2>Ready to Start Your Quiz Journey?</h2>
          <p>Join thousands of students and teachers. Sign up today and get started!</p>
          <div className="start-buttons">
            <button className="btn-primary" onClick={() => onNavigate('signup')}>Create Account</button>
            <button className="btn-secondary-light">Explore Quizzes</button>
          </div>
        </div>
        
        {/* NEW Quiz Preview Card */}
        <div className="start-quiz-preview">
            <div className="preview-header">
                <span className="preview-icon">⏱️</span>
                <h3>Daily Challenge</h3>
            </div>
            <p>10 Quick Questions on Math</p>
            <button className="preview-btn">Start Quiz</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;