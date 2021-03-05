import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" id="color" href="#">
            E
          </a>
          <button 
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" id="color" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="color" href="#">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="color" href="#">
                  Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="color" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="resume" target="_blank" href="resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="side-nav">
        <nav class="nav flex-column">
          <a
            class="nav-link active" 
            aria-current="page"
            target="_blank"
            href="https://github.com/erikacolette29"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            class="nav-link"
            target="_blank"
            href="https://www.linkedin.com/in/erikatidwell/"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            class="nav-link"
            target="_blank"
            href="mailto:erikatidwell.c@gmail.com"
          >
            <i class="far fa-envelope"></i>
          </a>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
