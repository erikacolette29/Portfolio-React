import React from "react";
import "./Work.css"


const Work = () => {
    return ( <>
    <div className="container">
    <h1 className="heading" id="work" >Some Things I've Built</h1>
    <hr className="hr"/>



    <div class="row row-cols-1 row-cols-md-2 g-4">


    <div class="col">
    <div class="card  bg-transparent">
      <img src="/images/toxic.png" class="card-img-top proj-pic" alt="..." />
      <div class="card-body">
        <h5 class="card-title greenW">Pocketology</h5>
        <p class="card-text work-text">Build your own personal apothecary cabinet with Pocketology! Create a collection of your favorite toxic plants, herbs, and uses. Upload your own photos and watch as your cabinet grows!</p>
        <div className="tech">
        <a className="a" href="https://pocketologyapp.herokuapp.com/" target="_blank">Website</a>
        <a className="a" href="https://github.com/erikacolette29/Pocketology" target="_blank">Github</a>
        <span>Python</span>
        <span>Django</span>
        </div>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card  bg-transparent">
      <img src="/images/snap.png" class="card-img-top proj-pic" alt="..." />
      <div class="card-body">
        <h5 class="card-title greenW">Snap Out Of It!</h5>
        <p class="card-text work-text">The app to help you get through a breakup, or any kind of heartbreak. This MERN-stack app provides user action steps to address how hard and overwhelming heartbreak can feel, and to help users in all stages of grief navigate towards empathy and healing.</p>
        <div className="tech">
        <a className="a" href="https://snap-out-of-it.herokuapp.com/" target="_blank">Website</a>
        <a className="a" href="https://github.com/erikacolette29/SnapOutOfIt" target="_blank">Github</a>
        <span>React</span>
        <span>Node.js</span>
       </div>
     </div>
   </div>
  </div>

  <div class="col">
    <div class="card  bg-transparent">
      <img src="/images/qi.png" class="card-img-top proj-pic" alt="..." />
      <div class="card-body">
        <h5 class="card-title greenW">My Qi</h5>
        <p class="card-text work-text">This app is designed to educate and inform people about the eastern massage practice known as Shiatsu. Learn the theory, and find the element that speaks to you. Make a profile, add friends, and start a conversation on the message board. Figure out which elements you are too much(jitsu) of or too little(Kyo) of, and find a balance. Get linked up with a therapist from resources provided.</p>
        <div className="tech">
        <a className="a" href="https://shiatsu-app.herokuapp.com/" target="_blank">Website</a>
        <a className="a" href="https://github.com/erikacolette29/Shiatsu" target="_blank">Github</a>
        <span>Javascript</span>
        <span>Node.js</span>
       </div>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card  bg-transparent">
      <img src="/images/ff.png" class="card-img-top proj-pic" alt="..." />
      <div class="card-body">
        <h5 class="card-title greenW">The Final Frontier</h5>
        <p class="card-text work-text">This app is designed to educate and inform people about the eastern massage practice known as Shiatsu. Learn the theory, and find the element that speaks to you. Make a profile, add friends, and start a conversation on the message board. Figure out which elements you are too much(jitsu) of or too little(Kyo) of, and find a balance. Get linked up with a therapist from resources provided.</p>
        <div className="tech">
        <a className="a" href="http://space-nerdy.surge.sh/" target="_blank">Website</a>
        <a className="a" href="https://github.com/erikacolette29/The-Final-Frontier" target="_blank">Github</a>
        <span>CSS</span>
        <span>Javascript</span>
       </div>
      </div>
    </div>
  </div>



</div>





    
    </div>
    </> );
}
 
export default Work;