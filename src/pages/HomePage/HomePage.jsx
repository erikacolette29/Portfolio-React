import React, { useState, useEffect } from "react";
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

      <div className="container">
        <h1 className="heading" id="about">
          About Me
        </h1>
        <hr className="hr" />
        <p className="blurb-text">
          Hello! I'm Erika, a full-stack software engineer based in New York,
          NY.
        </p>

        <p className="blurb-text">
          In 2014, I graduated from{" "}
          <a className="green" href="https://sva.edu/" target="_blank">
            The School of Visual Arts
          </a>{" "}
          with a BFA in Illustration. In 2016, I graduated from{" "}
          <a
            className="green"
            href="https://www.swedishinstitute.edu/"
            target="_blank"
          >
            The Swedish Institute of Health Sciences
          </a>{" "}
          with a AOS in Massage Therapy.
        </p>
        <p className="blurb-text">I am a recent grad from <a className="green" href="https://generalassemb.ly/education/software-engineering-immersive/new-york-city" target="_blank">General Assembly's </a>Software Engineering Program. I enjoy building a variety of meaningful and beautiful websites that are relative to my passions. </p>

        <p className="blurb-text">Here are a few technologies I've been working with recently:</p>
        <div class="table-responsive">
          <table class="table table-borderless blurb-text">
            <tbody>
              <tr>
                
                <td>React</td>
                <td>Node.js</td>
                <td>Javascript</td>
              </tr>
              <tr>
               
                <td>Html</td>
                <td>CSS</td>
                <td>Python</td>
              </tr>
              <tr>
                
                <td>Bootstrap</td>
                <td>MongoDB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img className="profile-pic" src="/images/erika.jpeg" alt="erika-pic" />
      </div>
    </>
  );
};

export default HomePage;
