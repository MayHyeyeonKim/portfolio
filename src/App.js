import React from "react";
import "./App.scss";

import bookdo from "./images/bookdo.png";
import vibeverse from "./images/vibeverse_demo.gif";

const projects = [
  {
    number: "01",
    title: "BSideU collaboration platform",
    description:
      "A platform that matches people with complementary skills and interests so they can find collaborators and build projects together. I'm currently documenting the team's AI workflows and shaping a structured AI-assisted development process. I'll share more as the platform evolves—stay tuned.",
    tags: ["Community product", "AI workflow docs", "AI-assisted development"],
    type: "Team side project",
    badge: "In progress",
    livePreview: true,
    previewUrl: "https://app.bsideu.ca/",
    link: "https://app.bsideu.ca/",
    landingPage: "https://www.bsideu.ca/",
    caseStudy: "https://mayhyeyeonkim.github.io/ai/development/bsideu-ai-assisted-development/",
  },
  {
    number: "02",
    title: "VibeVerse personalized recommendation system",
    description:
      "An AI-powered place discovery app with a chat interface for writing reviews and getting personalized recommendations. It uses OpenAI and Google models through the Vercel AI SDK, and Orama's local vector search to retrieve relevant context for recommendations.",
    tags: ["LLM", "Structured extraction", "Recommendations", "Next.js"],
    type: "Hackathon project",
    award: "Best Idea Award",
    awardRank: "★",
    awardTone: "gold",
    image: vibeverse,
    link: "https://github.com/MayHyeyeonKim/VibeVerse",
    linkLabel: "View repository",
  },
  {
    number: "03",
    title: "BookDo online bookstore · TypeScript migration",
    description:
      "A separate TypeScript and Next.js migration of the original BookDo bookstore, rebuilt with PostgreSQL and deployed on AWS. Amplify hosts the frontend; the backend API and database run on Lightsail.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "AWS Amplify", "AWS Lightsail"],
    type: "Full-stack migration · AWS deployment",
    livePreview: true,
    previewUrl: "https://main.d1ldizf46l0xpq.amplifyapp.com/",
    link: "https://main.d1ldizf46l0xpq.amplifyapp.com/",
    linkLabel: "View live site",
    frontendRepository: "https://github.com/BookDo7starsTS/bookdo7stars_fe",
    source: "https://github.com/BookDo7starsTS/bookdo7stars_be",
    sourceLabel: "Backend",
    apiDocs: "https://bookdo7stars-api.duckdns.org/api-docs/",
  },
  {
    number: "04",
    title: "BookDo online bookstore",
    description:
      "The original team bookstore, built with MongoDB, Express, React, Redux, and Node.js. Our team won second place in a project competition hosted by Koalnu, a YouTuber with 139K subscribers. This original version is presented separately from my later TypeScript and Next.js migration.",
    tags: ["MongoDB", "Express", "React", "Redux", "Node.js"],
    type: "Original · Team project",
    award: "2nd Place",
    awardRank: "2",
    awardTone: "silver",
    image: bookdo,
    link: "https://github.com/orgs/7CodeCrew/repositories",
    linkLabel: "Award-winning original",
    source: "https://bookdo-bookstore.netlify.app/",
    sourceLabel: "Original live site",
  },
  {
    number: "05",
    title: "YoungLeeHan Korean education e-commerce platform",
    description:
      "A professional e-commerce platform for creating and selling Korean language learning worksheets to educational institutions and individual learners.",
    tags: ["MERN", "React", "Node.js", "MongoDB"],
    type: "Team project · Live product",
    livePreview: true,
    previewUrl: "https://www.youngleehankorean.com/",
    link: "https://www.youngleehankorean.com/",
    linkLabel: "View live site",
    source: "https://github.com/YoungLeeHan/YoungleehanKorean",
  },
];

function AwardMedal({ rank, tone }) {
  const leaves = Array.from({ length: 5 }, (_, index) => {
    const x = 16 + index * 2.5;
    const y = 46 - index * 4.3;
    return { x, y, key: index };
  });
  const rosettePoints = Array.from({ length: 64 }, (_, index) => {
    const angle = (index * Math.PI) / 32 - Math.PI / 2;
    const radius = index % 2 === 0 ? 27 : 24.5;
    return `${32 + Math.cos(angle) * radius},${34 + Math.sin(angle) * radius}`;
  }).join(" ");

  return (
    <svg className={`project-award-medal ${tone}`} viewBox="0 0 64 76" aria-hidden="true">
      <path className="medal-ribbon" d="M18 39 16 69l9-6 7 10 4-29zM30 44l5 29 7-10 9 6-4-30z" />
      <polygon className="medal-edge" points={rosettePoints} />
      <circle className="medal-face" cx="32" cy="34" r="22" />
      <circle className="medal-inner-ring" cx="32" cy="34" r="19" />
      <g className="laurel-branch">
        <path d="M14 50c-3-12 1-24 10-32" />
        {leaves.map(({ x, y, key }) => (
          <ellipse key={key} cx={x} cy={y} rx="2.6" ry="5.2" transform={`rotate(-38 ${x} ${y})`} />
        ))}
      </g>
      <g className="laurel-branch" transform="translate(64 0) scale(-1 1)">
        <path d="M14 50c-3-12 1-24 10-32" />
        {leaves.map(({ x, y, key }) => (
          <ellipse key={key} cx={x} cy={y} rx="2.6" ry="5.2" transform={`rotate(-38 ${x} ${y})`} />
        ))}
      </g>
      <text className="medal-rank" x="32" y="42" textAnchor="middle">{rank}</text>
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="May Kim home">
          May Kim<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="mailto:devmay202@gmail.com">
          Email me <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-status">
            <span aria-hidden="true"></span>
            Open to new opportunities
          </div>
          <p className="eyebrow">FULL-STACK ENGINEER · SEATTLE, WA</p>
          <h1>
            Full-stack products,
            <br />
            <em>built with intelligence.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-summary">
              I build reliable web products across the interface, backend, and
              data layer—with practical AI woven into the workflow.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Selected work <Arrow />
              </a>
              <a className="button button-secondary" href="mailto:devmay202@gmail.com">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Core technologies">
          <div className="section-wrap proof-inner">
            <span>Working across</span>
            <p>JavaScript</p>
            <p>React</p>
            <p>TypeScript</p>
            <p>Node.js</p>
            <p>AWS</p>
            <p>SQL + NoSQL</p>
            <p>Agentic workflows</p>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <p className="section-note">Five selected builds across product, systems, and AI.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-meta">
                  <div className="project-index">
                    <span>{project.number}</span>
                    {project.award && (
                      <span className="project-award">
                        <AwardMedal rank={project.awardRank} tone={project.awardTone} />
                        {project.award}
                      </span>
                    )}
                    {project.badge && <span className="project-status">{project.badge}</span>}
                  </div>
                  <span>{project.type}</span>
                </div>
                <div className="project-main">
                  <div className="project-copy">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.linkLabel || "View project"} <Arrow />
                      </a>
                      {project.landingPage && (
                        <a href={project.landingPage} target="_blank" rel="noreferrer">
                          Landing page <Arrow />
                        </a>
                      )}
                      {project.frontendRepository && (
                        <a href={project.frontendRepository} target="_blank" rel="noreferrer">
                          Frontend <Arrow />
                        </a>
                      )}
                      {project.source && (
                        <a href={project.source} target="_blank" rel="noreferrer">
                          {project.sourceLabel || "Source"} <Arrow />
                        </a>
                      )}
                      {project.apiDocs && (
                        <a href={project.apiDocs} target="_blank" rel="noreferrer">
                          Explore API <Arrow />
                        </a>
                      )}
                      {project.caseStudy && (
                        <a href={project.caseStudy} target="_blank" rel="noreferrer">
                          Case study <Arrow />
                        </a>
                      )}
                    </div>
                  </div>
                  {project.livePreview ? (
                    <a className="project-image project-live-preview" href={project.link} target="_blank" rel="noreferrer">
                      <iframe src={project.previewUrl} title={`${project.title} live preview`} tabIndex="-1" />
                      <span className="preview-label">Live preview · auto scroll</span>
                    </a>
                  ) : project.image && (
                    <a className="project-image" href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.image} alt={`${project.title} preview`} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
          </div>
          <div className="about-grid">
            <h2>Thoughtful systems.<br /><em>Human</em> outcomes.</h2>
            <div className="about-copy">
              <p>
                I&apos;m a full-stack engineer who enjoys turning complex workflows
                into clear, reliable products. My work combines product-focused
                interfaces, scalable backend systems, structured data, and
                practical AI automation.
              </p>
              <p>
                I care about the details that make software feel trustworthy:
                good defaults, useful feedback, resilient APIs, and code that a
                team can understand months later.
              </p>
            </div>
          </div>
          <div className="capabilities">
            <div><span>01</span><strong>Product engineering</strong><p>JavaScript, React, TypeScript, responsive UI</p></div>
            <div><span>02</span><strong>Backend systems</strong><p>Node.js, APIs, integrations, testing</p></div>
            <div><span>03</span><strong>Data systems</strong><p>SQL, MongoDB, vector databases, schema design</p></div>
            <div><span>04</span><strong>AI &amp; agent workflows</strong><p>Claude/OpenAI integrations, RAG pipelines, agent harnesses, output evaluation</p></div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>Looking for a full-stack<br /><em>engineer who ships?</em></h2>
          <a className="contact-link" href="mailto:devmay202@gmail.com">Start a conversation <Arrow /></a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} May Kim</span>
        <div>
          <a href="https://github.com/MayHyeyeonKim" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/hykim-may" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
