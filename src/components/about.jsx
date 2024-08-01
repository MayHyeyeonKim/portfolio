import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/mypic.png";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
          alt="이미지 불러오기를 실패했습니다."
        ></img>
        <div className="about-info">
          <b className="info-title">"Detail is quality."</b>
          <div className="info">
            <br />
            Hello, I am May Kim, a passionate developer who continuously seeks growth. I love learning new features and developing various projects with interesting ideas.
            I studied web development in Seattle and currently work as a full stack developer at Digital Aid Seattle.<br></br>
            As the saying goes, "Detail is quality," I meticulously check and recheck to ensure no details are missed, creating high-quality work.
            I primarily use TypeScript and JavaScript, but I also work with Python and Java.<br></br>
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> May Kim
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> Seattle, WA
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" /> devmay202@gmail.com
              </div>
            </li>
            {/* <li>
              <div className="info-li">
                <IoCalendarClearOutline className="icon" /> 
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
