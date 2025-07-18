
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Result.css';

const Result = () => {
  const [dominantDosha, setDominantDosha] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const userName = state?.username || 'Friend'; // Use username from navigation state

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
    if (!storedAnswers || !Array.isArray(storedAnswers) || storedAnswers.some((answer) => !answer)) {
      navigate('/quiz');
      return;
    }
    setQuizAnswers(storedAnswers);
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

  const descriptions = {
    Vata: {
      desc: 'You are energetic, creative, and enthusiastic, but may need grounding and warmth.',
      tips: [
        'Stick to a regular schedule',
        'Eat warm, moist, grounding foods',
        'Avoid overstimulation and get plenty of rest',
      ],
      characteristics: ['Creative', 'Energetic', 'Quick-thinking', 'Enthusiastic'],
      herbs: ['Ashwagandha', 'Brahmi', 'Jatamansi', 'Shankhpushpi'],
      elements: 'Air & Space',
      backgroundClass: 'vata-bg',
    },
    Pitta: {
      desc: 'You are focused, ambitious, and driven, but may need to cool down and relax.',
      tips: [
        'Avoid spicy, oily, or fried foods',
        'Practice calming hobbies like nature walks or meditation',
        'Prioritize balance over perfection',
      ],
      characteristics: ['Focused', 'Ambitious', 'Sharp', 'Driven'],
      herbs: ['Amalaki', 'Neem', 'Sandalwood', 'Rose'],
      elements: 'Fire & Water',
      backgroundClass: 'pitta-bg',
    },
    Kapha: {
      desc: 'You are stable, compassionate, and calm, but may need stimulation and movement.',
      tips: [
        'Incorporate regular, vigorous exercise',
        'Favor light, dry, and spicy foods',
        'Avoid oversleeping or inactivity',
      ],
      characteristics: ['Stable', 'Compassionate', 'Calm', 'Loyal'],
      herbs: ['Trikatu', 'Tulsi', 'Ginger', 'Cinnamon'],
      elements: 'Earth & Water',
      backgroundClass: 'kapha-bg',
    },
  };

  return (
    <div className="result-container">
      {dominantDosha ? (
        <>
          {/* Header Section */}
          <div className="header">
            <div className="header-icon">🌬️</div>
            <h1 className="result-title">
              Welcome back, <span className="highlight">{userName}</span>!
            </h1>
            <p className="result-description">
              Your dominant dosha is{' '}
              <span className="highlight dosha">{dominantDosha}</span>
              <br />
              <br />
              {descriptions[dominantDosha].elements} elements dominate your constitution
            </p>
          </div>

          {/* Button Group */}
          <div className="button-group">
            <div className="button" onClick={() => navigate('/chatbot')}>
              <div className="icon-btn">💬</div>
              <strong>Chat with AI Guide</strong>
              <p>
                Our AI wellness guide is ready to answer your specific questions and
                provide tailored advice for your {dominantDosha} constitution.
              </p>
            </div>
            <div className="button" onClick={() => navigate('/plan-generator')}>
              <div className="icon-btn">📅</div>
              <strong>Generate Wellness Plan</strong>
              <p>Create a personalized daily routine and wellness plan</p>
            </div>
            <div className="button" onClick={() => navigate('/name-entry')}>
              <div className="icon-btn">🔄</div>
              <strong>Retake Assessment</strong>
              <p>Take the dosha assessment again</p>
            </div>
          </div>

          {/* Characteristics Section */}
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

          {/* Recommendations Section */}
          <div className="recommendations">
            <h3 className="result-subtitle">
              Recommended Herbs for {dominantDosha}
            </h3>
            <p className="result-description">
              These Ayurvedic herbs help balance your {dominantDosha} constitution
            </p>
            <div className="herbs">
              {descriptions[dominantDosha].herbs.map((herb) => (
                <div key={herb} className="herb">
                  {herb}
                </div>
              ))}
            </div>
            <h3 className="result-subtitle">Tips for Balance</h3>
            <div className="result-tips">
              <ul>
                {descriptions[dominantDosha].tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <h3 className="result-subtitle">Recommended Products</h3>
            <div className="products">
              <p className="result-description">
                *Consult with an Ayurvedic practitioner before starting any herbal
                regimen. Links are affiliate partnerships.
              </p>
              {[
                {
                  name: `${dominantDosha === 'Vata' ? 'Himalaya Ashwagandha Capsules' : dominantDosha === 'Pitta' ? 'Amalaki Capsules' : 'Trikatu Blend'}`,
                  desc: `Premium ${dominantDosha === 'Vata' ? 'Ashwagandha' : dominantDosha === 'Pitta' ? 'Amalaki' : 'Trikatu'} for ${dominantDosha === 'Vata' ? 'stress relief and energy' : dominantDosha === 'Pitta' ? 'cooling and detoxification' : 'digestion and stimulation'}`,
                  price: '$19.99',
                },
                {
                  name: `${dominantDosha === 'Vata' ? 'Organic Brahmi Powder' : dominantDosha === 'Pitta' ? 'Neem Powder' : 'Tulsi Tea'}`,
                  desc: `Pure ${dominantDosha === 'Vata' ? 'Brahmi' : dominantDosha === 'Pitta' ? 'Neem' : 'Tulsi'} for ${dominantDosha === 'Vata' ? 'mental clarity and focus' : dominantDosha === 'Pitta' ? 'skin health and cooling' : 'respiratory health'}`,
                  price: '$24.99',
                },
                {
                  name: 'Sesame Oil for Massage',
                  desc: 'Cold-pressed sesame oil for daily abhyanga',
                  price: '$16.99',
                },
              ].map((product) => (
                <div key={product.name} className="product">
                  <span>
                    {product.name}
                    <br />
                    {product.desc}
                  </span>
                  <span>{product.price}</span>
                  <button>Buy Now</button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta">
            <p>
              Ready for Personalized Guidance?
              <br />
              Our AI wellness guide is ready to answer your specific questions and
              provide tailored advice for your {dominantDosha} constitution.
            </p>
            <button onClick={() => navigate('/chatbot')}>
              Dashoard
            </button>
          </div>
        </>
      ) : (
        <p className="result-loading">Loading result...</p>
      )}
    </div>
  );
};

export default Result;
