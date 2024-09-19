import React, { memo } from "react";

import "../styles/title.scss";
import Portfolio from './portfolio';

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Software Engineer</h1>
        <div className="line"></div>
        <h1>May Kim</h1>
      </div>
    </section>
  );
});

export default Title;
