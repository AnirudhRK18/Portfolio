import React from "react";

import about from "../assets/about.jpeg";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={about} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Full-Stack Developer <br />
                based in Pune, India 📍
              </h4>
              <p>
              I am a driven MERN stack developer with a passion for building dynamic web applications. My foundational skills in JavaScript, React, Node.js, and MongoDB empower me to contribute effectively to innovative projects. Eager to tackle challenging assignments, I am committed to continuous learning and growth in the tech industry. I welcome new opportunities and connections to enhance my journey as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
