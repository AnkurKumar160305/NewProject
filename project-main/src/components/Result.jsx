import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Result.css';

const Result = () => {
  const [dominantDosha, setDominantDosha] = useState(null);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers"));
    if (!storedAnswers) {
      navigate("/quiz");
      return;
    }

    setAnswers(storedAnswers);
    calculateDosha(storedAnswers);
  }, [navigate]);

  const calculateDosha = (answers) => {
    const vataKeywords = ["light", "variable", "quick", "anxious", "cold"];
    const pittaKeywords = ["muscle", "intense", "sharp", "angry", "hot"];
    const kaphaKeywords = ["heavy", "steady", "slow", "calm", "warm"];

    let vata = 0,
      pitta = 0,
      kapha = 0;

    answers.forEach((answer) => {
      const lower = answer.toLowerCase();
      if (vataKeywords.some((word) => lower.includes(word))) vata++;
      if (pittaKeywords.some((word) => lower.includes(word))) pitta++;
      if (kaphaKeywords.some((word) => lower.includes(word))) kapha++;
    });

    const max = Math.max(vata, pitta, kapha);
    if (vata === max) setDominantDosha("Vata");
    else if (pitta === max) setDominantDosha("Pitta");
    else setDominantDosha("Kapha");
  };

  const descriptions = {
    Vata: {
      desc: "You are energetic, creative, and enthusiastic, but may need grounding and warmth.",
      tips: [
        "Stick to a regular schedule",
        "Eat warm, moist, grounding foods",
        "Avoid overstimulation and get plenty of rest",
      ],
    },
    Pitta: {
      desc: "You are focused, ambitious, and driven, but may need to cool down and relax.",
      tips: [
        "Avoid spicy, oily, or fried foods",
        "Practice calming hobbies like nature walks or meditation",
        "Prioritize balance over perfection",
      ],
    },
    Kapha: {
      desc: "You are stable, compassionate, and calm, but may need stimulation and movement.",
      tips: [
        "Incorporate regular, vigorous exercise",
        "Favor light, dry, and spicy foods",
        "Avoid oversleeping or inactivity",
      ],
    },
  };

  return (
    <div className="result-container">
      <h1 className="result-title">Your Dosha Result</h1>

      {dominantDosha ? (
        <div className="result-box">
          <h2 className="result-subtitle">
            Dominant Dosha: <span className="highlight">{dominantDosha}</span>
          </h2>
          <p className="result-description">{descriptions[dominantDosha].desc}</p>

          <div className="result-tips">
            <h3>Tips for Balance:</h3>
            <ul>
              {descriptions[dominantDosha].tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="result-loading">Loading result...</p>
      )}
    </div>
  );
};

export default Result;
