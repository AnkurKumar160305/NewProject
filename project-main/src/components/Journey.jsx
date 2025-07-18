import React from "react";
import '../Journey.css';

import {
  Brain,
  Heart,
  MessageCircle,
  Calendar,
} from "lucide-react"; 

const steps = [
  {
    icon: Brain,
    title: "AI Assessment",
    desc: "Advanced AI analyzes your responses to determine your unique dosha constitution.",
  },
  {
    icon: Heart,
    title: "Personalized Plan",
    desc: "Receive custom diet, lifestyle, and herbal recommendations tailored to you.",
  },
  {
    icon: MessageCircle,
    title: "AI Wellness Chat",
    desc: "Instant answers to your wellness questions from our AI Guide.",
  },
  {
    icon: Calendar,
    title: "Progress Tracking",
    desc: "Monitor your wellness journey with insights and adaptive recommendations.",
  },
];

const Journey = () => (
  <section className="journey">
    <h2>Your Wellness Journey</h2>
    <div className="journey-steps">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div className={`step step-${i}`} key={i}>
            <div className="icon">
              <Icon size={40} strokeWidth={2.5} />
            </div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Journey;
