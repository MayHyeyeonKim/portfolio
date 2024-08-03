import React, { memo } from "react";

import "../styles/title.scss";
import Portfolio from './portfolio';

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Detail oriented software developer</h1>
        <div className="line"></div>
        <h1>May Kim</h1>
        <h2>Web Portfolio</h2>
        <h4>
        Hello, I am a Full Stack Engineer.
          <br /> I always enjoy developing new things and find great satisfaction in solving problems with persistence.
        </h4>
      </div>
    </section>
  );
});

export default Title;
