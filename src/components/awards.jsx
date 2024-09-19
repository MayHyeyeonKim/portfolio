import React, { memo } from "react";

import "../styles/awards.scss";
import bookdo from "../images/bookdo.png";
import X from "../images/Demo.gif"
import bronze from "../images/bronze.png"; 
import silver from "../images/silver.png"; 



const Awards = memo(({ refs }) => {
  return (
    <section ref={refs} className="awards-section">
      <div className="section-title">AWARDS</div>
      <div className="portfolio-content">

        {/* exploreX */}
        <div className="portfolio-info-area explorex-award">
          <div className="portfolio-info">

          {/* Award NumBadge */}
          <div className="badge-num-area">
              <p className="badge-num">
                3<sup className="badge-suffix">rd</sup>
              </p>
          </div>

          {/* Award Badge */}
            <div className="badge-area">
              <img src={bronze} alt="Award Badge" className="award-badge" />
            </div>

            <div className="picture-area">
              <img
                src={X}
                alt="죄송합니다 이미지를 불러오지 못했습니다."
              />
            </div>
            <div className="title">ExploreX</div>
            <div className="contents">
              Team Project 2024
              <br />
              <br /> 
              <span className="highlight-blink">97.1K subscribers YouTube REACT Award Winner</span>
              <br /> ExploreX is a travel booking and activity management platform built using React. This project was developed by a team of five as a group project.
              <br /> Built with React, React Query and deployed using Netlify.
            </div>
            <a
              className="button"
              href="https://github.com/ExploreX-App/ExploreX"
            >
              github link
            </a>
            <a className="button" href="https://explorex-9.netlify.app/">
              publish link
            </a>
          </div>
        </div>

        {/* bookdo7stars */}
        <div className="portfolio-info-area">
          <div className="portfolio-info">

          {/* Award NumBadge */}
          <div className="badge-num-area">
              <p className="badge-num">
                2<sup className="badge-suffix">nd</sup>
              </p>
          </div>

          {/* Award Badge */}
          <div className="badge-area">
              <img src={silver} alt="Award Badge" className="award-badge" />
            </div>

            <div className="picture-area">
              <img
                src={bookdo}
                alt="죄송합니다 이미지를 불러오지 못했습니다."
              />
            </div>
            <div className="title">Online BookStore</div>
            <div className="contents">
              Team Project 2024
              <br />
              <br /> 
              <span className="highlight-blink">97.1K subscribers YouTube Node FullStack Award Winner</span>
              <br /> Built with MongoDB, Express, React, Redux, and Node.js, and
              deployed using AWS Elastic Beanstalk.
            </div>
            <a
              className="button"
              href="https://github.com/orgs/7CodeCrew/repositories"
            >
              github link
            </a>
            <a className="button" href="https://bookdo-bookstore.netlify.app/">
              publish link
            </a>
          </div>
        </div>
</div>
    </section>
  );
});

export default Awards;
