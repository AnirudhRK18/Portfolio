import React from "react";
import bank from "../assets/bank.png";
import spotify from "../assets/spotify.png";



const bankcode='https://github.com/AnirudhRK18/Bank-website.git'
const spotifycode='https://github.com/AnirudhRK18/Spotify-clone.git'

const Project = () => {
  return (
    <div>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <div className="pro pro__1 undefined">
                <div className="pro__img">
                  <a target="_blank" href="#noContentRightNow" rel="noreferrer">
                    <img
                      src={bank}
                      alt="website"
                      style={{
                        transform: "translateY(0%)",
                        transition: "transform 10s ease-in-out 0s",
                      }}
                    />
                  </a>
                </div>
                <div className="pro__text">
                  <h3>
                    Bank App
                    <span className="date-className">(Feb 2024)</span>
                  </h3>
                  <p>
                  This particular bank app has been designed with React and Tailwind which makes the application easy to use. It has a Home page at the forefront that presents some useful information to the user, and an About page outlining the activities of the bank and the geographical areas served, as well as helps the users with such sections as Community Links and Useful Links. It gets the job done for users as the app has good and appealing navigation system.
                  </p>
                  <div className="stack">
                    <p>React</p>
                    <p>Tailwind</p>
                  </div>
                  <div className="links">
                    <a
                      target="_blank"
                      href={bankcode}
                      rel="noreferrer">
                      Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-brand-github">
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </a>
                   
                  </div>
                </div>
              </div>
              <div className="pro pro__1 reversed-proj">
                <div className="pro__img">
                  <a target="_blank" href="#noContentRightNow" rel="noreferrer">
                    <img
                      src={spotify}
                      alt="website"
                      style={{
                        transform: "translateY(0%)",
                        transition: "transform 10s ease-in-out 0s",
                      }}
                    />
                  </a>
                </div>
                <div className="pro__text">
                  <h3>
                    Spotify clone
                    <span className="date-className">(July 2024)</span>
                  </h3>
                  <p>
                  This Spotify clone type of app is developed on MERN technology (MongoDB, ExpressJs, React, Node Js) and is dynamic and secured in-house music experience. And this one includes JWT authentication as well as encryption of the password for increasing user security. Users can insert and erase songs and build and rearrange the libraries as well as enjoy an advanced level of interaction. 
                  </p>
                  <div className="stack">
                    <p>React</p>
                    <p>MongoDB</p>
                    <p>ExpressJS</p>
                    <p>NodeJS</p>
                  </div>
                  <div className="links">
                    <a
                      target="_blank"
                      href={spotifycode}
                      rel="noreferrer">
                      Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-brand-github">
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
