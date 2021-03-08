import React from "react";
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <>
    <div  id="about"></div>
      <div className="container">
        <h1 className="heading" >
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
        <p className="blurb-text">
          I am a recent grad from{" "}
          <a
            className="green"
            href="https://generalassemb.ly/education/software-engineering-immersive/new-york-city"
            target="_blank"
          >
            General Assembly's{" "}
          </a>
          Software Engineering Program. I am passionate about building meaningful and beautiful websites.{" "}
        </p>

        <p className="blurb-text">
          Here are a few technologies I've been working with recently:
        </p>
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

export default AboutMe;
