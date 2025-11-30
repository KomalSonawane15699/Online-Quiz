import React from 'react';
// Note: Styling for '.card-container' and its contents is in App.css

function Card({ icon, title, description, linkText, type = 'category' }) {
  // Determine if it's a feature card (simpler layout) or category card
  const isFeature = type === 'feature';

  return (
    <div className={`card-container ${isFeature ? 'feature-card' : 'category-card'}`}>
      {!isFeature && (
        <span className="card-icon">{icon}</span>
      )}
      
      {/* For Categories, title is often the main subject, for Features, it's the feature name */}
      <h3 className="card-title">{title}</h3>
      
      {/* Description */}
      <p className="card-description">{description}</p>
      
      {/* Link only for Category cards */}
      {!isFeature && linkText && (
        <a href="#" className="card-link">{linkText} →</a>
      )}
    </div>
  );
}

export default Card;