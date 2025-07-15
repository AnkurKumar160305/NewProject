import React, { useState } from "react";
import "../Symptoms.css";

const symptomsList = [
  "Fatigue", "Sleep Issues", "Digestive Problems", "Stress", "Anxiety", "Headaches",
  "Joint Pain", "Skin Issues", "Hair Fall", "Weight Gain", "Low Energy", "Mood Swings",
  "Concentration Issues", "Back Pain", "Bloating", "Constipation", "Irregular Periods", "Cold Hands/Feet"
];

export default function SymptomsForm() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [description, setDescription] = useState("");

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    const trimmedDescription = description.trim();

    if (trimmedDescription || selectedSymptoms.length > 0) {
      const submission = {
        symptoms: selectedSymptoms,
        description: trimmedDescription,
      };
      console.log("Submitted:", submission);
      alert("Your symptoms were submitted. Check the console for data.");
    } else {
      alert("Please enter a description or select symptoms.");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto font-sans">
      {/* Header */}
      <header className="text-center mb-6">
        <img src="/images/like.png" alt="like icon" className="mx-auto w-10" />
        <h1 className="text-2xl font-bold mt-4">Share Your Health Concerns</h1>
        <p className="text-gray-600 mt-2">
          Describe your symptoms or health goals. Our AI will analyze them through an Ayurvedic lens.
        </p>
      </header>

      {/* Form Section */}
      <main>
        <div className="mb-4">
          <div className="flex items-center gap-2 text-orange-600 font-medium mb-1">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5a3 3 0 1 0-5.997.125..." />
            </svg>
            <p>Describe Your Symptoms</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Be as detailed as possible. Include how you feel physically, mentally, and emotionally.
          </p>
        </div>

        {/* Description Textarea */}
        <textarea
          className="w-full border rounded p-3 mb-4 outline-none transition duration-200"
          style={{
            borderColor: description.trim() ? "#f97316" : "#c4d1c4",
          }}
          placeholder="For example: I've been feeling very tired lately, have trouble sleeping, and feel anxious..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          aria-label="Symptom description"
        ></textarea>

        {/* Symptom Tags */}
        <p className="font-medium mb-2">Or select common symptoms (optional)</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {symptomsList.map((symptom) => (
            <button
              key={symptom}
              onClick={() => toggleSymptom(symptom)}
              type="button"
              aria-pressed={selectedSymptoms.includes(symptom)}
              className={`px-3 py-1 rounded-full border text-sm transition duration-200 ${
                selectedSymptoms.includes(symptom)
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black border-gray-300 hover:bg-orange-100"
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded transition hover:bg-orange-600 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={!description.trim() && selectedSymptoms.length === 0}
        >
          <img src="/images/paper-airplane.png" alt="Submit" className="w-5 h-5" />
          Get Personalized Recommendations
        </button>
      </main>
    </div>
  );
}
