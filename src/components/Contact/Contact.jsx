import React from "react";
import "./Contact.css"

const Contact = () => {
    return ( <>
    <div  id="contact"></div>
     <div className="container">
    <h1 className="heading" >Get In Touch</h1>
    <hr className="hr"/>

    <p className=" work-text1">Please feel free to contact me anytime! I'm open to new work and fun creative passion projects.</p>
    <a href="mailto:erikatidwell.c@gmail.com" className="button">erikatidwell.c@gmail.com</a>
    <div className="icons-container">
        <a
            class="nav-link active con" 
            aria-current="page"
            target="_blank"
            href="https://github.com/erikacolette29"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            class="nav-link con"
            target="_blank"
            href="https://www.linkedin.com/in/erikatidwell/"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
         

        </div>
    </div>
    
    
    </> );
}
 
export default Contact;
