import React, { memo } from "react";

import "../styles/portfolio.scss";
import bookdo from "../images/bookdo.png";
import pad from "../images/pad.png";
import ylh from "../images/ylh.png";
import hnm from "../images/hnm.png";

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">

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
              <br /> 95.3K subscribers YouTube Award Winner
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
