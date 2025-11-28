import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

// --- CORRECTED: Data must be defined here ---
const quizCategories = [
    { name: 'Science & Tech', icon: '⚛️', description: 'Test your knowledge in science & tech.' },
    { name: 'Mathematics', icon: '📐', description: 'Challenge yourself with math problems.' },
    { name: 'Chemistry', icon: '🧪', description: 'Explore the elements of chemistry.' },
    { name: 'Biology', icon: '🧬', description: 'Test your knowledge in biology.' },
    { name: 'General Knowledge', icon: '🌍', description: 'Quizzes on general knowledge.' },
    { name: 'Current Affairs', icon: '📰', description: 'Stay up-to-date with current affairs.' },
];

const features = [
    { name: 'Personalized Learning', description: 'Adaptive quizzes based on your knowledge level and learning pace.' },
    { name: 'Reward System', description: 'Earn points and real rewards for your achievements.' },
    { name: 'Teacher Dashboard', description: 'A platform for educators to create and manage quizzes.' },
    { name: 'Progress Tracking', description: 'Adaptive quizzes that adjust to your knowledge level.' },
    { name: 'Competitive Leaderboards', description: 'Compete with peers and climb the ranks.' },
    { name: 'Mobile Friendly', description: 'Access quizzes anytime, anywhere on any device.' },
];
// ---------------------------------------------


function LandingPage({ onNavigate }) {
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

      {/* Categories Section (Using Card component) */}
      <section className="categories-section">
        <h2>Explore **Quiz Categories**</h2>
        <p>Discover quizzes across various subjects to test and expand your knowledge</p>
        <div className="categories-grid">
          {quizCategories.map((category) => (
            <Card
              key={category.name}
              icon={category.icon}
              title={category.name}
              description={category.description}
              linkText="Explore Quizzes"
              type="category"
            />
          ))}
        </div>
      </section>

      {/* Why Quizzy Section (Features) (Using Card component) */}
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

      {/* Ready to Start Section */}
      <section className="ready-start-section">
        <div className="start-content">
          <h2>Ready to Start Your Quiz Journey?</h2>
          <p>Join thousands of students and teachers. Sign up today and get started!</p>
          <div className="start-buttons">
            <button className="btn-primary" onClick={() => onNavigate('signup')}>Create Account</button>
            <button className="btn-secondary-light">Explore Quizzes</button>
          </div>
        </div>
        <div className="start-image-placeholder"></div>
      </section>

      <Footer />
    </div>
  );
}

// --- CORRECTED: Ensure default export is present ---
export default LandingPage;