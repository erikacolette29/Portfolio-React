import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe"
import Experience from "../../components/Experience/Experience"
import Work from "../../components/Work/Work"
import Contact from "../../components/Contact/Contact"
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <p className="green1">Hi, my name is</p>
        <h1 className="heading1">Erika Tidwell.</h1>
        <p className="blurb-text1">
          I'm a Space enthusiast and Illustrator turned software engineer,
          lifelong tinkerer committed to social advocacy, environmentalism and
          wellness, looking to shape the world one line of code at a time.
        </p>
        <a href="mailto:erikatidwell.c@gmail.com" className="button">
          Get In Touch
        </a>
        <div className="icons-container">
        <a
            class="con" 
            aria-current="page"
            target="_blank"
            href="https://github.com/erikacolette29"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            class="con"
            target="_blank"
            href="https://www.linkedin.com/in/erikatidwell/"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
         

        </div>

        <div  id="about"></div>
      </div>
      <AboutMe />
      <Experience />
      <Work/>
      <Contact/>
      
    </>
  );
};

export default HomePage;
