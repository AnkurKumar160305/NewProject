import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  FaLeaf,
  FaBookOpen,
  FaUtensils,
  FaSeedling,
  FaSun,
} from "react-icons/fa";
import "../Result.css";

// SECURITY NOTE: API key should be handled server-side in production.
const genAI = new GoogleGenerativeAI({
  apiKey: "AIzaSyD3D6khTlUIuH--RUJ2aS5cN44ceAoEfjI",
});

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const finalResult = state?.finalResult;
  const name = state?.name || localStorage.getItem("name") || "Friend";
  const [loading, setLoading] = useState(true);
  const [structuredData, setStructuredData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!finalResult) {
      setError("No result category found. Redirecting...");
      setTimeout(() => navigate("/"), 3000);
      return;
    }

    const fetchAIContent = async () => {
      setLoading(true);
      setError(null);

      const prompt =
        "You are a disciplined Ayurveda assistant. Reply ONLY with a valid, minified JSON object. NO markdown, no explanation, no code blocks. User's dosha is '" +
        finalResult +
        "'. Structure:\n" +
        '{ "title": "🌿 Your Ayurveda Profile", ' +
        '"dosha": "🔎 Dominant Dosha: ' +
        finalResult +
        '", ' +
        '"description": "🧘 A short description of the ' +
        finalResult +
        ' dosha (max 100 characters)", ' +
        '"diet": {"title": "🥗 Recommended Diet", "items": ["Item 1 (reason)", "Item 2", "Item 3"]}, ' +
        '"herbs": {"title": "🌱 Suggested Herbs", "items": ["Herb 1 (benefit)", "Herb 2", "Herb 3"]}, ' +
        '"lifestyle": {"title": "🌞 Lifestyle Tips", "items": ["Tip 1", "Tip 2", "Tip 3"]}, ' +
        '"learnings": {"title": "📖 Learnings & Mindfulness", "items": ["Lesson 1", "Practice 2", "Mindset 3"]}, ' +
        '"image": "A royalty-free image URL from Unsplash or Pexels related to ' +
        finalResult +
        '" }';

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyD3D6khTlUIuH--RUJ2aS5cN44ceAoEfjI`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }], role: "user" }],
              generationConfig: {
                temperature: 0.8,
                topP: 0.9,
                maxOutputTokens: 2048,
                responseMimeType: "application/json",
              },
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Response Error:", response.status, errorData);
          if (response.status === 429) {
            throw new Error("Too many requests. Please wait and try again.");
          } else {
            throw new Error(
              `API error: ${response.status} - ${
                errorData.error?.message || response.statusText
              }`
            );
          }
        }

        const data = await response.json();
        let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        console.log("Raw API Response:", text); // Debug: Log raw response

        if (!text) throw new Error("Invalid AI response.");

        let jsonString = text.trim();

        // Remove code block wrapper if present
        jsonString = jsonString
          .replace(/^```(?:json)?/, "")
          .replace(/```$/, "")
          .trim();

        // Extract JSON inside brackets
        const jsonMatch = jsonString.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error("No valid JSON object found in response.");
        }

        jsonString = jsonMatch[0];
        // Remove trailing commas
        jsonString = jsonString.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");

        let structured;
        try {
          structured = JSON.parse(jsonString);
        } catch (parseError) {
          console.error(
            "JSON Parse Error:",
            parseError.message,
            "Raw JSON:",
            jsonString
          );
          throw new Error("Invalid JSON format from AI response.");
        }

        setStructuredData(structured);
        console.log("Parsed data:", structured);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load Ayurvedic info.");
      } finally {
        setLoading(false);
      }
    };

    fetchAIContent();
  }, [finalResult, navigate]);

  const doshaClass = finalResult ? `dosha-${finalResult.toLowerCase()}` : "";
  const truncateText = (text, maxLength = 100) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return url.startsWith("http://") || url.startsWith("https://");
    } catch {
      return false;
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState("Tulsi");

  const handleExploreClick = () => {
    const herb =
      structuredData?.herbs?.items?.[0]?.split(" ")[0] || "NoHerbFound";
    setSelectedHerb(herb);
    setShowModal(true);
  };

  const herbLinks = {
    Tulsi: [
      {
        name: "Dabur Tulsi Drops – Official Site",
        url: "https://www.daburinternational.com/uae/product/dabur-tulsi-drops",
      },
      {
        name: "Himalaya Tulasi Syrup – Product Page",
        url: "https://himalayawellness.in/products/tulasi-syrup",
      },
    ],
    Ashwagandha: [
      {
        name: "Dabur Ashwagandha Churna",
        url: "https://www.dabur.com/ayurveda/herbal-supplements/dabur-ashwagandha-churna",
      },
      {
        name: "Himalaya Ashwagandha Tablets",
        url: "https://himalayawellness.in/products/ashvagandha-tablets",
      },
    ],
    Brahmi: [
      {
        name: "Organic India Brahmi Capsules",
        url: "https://www.organicindia.com/product/brahmi-capsules",
      },
      {
        name: "Himalaya Brahmi Tablets",
        url: "https://himalayawellness.in/products/brahmi-tablets",
      },
    ],
    Triphala: [
      {
        name: "Organic India Triphala",
        url: "https://www.organicindia.com/product/triphala-capsules",
      },
      {
        name: "Baidyanath Triphala Churna",
        url: "https://www.baidyanath.co/product/triphala-churna",
      },
    ],
  };

  return (
    <div className={`ai-layout-wrapper ${doshaClass}`}>
      <h1 className="ai-layout-header">
        <span className="highlight">Ayurveda AI</span> Results for {name}
      </h1>

      {loading && (
        <p className="ai-loading">Loading personalized guidance...</p>
      )}
      {error && <p className="ai-error">{error}</p>}

      {!loading && structuredData && (
        <>
          <div className="ai-section profile-section">
            <div className="ai-section-content">
              <h2 className="ai-section-title">{structuredData.title}</h2>
              {structuredData.dosha && (
                <p className="ai-section-dosha">{structuredData.dosha}</p>
              )}
              <p className="ai-section-text">
                {truncateText(structuredData.description, 100)}
              </p>
            </div>
            <div>
              {structuredData.image && isValidUrl(structuredData.image) ? (
                <img
                  src={structuredData.image}
                  alt={`Ayurveda visual for ${structuredData.dosha}`}
                  className="ai-section-image"
                  onError={(e) => {
                    console.log("Original image URL failed:", e.target.src);
                    const fallbackUrl =
                      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    e.target.src = fallbackUrl;
                    console.log("Using fallback URL:", fallbackUrl);
                  }}
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Default Ayurveda visual"
                  className="ai-section-image"
                />
              )}
            </div>
          </div>
          <div className="ai-sections-wrapper">
            {structuredData.diet?.items?.length > 0 && (
              <div className="ai-section diet-section">
                <h3>
                  <FaUtensils className="react-icon" />
                  {structuredData.diet.title || "Recommended Diet"}
                </h3>
                <ul className="ai-section-list">
                  {structuredData.diet.items.slice(0, 3).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {structuredData.herbs?.items?.length > 0 && (
              <div className="ai-section herbs-section">
                <h3>
                  <FaSeedling className="react-icon" />
                  {structuredData.herbs.title || "Suggested Herbs"}
                </h3>
                <ul className="ai-section-list">
                  {structuredData.herbs.items.slice(0, 3).map((herb, index) => (
                    <li key={index}>{herb}</li>
                  ))}
                </ul>
              </div>
            )}
            {structuredData.lifestyle?.items?.length > 0 && (
              <div className="ai-section lifestyle-section">
                <h3>
                  <FaSun className="react-icon" />
                  {structuredData.lifestyle.title || "Lifestyle Tips"}
                </h3>
                <ul className="ai-section-list">
                  {structuredData.lifestyle.items
                    .slice(0, 3)
                    .map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                </ul>
              </div>
            )}
            {structuredData.learnings?.items?.length > 0 && (
              <div className="ai-section learnings-section">
                <h3>
                  <FaBookOpen className="react-icon" />
                  {structuredData.learnings.title || "Learnings & Mindfulness"}
                </h3>
                <ul className="ai-section-list">
                  {structuredData.learnings.items
                    .slice(0, 3)
                    .map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <div className="ai-section cta-section">
            <h2 className="cta-heading">
              🌿 New Arrival:{" "}
              {structuredData?.herbs?.items?.[0] || "Tulsi Vitality Drops"}
            </h2>
            <p className="cta-description">
              {structuredData?.diet?.items?.[0] ||
                "Boost your immunity naturally."}
            </p>
            <button className="cta-button" onClick={handleExploreClick}>
              Explore the Product
            </button>
          </div>
          <button onClick={() => navigate("/dashboard")} className="dashboard">
            🌿 Go to Dashboard
          </button>

          {showModal && (
            <div className="modal-backdrop">
              <div className="modal">
                <h3 className="text-xl font-semibold mb-2">
                  {selectedHerb} Product References
                </h3>

                {herbLinks[selectedHerb] &&
                herbLinks[selectedHerb].length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {herbLinks[selectedHerb].map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-gray-500 italic mt-2">
                    🚫 No New Arrival Products Available for{" "}
                    <strong>{selectedHerb}</strong>.
                  </div>
                )}

                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {!loading && !error && !structuredData && (
        <p>No structured data returned from AI.</p>
      )}
    </div>
  );
};

export default Result;
