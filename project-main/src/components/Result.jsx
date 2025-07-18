
import React, { useState } from 'react';
import { MessageCircle, Calendar, RefreshCw, Leaf, UtensilsCrossed, Heart, Scale } from 'lucide-react';
import '../Result.css';

const Result = () => {
  const [activeCategory, setActiveCategory] = useState('herbs');

  const categoryData = {
    herbs: {
      title: 'Recommended Herbs for Pitta',
      subtitle: 'These Ayurvedic herbs help balance your Pitta constitution.',
      items: [
        { icon: '🌿', name: 'Amla/Amalaki' },
        { icon: '🌿', name: 'Neem' },
        { icon: '🌿', name: 'Aloe Vera' },
        { icon: '🌿', name: 'Turmeric' }
      ]
    },
    diet: {
      title: 'Pitta-Balancing Diet',
      subtitle: 'Foods that cool and balance your Pitta constitution.',
      items: [
        { icon: '🥒', name: 'Cucumber' },
        { icon: '🥥', name: 'Coconut' },
        { icon: '🍃', name: 'Leafy Greens' },
        { icon: '🍉', name: 'Sweet Fruits' }
      ]
    },
    lifestyle: {
      title: 'Lifestyle Recommendations',
      subtitle: 'Daily practices to maintain Pitta balance.',
      items: [
        { icon: '🧘', name: 'Meditation' },
        { icon: '🌅', name: 'Early Morning Routine' },
        { icon: '💧', name: 'Stay Hydrated' },
        { icon: '🌙', name: 'Cool Evening Walks' }
      ]
    },
    balance: {
      title: 'Balance Practices',
      subtitle: 'Techniques to harmonize your Pitta energy.',
      items: [
        { icon: '🌬️', name: 'Pranayama' },
        { icon: '🧘‍♀️', name: 'Yin Yoga' },
        { icon: '🌊', name: 'Swimming' },
        { icon: '🎵', name: 'Calming Music' }
      ]
    }
  };

  const categories = [
    { id: 'herbs', name: 'Herbs', icon: Leaf },
    { id: 'diet', name: 'Diet', icon: UtensilsCrossed },
    { id: 'lifestyle', name: 'Lifestyle', icon: Heart },
    { id: 'balance', name: 'Balance', icon: Scale }
  ];
  return (
    <div className="wellness-dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header centered">
          <div className="avatar-section">
            <div className="avatar-circle">R</div>
          </div>
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome back, Ritika soni!</h1>
            <div className="dosha-badge">
              <span className="dosha-text">Your dominant dosha is</span>
              <span className="dosha-type">Pitta</span>
            </div>
            <p className="dosha-subtitle">Fire & Water elements dominate your constitution</p>
          </div>
        </div>

        {/* Pitta Characteristics */}
        <div className="characteristics-section">
          <div className="section-header">
            <h2>Your Pitta Characteristics</h2>
          </div>
          <div className="characteristics-grid">
            <div className="characteristic-item">
              <span className="characteristic-tag focused">Focused</span>
            </div>
            <div className="characteristic-item">
              <span className="characteristic-tag determined">Determined</span>
            </div>
            <div className="characteristic-item">
              <span className="characteristic-tag leader">Leader</span>
            </div>
            <div className="characteristic-item">
              <span className="characteristic-tag intelligent">Intelligent</span>
            </div>
          </div>
        </div>

        {/* Category Icons */}
        <div className="category-icons">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-icon-wrapper">
                  <IconComponent size={24} />
                </div>
                <span>{category.name}</span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Content Section */}
        <div className="content-section">
          <div className="section-header">
            <h2>{categoryData[activeCategory].title}</h2>
            <p>{categoryData[activeCategory].subtitle}</p>
          </div>
          <div className="content-grid">
            {categoryData[activeCategory].items.map((item, index) => (
              <div key={index} className="content-item">
                <div className="content-icon">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready for Personalized Guidance?</h2>
            <p>Our AI wellness guide is ready to answer your specific questions and provide tailored advice for your Pitta constitution.</p>
            <button className="cta-button">Start Wellness Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;