import React, { useState } from "react";
import "../Learn.css";
import leafLogo from "../assets/leaf logo.png";

function Learn() {
  const [visibleSection, setVisibleSection] = useState("page1");
  const [activeTab, setActiveTab] = useState("agni");

  const handleToggle = (section) => setVisibleSection(section);
  const handleAgniTab = (tab) => setActiveTab(tab);

  return (
    <div className="hero">
      {/* === Navigation Buttons === */}
      <div className="box1">
        <button onClick={() => handleToggle("page1")}>🌿 Introduction</button>
        <button onClick={() => handleToggle("dosha")}>⚖️ The Doshas</button>
        <button onClick={() => handleToggle("page3")}>🧠 Principles</button>
        <button onClick={() => handleToggle("page4")}>🍽️ Practice</button>
      </div>


      {/* === Section 1: Introduction === */}
      {visibleSection === "page1" && (
      <section className="page1">
        <div className="intro-box">
          <div className="intro-logo">
            <img src={leafLogo} alt="Tridosha Leaf Logo" />
          </div>
          <div className="intro-content">
            <h1>What is Ayurveda?</h1>
            <h3>The Science of Life and Longevity</h3>
            <p>
              Rooted in ancient Indian wisdom, <strong>Ayurveda</strong> is a holistic system of
              medicine that dates back over 5,000 years. Derived from the Sanskrit words “<em>Ayur</em>” (life)
              and “<em>Veda</em>” (science), Ayurveda emphasizes harmony between the mind, body, and spirit.
              It promotes health through balanced nutrition, mindful living, herbal remedies, and natural therapies.
            </p>
          </div>
        </div>
      </section>
      )}


      {/* === Section 2: The Doshas === */}
{visibleSection === "dosha" && (
  <div className="dosha">
    <div className="over">
      <h2>The Three Doshas</h2>
      <p>Your unique mind-body constitution based on the five elements</p>
    </div>

    <div className="dosha-row">
      {/* === Vata === */}
      <div className="vata">
        <div className="logoname">
          <div className="logoimg">🌬️</div>
          <div className="name">
            <span className="badiheading">Vata</span>
            <span>Air & Space</span>
          </div>
        </div>
        <p><strong>Qualities:</strong> Cold, light, dry, irregular, mobile</p>
        <p><strong>Balanced:</strong> Creative, energetic, flexible</p>
        <p><strong>Imbalanced:</strong> Anxiety, dry skin, constipation</p>
      </div>

      {/* === Pitta === */}
      <div className="pitta">
        <div className="logoname">
          <div className="logoimg">🔥</div>
          <div className="name">
            <span className="badiheading">Pitta</span>
            <span>Fire & Water</span>
          </div>
        </div>
        <p><strong>Qualities:</strong> Hot, sharp, intense, oily</p>
        <p><strong>Balanced:</strong> Intelligent, courageous, good digestion</p>
        <p><strong>Imbalanced:</strong> Anger, inflammation, ulcers</p>
      </div>

      {/* === Kapha === */}
      <div className="kapha">
        <div className="logoname">
          <div className="logoimg">🌊</div>
          <div className="name">
            <span className="badiheading">Kapha</span>
            <span>Earth & Water</span>
          </div>
        </div>
        <p><strong>Qualities:</strong> Heavy, slow, steady, moist</p>
        <p><strong>Balanced:</strong> Loving, calm, strong immunity</p>
        <p><strong>Imbalanced:</strong> Lethargy, weight gain, congestion</p>
      </div>
    </div>
  </div>
)}


      {/* === Section 3: Principles === */}
      {visibleSection === "page3" && (
        <div className="page3">
          <button className="buttons" onClick={() => handleAgniTab("agni")}>
            <span>Agni – The Digestive Fire</span>
          </button>
          {activeTab === "agni" && (
            <div className="agni">
              <p>
                Agni is the biological fire that governs digestion and metabolism. 
                A strong Agni supports good health, immunity, and vitality.
              </p>
            </div>
          )}

          <button className="buttons" onClick={() => handleAgniTab("ama")}>
            <span>Ama – Toxins</span>
          </button>
          {activeTab === "ama" && (
            <div className="ama">
              <p>
                Ama is the toxic residue that builds up when digestion is weak or incomplete. 
                It is the root cause of most diseases in Ayurveda.
              </p>
            </div>
          )}

          <button className="buttons" onClick={() => handleAgniTab("ojas")}>
            <span>Ojas – Vital Essence</span>
          </button>
          {activeTab === "ojas" && (
            <div className="ojas">
              <p>
                Ojas is the essence of health, immunity, and strength. It is the final by-product 
                of proper digestion and nourishes the body and mind.
              </p>
            </div>
          )}

          <button className="buttons" onClick={() => handleAgniTab("dinacharya")}>
            <span>Dinacharya – Daily Routine</span>
          </button>
          {activeTab === "dinacharya" && (
            <div className="dinacharya">
              <p>
                Dinacharya is a daily routine that aligns your body and mind with nature’s rhythms. 
                It includes waking early, oil pulling, tongue scraping, meditation, and more.
              </p>
            </div>
          )}
        </div>
      )}

      {/* === Section 4: Practice === */}
      {visibleSection === "page4" && (
        <div className="page4">
          <div className="firstdiv">
            <div className="leftdibba">
              <h2 style={{ color: "#e6c20f" }}>Dietary Guidelines</h2>
              <p>
                In Ayurveda, taste (Rasa) plays a key role in diet. A balanced meal includes all six tastes:
              </p>
              <ul>
                <li><strong>Sweet (Madhura):</strong> Nourishing, builds tissues</li>
                <li><strong>Sour (Amla):</strong> Stimulates digestion, improves appetite</li>
                <li><strong>Salty (Lavana):</strong> Enhances taste, balances Vata</li>
                <li><strong>Pungent (Katu):</strong> Increases metabolism, clears sinuses</li>
                <li><strong>Bitter (Tikta):</strong> Detoxifying, supports liver</li>
                <li><strong>Astringent (Kashaya):</strong> Absorbs water, tightens tissues</li>
              </ul>
              <p>
                Meals should be fresh, warm, and suited to your dosha. Avoid cold, processed foods and overeating.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Learn;
