import React from "react";
import "../About.css";
import * as lucide from "lucide-react";

const About = () => {
  return (
    <>

      <main>
        <h1 className="AboutHead">About Tridosha AI</h1>
        <p className="subheading">
          We're revolutionizing wellness by combining 5,000 years of Ayurvedic
          wisdom with cutting edge artificial intelligence to provide
          personalized health guidance.
        </p>

        <section className="mission-vision">
          <div className="box">
            <div className="icon-circle mission-icon">
              <lucide.Heart />
            </div>
            <h3>Our Mission</h3>
            <p>
              To make ancient Ayurvedic wisdom accessible to everyone through modern technology, helping individuals achieve optimal health and wellness through personalized, holistic approaches that honor both tradition and innovation.
            </p>
          </div>
          <div className="box">
            <div className="icon-circle vision-icon">
              <lucide.Brain />
            </div>
            <h3>Our Vision</h3>
            <p>
             A world where everyone has access to personalized wellness guidance rooted in time-tested Ayurvedic principles, empowering individuals to live balanced, healthy lives in harmony with their unique constitution.
            </p>
          </div>
        </section>

        <h2 className="values-heading">Our Values</h2>
        <section className="values">
          <div className="value-box">
            <div className="icon-circle value-icon green">
              <lucide.Globe />
            </div>
            <h4>Holistic Wellness</h4>
            <p>
              We believe true wellness encompasses mind, body, and spirit in
              perfect harmony.
            </p>
          </div>
          <div className="value-box">
            <div className="icon-circle value-icon purple">
              <lucide.Users />
            </div>
            <h4>Personalized Care</h4>
            <p>
              Every individual is unique, and their wellness journey should be
              too.
            </p>
          </div>
          <div className="value-box">
            <div className="icon-circle value-icon orange">
              <lucide.Award />
            </div>
            <h4>Ancient Wisdom</h4>
            <p>
              Honoring traditional Ayurvedic knowledge while embracing modern
              innovation.
            </p>
          </div>
        </section>

        <section className="story">
          <h3>Our Story</h3>
          <p>
            Tridosha AI was born from a simple observation: while Ayurveda offers profound wisdom for health and wellness, accessing personalized guidance has traditionally required extensive knowledge or expensive consultations.

Our team of Ayurvedic practitioners, AI researchers, and wellness enthusiasts came together with a shared vision to democratize access to this ancient wisdom through modern technology. By combining machine learning with traditional Ayurvedic principles, we’ve created a platform that provides personalized wellness based on your unique constitution and current state of health.

Today, Tridosha AI serves thousands of users worldwide, helping them discover their optimal path to wellness through the timeless wisdom of Ayurveda
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
