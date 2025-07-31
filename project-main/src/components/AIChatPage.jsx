import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../AIChatPage.css";

const AIChatPage = () => {
  const location = useLocation();
  const { username, dosha, prompt } = location.state || {};
  const [structuredData, setStructuredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAIResponse = async () => {
      setLoading(true);
      try {
        const genAI = new GoogleGenerativeAI(
          "AIzaSyDq6kqg-J9i4MPAfyR05QhcUkEd13NXJkE"
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent([prompt]);
        const response = await result.response;
        const text = await response.text();
        console.log("Raw AI Response:", text);

        // Clean and attempt to parse JSON
        try {
          const cleanText = text.replace(/```(?:json)?|```/g, "").trim();
          const jsonData = JSON.parse(cleanText);
          console.log("Parsed StructuredData:", jsonData);
          setStructuredData(jsonData);
        } catch (jsonError) {
          console.warn("Failed to parse JSON, showing as plain text.");
          setStructuredData({ rawText: text });
        }
      } catch (error) {
        console.error("AI Fetch Error:", error);
        setStructuredData({ error: "Error fetching AI response." });
      } finally {
        setLoading(false);
      }
    };

    if (prompt) fetchAIResponse();
  }, [prompt]);

  return (
    <div className="ai-layout-wrapper">
      <div className="ai-layout-header">
        <h2>Welcome, {username}</h2>
        <p>
          Your Dosha: <span className="highlight">{dosha}</span>
        </p>
      </div>

      {loading && <div className="ai-loading">Fetching personalized guidance...</div>}

      {structuredData?.error && <div className="ai-error">{structuredData.error}</div>}

      {structuredData && !structuredData.error && (
        <div className="ai-sections-wrapper">
          <div className="ai-section ai-main-guidance">
            <div className="ai-text-content">
              {structuredData.title && <h3 className="ai-section-title">{structuredData.title}</h3>}
              {structuredData.summary && <p className="ai-section-text">{structuredData.summary}</p>}
            </div>
            <div className="ai-image-wrapper">
              <img
                src={
                  // structuredData.image ||
                  "https://www.viralspices.com/wp-content/uploads/2021/10/Importance-of-herbs-in-daily-life.jpg"
                }
                alt="Ayurveda Guidance"
                className="ai-section-image"
              />
            </div>
          </div>

          {Array.isArray(structuredData.tips) && (
            <div className="ai-section">
              <h4 className="ai-section-title">Tips</h4>
              <ul className="ai-section-list">
                {structuredData.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(structuredData.herbs) && (
            <div className="ai-section">
              <h4 className="ai-section-title">Recommended Herbs</h4>
              <ul className="ai-section-list">
                {structuredData.herbs.map((herb, idx) => (
                  <li key={idx}>{herb}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(structuredData.lifestyle) && (
            <div className="ai-section">
              <h4 className="ai-section-title">Lifestyle Advice</h4>
              <ul className="ai-section-list">
                {structuredData.lifestyle.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {structuredData.rawText && (
            <div className="ai-section">
              <h4 className="ai-section-title">AI Response</h4>
              <pre className="ai-raw-text">{structuredData.rawText}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIChatPage;
