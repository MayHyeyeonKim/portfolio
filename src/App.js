import React from "react";
import "./App.scss";

import bookdo from "./images/bookdo.png";
import vibeverse from "./images/vibeverse_demo.gif";

const projects = [
  {
    number: "01",
    title: "BSideU side-project community",
    description:
      "A work-in-progress community platform for people who want to find collaborators and build side projects together. My contribution focuses on documenting AI workflows and establishing a structured AI-assisted development process for the team.",
    tags: ["Community product", "AI workflow docs", "AI-assisted development", "In progress"],
    type: "Team side project · In progress",
    livePreview: true,
    previewUrl: "https://app.bsideu.ca/",
    link: "https://app.bsideu.ca/",
    caseStudy: "https://mayhyeyeonkim.github.io/ai/development/bsideu-ai-assisted-development/",
  },
  {
    number: "02",
    title: "VibeVerse personalized recommendation system",
    description:
      "A personalized review and recommendation system powered by LLMs. The application extracts structured insights from natural-language reviews and uses them to generate more relevant place recommendations.",
    tags: ["LLM", "Structured extraction", "Recommendations", "Next.js"],
    type: "Best Idea Award · Hackathon project",
    image: vibeverse,
    link: "https://github.com/MayHyeyeonKim/VibeVerse",
    linkLabel: "View repository",
  },
  {
    number: "03",
    title: "BookDo online bookstore",
    description:
      "A TypeScript and Next.js migration of an award-winning online bookstore project, rebuilt with PostgreSQL and a more strongly typed full-stack architecture.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Redux Saga"],
    type: "Migration project · Award-winning original",
    image: bookdo,
    link: "https://github.com/BookDo7starsTS/bookdo7stars_fe",
    linkLabel: "View repository",
    source: "https://github.com/orgs/7CodeCrew/repositories",
    sourceLabel: "Award-winning original",
  },
  {
    number: "04",
    title: "YoungLeeHan Korean education platform",
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
            <p>React</p>
            <p>TypeScript</p>
            <p>Node.js</p>
            <p>SQL + NoSQL</p>
            <p>Agentic workflows</p>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <p className="section-note">Four selected builds across product, systems, and AI.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-meta">
                  <span>{project.number}</span>
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
                      {project.source && (
                        <a href={project.source} target="_blank" rel="noreferrer">
                          {project.sourceLabel || "Source"} <Arrow />
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
            <div><span>01</span><strong>Product engineering</strong><p>React, TypeScript, responsive UI</p></div>
            <div><span>02</span><strong>Backend systems</strong><p>Node.js, APIs, integrations, testing</p></div>
            <div><span>03</span><strong>Data + AI</strong><p>SQL, MongoDB, RAG, agentic workflows</p></div>
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
