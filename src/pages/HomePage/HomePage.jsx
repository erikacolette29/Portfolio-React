import React, { useState, useEffect } from "react";
import AboutMe from "../../components/AboutMe/AboutMe"
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <p className="green">Hi, my name is</p>
        <h1 className="heading">Erika Tidwell.</h1>
        <p className="blurb-text">
          I'm a Space enthusiast and Illustrator turned software engineer,
          lifelong tinkerer committed to social advocacy, environmentalism and
          wellness, looking to shape the world one line of code at a time.
        </p>
        <a href="mailto:erikatidwell.c@gmail.com" className="button">
          Get In Touch
        </a>
      </div>
      <AboutMe />

      
    </>
  );
};

export default HomePage;
