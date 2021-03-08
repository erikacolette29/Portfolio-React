import React from "react";
import "./Experience.css"

const Experience = () => {
    return ( <>
   
    <div className="container">
    <h1 className="heading" >My Experience</h1>
    <hr className="hr"/>


    <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
  <li class="nav-item " role="presentation">
    <button class="nav-link  active text-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button " role="tab" aria-controls="pills-home" aria-selected="true">Illustration</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link text-white" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Massage Therapy</button>
  </li>
  
</ul>
<div class="tab-content " id="pills-tabContent ">
  <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> 
  <p className="jobinfo"><span className="green">Illustrator</span> | LT Design | Austin, TX | 3.19-Present</p>
      <p className="jobinfo">Communicated with clients about visual requirements and brand strategy. Created visual layouts and detailed graphic elements that align with client brief and business needs. </p>
      <p className="jobinfo">Collaborated with Principal and advisor to present strategies and designs to stakeholders. Promo-edit images, including portraits, logos, banners, buttons and animation elements.</p>
      <a className="green" target="_blank" href="https://www.behance.net/ErikaTidwell">Illustration Work <i class="fas fa-external-link-alt fa-sm"></i></a></div>

  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <p className="jobinfo"><span className="green">Massage Therapist</span> | Four Seasons | Red Door | New York, NY  | 6.16–Present</p>
      <p className="jobinfo">Communicated with clients about pain points and designed targeted treatment plans for neurological diseases, pathological conditions as well as recovery after sports injuries. Adhered to professional standards of practice following the Forbes guidelines to optimize client experience, resulting in a high volume of return clients.</p>
      <p className="jobinfo">Led initiative to collaborate with other therapists to promote continued learning and practice of techniques.</p>
  </div>
 
</div>
 
<div  id="work"></div>
</div>

    </> );
}
 
export default Experience;