import React, { memo } from "react";

import "../styles/portfolio.scss";
import bookdo from "../images/bookdo.png";
import pad from "../images/pad.png";
import ylh from "../images/ylh.png";
import hnm from "../images/hnm.png";
import DAS from "../images/DAS_GFL.png"
import X from "../images/Demo.gif"

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">

        {/* games for love */}
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={DAS}
                alt="죄송합니다 이미지를 불러오지 못했습니다."
              />
            </div>
            <div className="title">Digital Aid Seattle</div>
            <div className="contents">
            Currently work here
              <br />
              <br /> Games for Love is a Gaming Charity dedicated to easing suffering, saving lives, and creating sustainable futures for children. We help kids heal through play. Games for Love began with a dream to benefit sick kids, and allow everyday heroes in #Gaming and #Tech to help children through their gifts and talents. 
             
            </div>
            <a
              className="button"
              href="https://github.com/digitalaidseattle/games-for-love"
            >
              github link
            </a>
            <a className="button" href="https://games-for-love.web.app/">
              publish link
            </a>
            <a className="button" href="https://www.digitalaidseattle.org/">DAS</a>
            <a className="button" href="https://www.digitalaidseattle.org/project/recjTnXhnU7hkRDDb">GFL</a>
          </div>
        </div>

        {/* exploreX */}
        <div className="portfolio-info-area">
          <div className="portfolio-info">
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
              <br /> 97.1K subscribers YouTube REACT Award Winner
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
              <br /> 97.1K subscribers YouTube Node FullStack Award Winner
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

        {/* HnM Shopping Mall 2024*/}
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={hnm} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">HnM Shopping Mall</div>
            <div className="contents">
              Solo Project 2024 <br />
              <br /> Built with MongoDB, Express, React, Redux, and Node.js, and
              deployed using AWS Elastic Beanstalk.
            </div>
            <a className="button" href="https://github.com/MayHyeyeonKim/HnM">
              github link
            </a>
            <a className="button" href="https://hnm-shopping-mall.netlify.app/">
              publish link
            </a>
          </div>
        </div>

        {/* [Hackathon] Black Wings Hacks 2024 - Team the PowerpuffGirls - Pad Forward*/}
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={pad} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">[Hackathon] Black Wings</div>
            <div className="contents">
              Team Project 2024
              <br />
              <br /> PadForward: Together, We Can End Menstrual Inequity
              <br /> Built with MongoDB, Express, React, and Node.js
            </div>
            <a
              className="button"
              href="https://github.com/The-Powerpuff-Girls-Hackathon/Pad-Forward"
            >
              github link
            </a>
            <a className="button" href="https://padforward.us/">
              publish link
            </a>
          </div>
        </div>

        {/* E-commerce WebSite 2023 */}
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={ylh} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">E-commerce Website</div>
            <div className="contents">
              Team Project 2023
              <br />
              <br /> A professional e-commerce website that creates Korean
              educational worksheets and sells them to educational institutions
              and individuals.
              <br /> Built with MongoDB, Express, React, and Node.js
            </div>
            <a className="button" href="https://github.com/YoungLeeHan">
              github link
            </a>
            <a className="button" href="https://www.youngleehankorean.com/">
              publish link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
