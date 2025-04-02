import React, { memo } from "react";

import "../styles/skills.scss";

import {
  ReactJs,
  Redux,
  Reduxsaga,
  Sass,
  Jest,
  Bootstrap,
  Tailwindcss,
  Javascript,
  Typescript,
  Html5,
  CssThree,
  Materialui,
  Nodedotjs,
  Express,
  Springboot,
  Django,
  Java,
  Python,
  Postman,
  Mysql,
  Postgresql,
  Mongodb,
  Nextdotjs,
  Airtable,
} from "@icons-pack/react-simple-icons";

const Skills = memo(({ refs }) => {
  return (
    <section ref={refs} className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="skills-content">
        <h3 className="skill-title">frontend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Html5 color="#E34F26" size={50} />
            </div>
            <p className="skill-info">HTML</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <CssThree color="#1572B6" size={50} />
            </div>
            <p className="skill-info">CSS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Javascript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">JS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <ReactJs color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">React.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Nextdotjs color="#000000" size={50} /> {/* Next.js 아이콘 */}
            </div>
            <p className="skill-info">Next.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Redux color="#764ABC" size={50} />
            </div>
            <p className="skill-info">Redux</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Reduxsaga color="#999999" size={50} />
            </div>
            <p className="skill-info">Redux-Saga</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Sass color="#CC6699" size={50} />
            </div>
            <p className="skill-info">SASS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Jest color="#C21325" size={50} />
            </div>
            <p className="skill-info">Jest</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Materialui color="#007fff" size={50} />
            </div>
            <p className="skill-info">Mui</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Bootstrap color="#7f29fa" size={50} />
            </div>
            <p className="skill-info">Bootstrap</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Tailwindcss color="#36b7f0" size={50} />
            </div>
            <p className="skill-info">Tailwind</p>
          </div>
        </div>
        <h3 className="skill-title">backend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Nodedotjs color="#339933" size={50} />
            </div>
            <p className="skill-info">Node.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Express color="#000000" size={50} />
            </div>
            <p className="skill-info">Express</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Typescript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">TS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Java color="#007396" size={50} />
            </div>
            <p className="skill-info">Java</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Springboot color="#69ad3c" size={50} />
            </div>
            <p className="skill-info">Spring boot</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Python color="#3776AB" size={50} />
            </div>
            <p className="skill-info">Python</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Django color="#0c4b33" size={50} />
            </div>
            <p className="skill-info">Django</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Postman color="#ff6b34" size={50} />
            </div>
            <p className="skill-info">Postman</p>
          </div>
        </div>
        <h3 className="skill-title">data</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Postgresql color="#4169E1" size={50} />
            </div>
            <p className="skill-info">Postgresql</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mysql color="#4479A1" size={50} />
            </div>
            <p className="skill-info">My-SQL</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mongodb color="#47A248" size={50} />
            </div>
            <p className="skill-info">MongoDB</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Airtable size={50} />
            </div>
            <p className="skill-info">Airtable</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
