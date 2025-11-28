// src/pages/LandingPage.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

// --- CHECK HERE: The arrays must be defined outside the component function ---
const quizCategories = [
    { name: 'Science & Tech', icon: '⚛️', description: 'Test your knowledge in science & tech.' },
    { name: 'Mathematics', icon: '📐', description: 'Challenge yourself with math problems.' },
    // ... all other category objects ...
];

const features = [
    { name: 'Personalized Learning', description: 'Adaptive quizzes based on your knowledge level and learning pace.' },
    { name: 'Reward System', description: 'Earn points and real rewards for your achievements.' },
    // ... all other feature objects ...
];
// -----------------------------------------------------------------------------

function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">
      <Header onNavigate={onNavigate} />

      {/* ... Hero Section ... */}

      {/* Categories Section: This is where the variable is used */}
      <section className="categories-section">
        <h2>Explore **Quiz Categories**</h2>
        <p>Discover quizzes across various subjects to test and expand your knowledge</p>
        <div className="categories-grid">
          {quizCategories.map((category) => ( // Reference occurs here
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

      {/* ... Features Section, Ready to Start Section, and Footer ... */}
      <Footer />
    </div>
  );
}

export default LandingPage;