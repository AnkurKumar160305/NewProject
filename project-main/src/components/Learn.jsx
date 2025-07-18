import React, { useState } from "react";
import "../Learn.css";
import leafLogo from "../assets/leaf logo.png";
import { Wind, Flame, Moon } from "lucide-react";

function Learn() {
  const [visibleSection, setVisibleSection] = useState("page1");
  const [activeTab, setActiveTab] = useState("agni");

  const handleToggle = (section) => {
    setVisibleSection(section);
    if (section === "page3") {
      setActiveTab("agni");
    }
  };
  const handleAgniTab = (tab) => setActiveTab(tab);

  return (
    <div className="learn">
      <div className="hero-learn">
        {/* === Navigation Buttons === */}
        <div className="box1">
          <button onClick={() => handleToggle("page1")} className={visibleSection === "page1" ? "active" : ""}>Introduction</button>
          <button onClick={() => handleToggle("page2")} className={visibleSection === "page2" ? "active" : ""}>The Doshas</button>
          <button onClick={() => handleToggle("page3")} className={visibleSection === "page3" ? "active" : ""}>Principles</button>
          <button onClick={() => handleToggle("page4")} className={visibleSection === "page4" ? "active" : ""}>Practice</button>
        </div>

        {/* === Section 1: Introduction === */}
        {visibleSection === "page1" && (
          <div className="page1 fade-in-up">
            <div className="box2">
              <div className="logo1">
                <img src={leafLogo} alt="Tridosha leaf logo" />
              </div>
              <h1>What is Ayurveda?</h1>
              <h3>The Science of Life and Longevity</h3>
              <p>
                Ayurveda is a 5,000-year-old system of natural healing that originated in India.
                The word "Ayurveda" comes from Sanskrit: "Ayur" (life) and "Veda" (knowledge or science).
              </p>
            </div>
            <div className="intro-section">
              <div className="c-container">
                <div className="intro-card">
                  <h2><span>🧬</span>Philosophy</h2>
                  <ul>
                    <li>Mind, body, and spirit are interconnected</li>
                    <li>Prevention is better than cure</li>
                    <li>Each person is unique</li>
                    <li>Natural healing is most effective</li>
                    <li>Balance leads to health</li>
                  </ul>
                </div>
                <div className="intro-card">
                  <h2><span>❤️</span>Benefits</h2>
                  <ul>
                    <li>Improved digestion and metabolism</li>
                    <li>Better sleep and energy levels</li>
                    <li>Reduced stress and anxiety</li>
                    <li>Enhanced immunity</li>
                    <li>Greater mental clarity</li>
                  </ul>
                </div>
              </div>

              <div className="intro-elements">
                <h2>The Five Elements (Panchamahabhutas)</h2>
                <div className="elements-grid">
                  <div className="element-item">
                    <div>🌍</div>
                    <div style={{ color: '#2b7a78' }}>Earth</div>
                    <div>Stability, Structure</div>
                  </div>
                  <div className="element-item">
                    <div>💧</div>
                    <div style={{ color: '#0077b6' }}>Water</div>
                    <div>Flow, Cohesion</div>
                  </div>
                  <div className="element-item">
                    <div>🔥</div>
                    <div style={{ color: '#d00000' }}>Fire</div>
                    <div>Transformation</div>
                  </div>
                  <div className="element-item">
                    <div>🌬️</div>
                    <div style={{ color: '#3f88c5' }}>Air</div>
                    <div>Movement</div>
                  </div>
                  <div className="element-item">
                    <div>✨</div>
                    <div style={{ color: '#8338ec' }}>Space</div>
                    <div>Consciousness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === Section 2: The Doshas === */}
        {visibleSection === "page2" && (
          <div className="page2 fade-in-up">
            <div className="over">
              <h2>The Three Doshas</h2>
              <p>Your unique mind-body constitution based on the five elements</p>
            </div>

            {/* === Vata === */}
            <div className="vata-learn">
              <div className="logoname-learn">
                <div className="logoimg-learn">
                  <Wind size={64} />
                </div>
                <div className="doshname">
                  <span className="badiheading">Vata</span>
                  <span>Air & Space</span>
                </div>
              </div>
              <div className="zaruri">
                <div className="dibba1">
                  <span className="chotiheading">Qualities</span><br />
                  <span className="qsub">Light, Dry, Cold, Rough, Subtle, Mobile</span><br /><br />
                  <span className="chotiheading">When Balanced</span><br />
                  <ul className="points">
                    <li>Creative and imaginative</li>
                    <li>Quick thinking</li>
                    <li>Energetic when balanced</li>
                    <li>Light sleeper</li>
                    <li>Variable appetite</li>
                  </ul>
                </div>
                <div className="dibba2">
                  <span className="chotiheading">When Imbalanced</span>
                  <ul>
                    <li>Anxiety and worry</li>
                    <li>Insomnia</li>
                    <li>Dry skin</li>
                    <li>Constipation</li>
                    <li>Joint pain</li>
                  </ul>
                  <span className="chotiheading">Balancing Tips</span>
                  <ul>
                    <li>Warm, cooked foods</li>
                    <li>Regular routine</li>
                    <li>Oil massage</li>
                    <li>Meditation</li>
                    <li>Adequate rest</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* === Pitta === */}
            <div className="pitta-learn">
              <div className="logoname-learn">
                <div className="logoimg-learn">
                  <Flame size={64} />
                </div>
                <div className="doshname">
                  <span className="badiheading">Pitta</span>
                  <span>Fire & Water</span><br />
                </div>
              </div>

              <div className="zaruri">
                <div className="dibba1">
                  <span className="chotiheading">Qualities</span><br />
                  <span className="qsub">Hot, Sharp, Light, Liquid, Spreading, Oily</span><br /><br />
                  <span className="chotiheading">When Balanced</span><br />
                  <ul className="points">
                    <li>Strong digestion</li>
                    <li>Natural leader</li>
                    <li>Focused and determined</li>
                    <li>Medium build</li>
                    <li>Good appetite</li>
                  </ul>
                </div>
                <div className="dibba2">
                  <span className="chotiheading">When Imbalanced</span>
                  <ul>
                    <li>Anger and irritability</li>
                    <li>Skin rashes</li>
                    <li>Heartburn</li>
                    <li>Excessive heat</li>
                    <li>Joint pain</li>
                    <li>Impatience</li>
                  </ul>
                  <span className="chotiheading">Balancing Tips</span>
                  <ul>
                    <li>Cool, sweet foods</li>
                    <li>Avoid spicy foods</li>
                    <li>Cool environments</li>
                    <li>Moderation</li>
                    <li>Calming activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="kapha-learn">
              <div className="logoname-learn">
                <div className="logoimg-learn">
                  <Moon size={64} />
                </div>
                <div className="doashname">
                  <span className="badiheading">Kapha</span>
                  <span>Earth & Water</span><br />
                </div>
              </div>

              <div className="zaruri">
                <div className="dibba1">
                  <span className="chotiheading">Qualities</span><br />
                  <span className="qsub">Heavy, Slow, Cold, Oily, Smooth, Dense</span><br /><br />
                  <span className="chotiheading">When Balanced</span><br />
                  <ul className="points">
                    <li>Calm and stable</li>
                    <li>Strong immunity</li>
                    <li>Loyal and compassionate</li>
                    <li>Slow digestion</li>
                    <li>Deep sleep</li>
                  </ul>
                </div>
                <div className="dibba2">
                  <span className="chotiheading">When Imbalanced</span>
                  <ul>
                    <li>Weight gain</li>
                    <li>Lethargy</li>
                    <li>Depression</li>
                    <li>Congestion</li>
                    <li>Attachment</li>
                  </ul>
                  <span className="chotiheading">Balancing Tips</span>
                  <ul>
                    <li>Light, spicy foods</li>
                    <li>Regular exercise</li>
                    <li>Stimulating activities</li>
                    <li>Warm environments</li>
                    <li>Variety in routine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === Section 3: Principles === */}
        {visibleSection === "page3" && (
          <div className="page3 fade-in-up">
            <button className={`buttons ${activeTab === "agni" ? "active" : ""}`} onClick={() => handleAgniTab("agni")}>
              <span>Agni – The Digestive Fire</span>
            </button>
            {activeTab === "agni" && (
              <div className="agni fade-in">
                <p>
                  Agni is considered the cornerstone of health in Ayurveda. It's
                  responsible for digestion, absorption, and transformation of food
                  into energy and nutrients.
                </p>
                <div className="listbox">
                  <div className="listbox1">
                    <span className="badiheading">Strong Agni Signs</span>
                    <ul>
                      <li>Regular appetite</li>
                      <li>Good digestion</li>
                      <li>Clear complexion</li>
                      <li>High energy levels</li>
                      <li>Regular elimination</li>
                    </ul>
                  </div>
                  <div className="listbox2">
                    <span className="badiheading">Weak Agni Signs</span>
                    <ul>
                      <li>Poor appetite</li>
                      <li>Indigestion</li>
                      <li>Fatigue after meals</li>
                      <li>Gas and bloating</li>
                      <li>Irregular bowel movements</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <button className={`buttons ${activeTab === "ama" ? "active" : ""}`} onClick={() => handleAgniTab("ama")}>
              <span>Ama – Toxins</span>
            </button>
            {activeTab === "ama" && (
              <div className="ama fade-in">
                <p>
                  Ama represents undigested food particles and metabolic waste that
                  accumulate in the body when digestion is weak, leading to various
                  health issues.
                </p>
                <span className="badiheading">Signs of Ama</span>
                <ul>
                  <li>Thick coating on tongue</li>
                  <li>Bad breath</li>
                  <li>Feeling heavy or sluggish</li>
                  <li>Joint stiffness</li>
                  <li>Mental fog</li>
                </ul>
              </div>
            )}

            <button className={`buttons ${activeTab === "ojas" ? "active" : ""}`} onClick={() => handleAgniTab("ojas")}>
              <span>Ojas – Vital Essence</span>
            </button>
            {activeTab === "ojas" && (
              <div className="ojas fade-in">
                <p>
                  Ojas is the subtle essence of all vital fluids, representing
                  immunity, strength, and the body's natural healing capacity.
                </p>
                <span className="badiheading">Building Ojas</span>
                <ul>
                  <li>Consume fresh, organic foods</li>
                  <li>Practice meditation and yoga</li>
                  <li>Get adequate sleep</li>
                  <li>Maintain positive relationships</li>
                  <li>Avoid stress and overexertion</li>
                </ul>
              </div>
            )}

            <button className={`buttons ${activeTab === "daily" ? "active" : ""}`} onClick={() => handleAgniTab("daily")}>
              <span>Dinchariya – Daily Routine</span>
            </button>
            {activeTab === "daily" && (
              <div className="daily fade-in">
                <p>
                  Ayurveda emphasizes the importance of aligning daily activities
                  with natural rhythms to maintain balance and health.
                </p>
                <div className="timebox">
                  <div className="timebox1">
                    <span>6 AM - 10 AM</span><br />
                    <span>Kapha Time</span><br />
                    <span>Slow, Steady, Energy</span><br />
                  </div>
                  <div className="timebox2">
                    <span>10 AM - 2 PM</span><br />
                    <span>Pitta Time</span><br />
                    <span>Peak Digestion</span><br />
                  </div>
                  <div className="timebox3">
                    <span>2 PM - 6 PM</span><br />
                    <span>Vata Time</span><br />
                    <span>Mental Activity</span><br />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* === Section 4: Practice === */}
        {visibleSection === "page4" && (
          <div className="firstdiv fade-in-up">
            <div className="firstdiv1">
              <div className="leftdibba">
                <span className="badiheading" style={{ color: '#e6c20f' }}>Dietary Guidelines</span>
                <p>Sweet (Madhura)</p>
                <p>Sour (Amla)</p>
                <p>Salty (Lavana)</p>
                <p>Pungent (Katu)</p>
                <p>Bitter (Tikta)</p>
                <p>Astringent (Kashaya)</p>
              </div>
              <div className="rightdibba">
                <span className="badiheading" style={{ color: '#e6c20f' }}>Dosha & Elements</span>
                <p className="pill">Vata: Air + Space</p>
                <p className="pill">Pitta: Fire + Water</p>
                <p className="pill">Kapha: Earth + Water</p>
                <p className="text-content">These are the primary elemental combinations that form each Dosha.</p>
              </div>
            </div>
            <div className="firstdiv2">
              <span className="badiheading" style={{ color: '#e6c20f' }}>Lifestyle Practices</span><br /><br />
              <span className="chotiheading">Oil Pulling (Gandusha):</span><span>Swish oil in mouth for 10-15 minutes</span><br />
              <span className="chotiheading">Abhyanga:</span><span>Daily self-massage with warm oil</span><br />
              <span className="chotiheading">Pranayama:</span><span>Breathing exercises for energy and calm</span><br />
              <span className="chotiheading">Meditation:</span><span> Daily practice for mental clarity</span><br />
              <span className="chotiheading">Yoga:</span><span> Physical postures for flexibility and strength</span><br />
              <span className="chotiheading">Early Rising:</span><span>Wake up before sunrise</span>
            </div>
            <div className="secondiv">
              <span className="badiheading" style={{ color: '#d00000' }}>Seasonal Living (Ritucharya)</span>
              <div className="secondcontent">
                <div className="secondiv1">
                  <span className="chotiheading" style={{ color: '#1d4ed8' }}>Spring (Kapha Season)</span>
                  <ul>
                    <li>Light, warm foods</li>
                    <li>Detoxification practices</li>
                    <li>Increased physical activity</li>
                    <li>Avoid heavy, oily foods</li>
                  </ul>
                </div>
                <div className="secondiv2">
                  <span className="chotiheading" style={{ color: '#bb1c1c' }}>Summer (Pitta Season)</span>
                  <ul>
                    <li>Cool, sweet foods</li>
                    <li>Avoid spicy foods</li>
                    <li>Stay hydrated</li>
                    <li>Moderate exercise</li>
                  </ul>
                </div>
                <div className="secondiv3">
                  <span className="chotiheading" style={{ color: '#0e7497' }}>Fall/Winter (Vata Season)</span>
                  <ul>
                    <li>Warm, nourishing foods</li>
                    <li>Regular routine</li>
                    <li>Oil massage</li>
                    <li>Adequate rest</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Learn;