import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Leaf, UtensilsCrossed, Heart, Scale, Wind, Flame, Moon, MinusCircle, CheckCircle, Activity } from "lucide-react";
import '../Result.css';


const Result = () => {
  const [dominantDosha, setDominantDosha] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const userName = state?.username || 'Friend';
  const [activeCategory, setActiveCategory] = useState('herbs');

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
    if (!storedAnswers || !Array.isArray(storedAnswers) || storedAnswers.some((answer) => !answer)) {
      navigate('/quiz');
      return;
    }
    calculateDosha(storedAnswers);
  }, [navigate]);

  const calculateDosha = (answers) => {
    const vataKeywords = ['light', 'quick', 'anxious', 'variable', 'cold'];
    const pittaKeywords = ['medium', 'intense', 'sharp', 'angry', 'hot'];
    const kaphaKeywords = ['large', 'steady', 'slow', 'calm', 'heavy'];

    let vata = 0, pitta = 0, kapha = 0;

    answers.forEach((answer) => {
      const lower = answer.toLowerCase();
      if (vataKeywords.some((word) => lower.includes(word))) vata++;
      if (pittaKeywords.some((word) => lower.includes(word))) pitta++;
      if (kaphaKeywords.some((word) => lower.includes(word))) kapha++;
    });

    const max = Math.max(vata, pitta, kapha);
    if (vata === max) setDominantDosha('Vata');
    else if (pitta === max) setDominantDosha('Pitta');
    else setDominantDosha('Kapha');
  };

  const doshaVisuals = {
    Vata: {
      icon: <Wind size={50} color="#ffffffff" />,
      bgColor: '#E6F7FA',
      circleBg: 'linear-gradient(135deg, #392896ff, #76b0e3ff)',
      shadow: '0 0 20px rgba(126, 214, 223, 0.6)',
      badgeColor: '#7ED6DF'
    },
    Pitta: {
      icon: <Flame size={50} color="#ffffffff" />,
      bgColor: '#FFF5E5',
      circleBg: 'linear-gradient(135deg, #F39C12, #FAD7A0)',
      shadow: '0 0 20px rgba(243, 156, 18, 0.6)',
      badgeColor: '#F39C12'
    },
    Kapha: {
      icon: <Moon size={50} color="#ffffffff" />,
      bgColor: '#caffdeff',
      circleBg: 'linear-gradient(135deg, #27AE60, #A9DFBF)',
      shadow: '0 0 20px rgba(39, 174, 96, 0.6)',
      badgeColor: '#27AE60'
    }
  };

  const descriptions = {
    Vata: {
      desc: 'You are energetic, creative, and enthusiastic, but may need grounding and warmth.',
      characteristics: ['Creative', 'Energetic', 'Quick-thinking', 'Enthusiastic'],
      elements: 'Air & Space',
      backgroundClass: 'vata-bg',
    },
    Pitta: {
      desc: 'You are focused, ambitious, and driven, but may need to cool down and relax.',
      characteristics: ['Focused', 'Ambitious', 'Sharp', 'Driven'],
      elements: 'Fire & Water',
      backgroundClass: 'pitta-bg',
    },
    Kapha: {
      desc: 'You are stable, compassionate, and calm, but may need stimulation and movement.',
      characteristics: ['Stable', 'Compassionate', 'Calm', 'Loyal'],
      elements: 'Earth & Water',
      backgroundClass: 'kapha-bg',
    },
  };

  const categories = [
    { id: 'herbs', name: 'Herbs', icon: Leaf },
    { id: 'diet', name: 'Diet', icon: UtensilsCrossed },
    { id: 'lifestyle', name: 'Lifestyle', icon: Heart },
    { id: 'balance', name: 'Balance', icon: Scale }
  ];

  const categoryData = {
    Vata: {
      herbs: {
        title: 'Recommended Herbs for Vata',
        subtitle: 'These Ayurvedic herbs help balance your Vata constitution',
        icon: <Leaf size={24} color="#52b788" />, // Icon from screenshot
        items: [
          { name: 'Ashwagandha', icon: '🟢' },
          { name: 'Brahmi', icon: '🟢' },
          { name: 'Jatamansi', icon: '🟢' },
          { name: 'Shankhpushpi', icon: '🟢' },
        ]
      },
      diet: {
        titleFavor: 'Foods to Favor', // Separate title for diet
        subtitleFavor: 'These foods support your Vata balance',
        iconFavor: <CheckCircle size={24} color="#52b788" />,
        itemsFavor: [
          'Warm, cooked foods',
          'Sweet, sour, salty tastes',
          'Ghee and oils',
          'Root vegetables',
          'Warm milk',
        ],
        titleMinimize: 'Foods to Minimize', // Separate title for diet
        subtitleMinimize: 'These foods may aggravate your Vata',
        iconMinimize: <MinusCircle size={24} color="#ef4444" />,
        itemsMinimize: [
          'Cold, raw foods',
          'Excessive bitter/astringent tastes',
          'Caffeine excess',
          'Irregular eating',
        ],
      },
      lifestyle: {
        title: 'Lifestyle Recommendations',
        subtitle: 'Daily practices to maintain your Vata balance',
        icon: <Activity size={24} color="#2563eb" />, // Icon from screenshot
        items: [
          { name: 'Regular daily routine and sleep schedule' },
          { name: 'Gentle, grounding exercises like yoga' },
          { name: 'Warm oil massage (Abhyanga)' },
          { name: 'Meditation and breathing exercises' },
          { name: 'Avoid overstimulation and stress' },
        ]
      },
      balance: {
        title: 'Signs of Vata Imbalance',
        subtitle: 'Watch for these symptoms that indicate your dosha needs attention. Pro Tip: If you notice these symptoms, focus more on the balancing practices above and consider chatting with our AI guide for personalized advice.',
        icon: <Moon size={24} color="#f97316" />, // Icon from screenshot
        items: [
          { name: 'Anxiety' },
          { name: 'Restlessness' },
          { name: 'Constipation' },
          { name: 'Insomnia' },
          { name: 'Dry skin' },
        ],
        proTip: 'If you notice these symptoms, focus more on the balancing practices above and consider chatting with our AI guide for personalized advice.'
      },
    },
    Pitta: {
      herbs: {
        title: 'Recommended Herbs for Pitta',
        subtitle: 'These Ayurvedic herbs help balance your Pitta constitution',
        icon: <Leaf size={24} color="#52b788" />,
        items: [
          { name: 'Amalaki', icon: '🟢' },
          { name: 'Neem', icon: '🟢' },
          { name: 'Aloe Vera', icon: '🟢' },
          { name: 'Turmeric', icon: '🟢' },
        ]
      },
      diet: {
        titleFavor: 'Foods to Favor',
        subtitleFavor: 'These foods support your Pitta balance',
        iconFavor: <CheckCircle size={24} color="#52b788" />,
        itemsFavor: [
          'Cool, fresh foods',
          'Sweet, bitter, astringent tastes',
          'Coconut water',
          'Leafy greens',
          'Fresh fruits',
        ],
        titleMinimize: 'Foods to Minimize',
        subtitleMinimize: 'These foods may aggravate your Pitta',
        iconMinimize: <MinusCircle size={24} color="#ef4444" />,
        itemsMinimize: [
          'Spicy, hot foods',
          'Excessive sour/salty tastes',
          'Alcohol',
          'Fried foods',
        ],
      },
      lifestyle: {
        title: 'Lifestyle Recommendations',
        subtitle: 'Daily practices to maintain your Pitta balance',
        icon: <Activity size={24} color="#2563eb" />,
        items: [
          { name: 'Moderate exercise, avoid overheating' },
          { name: 'Cool environments and activities' },
          { name: 'Practice patience and avoid perfectionism' },
          { name: 'Regular meals, don\'t skip eating' },
          { name: 'Cooling pranayama (breathing exercises)' },
        ]
      },
      balance: {
        title: 'Signs of Pitta Imbalance',
        subtitle: 'Watch for these symptoms that indicate your dosha needs attention',
        icon: <Moon size={24} color="#f97316" />,
        items: [
          { name: 'Irritability' },
          { name: 'Inflammation' },
          { name: 'Heartburn' },
          { name: 'Skin rashes' },
          { name: 'Impatience' },
        ],
        proTip: 'If you notice these symptoms, focus more on the balancing practices above and consider chatting with our AI guide for personalized advice.'
      },
    },
    Kapha: { // Kapha data starts here
      herbs: {
        title: 'Recommended Herbs for Kapha',
        subtitle: 'These Ayurvedic herbs help balance your Kapha constitution',
        icon: <Leaf size={24} color="#52b788" />,
        items: [
          { name: 'Trikatu', icon: '🟢' },
          { name: 'Guggulu', icon: '🟢' },
          { name: 'Punarnava', icon: '🟢' },
          { name: 'Chitrak', icon: '🟢' },
        ]
      },
      diet: {
        titleFavor: 'Foods to Favor',
        subtitleFavor: 'These foods support your Kapha balance',
        iconFavor: <CheckCircle size={24} color="#52b788" />,
        itemsFavor: [
          'Light, warm foods',
          'Pungent, bitter, astringent tastes',
          'Spices and herbs',
          'Steamed vegetables',
        ],
        titleMinimize: 'Foods to Minimize',
        subtitleMinimize: 'These foods may aggravate your Kapha',
        iconMinimize: <MinusCircle size={24} color="#ef4444" />,
        itemsMinimize: [
          'Heavy, oily foods',
          'Excessive sweet/salty tastes',
          'Dairy excess',
          'Cold foods',
        ],
      },
      lifestyle: {
        title: 'Lifestyle Recommendations',
        subtitle: 'Daily practices to maintain your Kapha balance',
        icon: <Activity size={24} color="#2563eb" />,
        items: [
          { name: 'Regular vigorous exercise' },
          { name: 'Early morning routine' },
          { name: 'Dry brushing and saunas' },
          { name: 'Stimulating activities and challenges' },
          { name: 'Avoid excessive sleep and sedentary behavior' },
        ]
      },
      balance: {
        title: 'Signs of Kapha Imbalance',
        subtitle: 'Watch for these symptoms that indicate your dosha needs attention',
        icon: <Moon size={24} color="#f97316" />,
        items: [
          { name: 'Lethargy' },
          { name: 'Weight gain' },
          { name: 'Congestion' },
          { name: 'Depression' },
          { name: 'Sluggish digestion' },
        ],
        proTip: 'If you notice these symptoms, focus more on the balancing practices above and consider chatting with our AI guide for personalized advice.'
      },
    },
  };

  return (
    <div className="result-section-bg">
      <div className="result-container">
        {dominantDosha ? (
          <>
            <div className="header-wrapper">
              <div
                className="resheader"
                style={{
                  backgroundColor: doshaVisuals[dominantDosha].bgColor
                }}
              >
                <div
                  className="resheader-icon gradient-circle"
                  style={{
                    background: doshaVisuals[dominantDosha].circleBg,
                    boxShadow: doshaVisuals[dominantDosha].shadow
                  }}
                >
                  {doshaVisuals[dominantDosha].icon}
                </div>
                <div className="restitle">
                  <h1 className="weltitle">
                    Welcome <span className="highlight">{userName}</span>!
                  </h1>
                </div>
                <p className="result-description">
                  Your dominant dosha is{' '}
                  <span
                    className="highlight dosha"
                    style={{ backgroundColor: doshaVisuals[dominantDosha].badgeColor }}
                  >
                    {dominantDosha}
                  </span>
                  <br /><br />
                  {descriptions[dominantDosha].elements} elements dominate your constitution
                </p>
              </div>
            </div>

            <div className={`characteristics ${descriptions[dominantDosha].backgroundClass}`}>
              <h2 className="result-subtitle">
                Your {dominantDosha} Characteristics
              </h2>
              <div className="traits">
                {descriptions[dominantDosha].characteristics.map((trait) => (
                  <span key={trait} className="trait">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
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

            {/* Dynamic Section based on activeCategory */}
            <div className="dynamic-section">
              {activeCategory === 'herbs' && (
                <>
                  <div className="dynamic-header">
                    <div className="dynamic-header-title">
                      <div className="dynamic-header-icon">{categoryData[dominantDosha].herbs.icon}</div>
                      <h2>{categoryData[dominantDosha].herbs.title}</h2>
                    </div>
                    <p>{categoryData[dominantDosha].herbs.subtitle}</p>
                  </div>
                  <div className="dynamic-grid-2-col">
                    {categoryData[dominantDosha].herbs.items.map((item, index) => (
                      <div key={index} className="dynamic-item-small">
                        <span className="bullet-icon">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeCategory === 'diet' && (
                <div className="dynamic-diet-grid">
                  <div className="diet-card favor-card">
                    <div className="dynamic-header">
                      <div className="dynamic-header-title">
                        <div className="dynamic-header-icon">{categoryData[dominantDosha].diet.iconFavor}</div>
                        <h2>{categoryData[dominantDosha].diet.titleFavor}</h2>
                      </div>
                      <p>{categoryData[dominantDosha].diet.subtitleFavor}</p>
                    </div>
                    <ul className="diet-list">
                      {categoryData[dominantDosha].diet.itemsFavor.map((item, index) => (
                        <li key={index} className="diet-list-item favor-item">
                          <span className="bullet-icon">🟢</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="diet-card minimize-card">
                    <div className="dynamic-header">
                      <div className="dynamic-header-title">
                        <div className="dynamic-header-icon">{categoryData[dominantDosha].diet.iconMinimize}</div>
                        <h2>{categoryData[dominantDosha].diet.titleMinimize}</h2>
                      </div>
                      <p>{categoryData[dominantDosha].diet.subtitleMinimize}</p>
                    </div>
                    <ul className="diet-list">
                      {categoryData[dominantDosha].diet.itemsMinimize.map((item, index) => (
                        <li key={index} className="diet-list-item minimize-item">
                          <span className="bullet-icon">🔴</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeCategory === 'lifestyle' && (
                <>
                  <div className="dynamic-header">
                    <div className="dynamic-header-title">
                      <div className="dynamic-header-icon">{categoryData[dominantDosha].lifestyle.icon}</div>
                      <h2>{categoryData[dominantDosha].lifestyle.title}</h2>
                    </div>
                    <p>{categoryData[dominantDosha].lifestyle.subtitle}</p>
                  </div>
                  <div className="dynamic-grid-1-col">
                    {categoryData[dominantDosha].lifestyle.items.map((item, index) => (
                      <div key={index} className="dynamic-item-long">
                        <span className="bullet-icon">🔵</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeCategory === 'balance' && (
                <>
                  <div className="dynamic-header">
                    <div className="dynamic-header-icon">{categoryData[dominantDosha].balance.icon}</div>
                    <h2>{categoryData[dominantDosha].balance.title}</h2>
                    <p>{categoryData[dominantDosha].balance.subtitle}</p>
                  </div>
                  <div className="dynamic-grid-2-col">
                    {categoryData[dominantDosha].balance.items.map((item, index) => (
                      <div key={index} className="dynamic-item-small">
                        <span className="bullet-icon">🟠</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pro-tip-box">
                    <span className="pro-tip-icon">💡</span>
                    <p>{categoryData[dominantDosha].balance.proTip}</p>
                  </div>
                </>
              )}
            </div>

            <div className="cta">
              <p>
                Ready for Ayurveda Guidance Journey?
                <br />
                Our AI wellness guide is ready to
                provide tailored advice for your {dominantDosha} constitution.<br />So...Hop on to your Dashboard.
              </p>
              <button onClick={() => navigate('/Dashboard')}>
                Dashboard
              </button>
            </div>
          </>
        ) : (
          <p className="result-loading">Loading result...</p>
        )}
      </div>
    </div>
  );
};

export default Result;