import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, Layers3, Mail } from "lucide-react";
import eatFirstCoverUrl from "./assets/project-eat-first.png";
import eatFirstSceneCoverUrl from "./assets/project-eat-first-scene.png";
import quanzhouCoverUrl from "./assets/project-quanzhou.png";
import travelingCoverUrl from "./assets/project-traveling.png";
import puploopCoverUrl from "./assets/project-puploop.png";
import puploopPixelCoverUrl from "./assets/project-puploop-pixel.png";
import aboutMeCoverUrl from "./assets/project-about-me.png";
import designPortfolioYellowUrl from "./assets/project-design-portfolio-yellow.png";
import "./project-room-clean.css";

const navItems = [
  { label: "Gallery", href: "#gallery" },
  { label: "Projects", href: "#gallery" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "mailto:yourname@email.com" },
];

const projectCards = [
  {
    label: "WORKFLOW",
    meta: "Case Study",
    image: eatFirstCoverUrl,
    tone: "#111111",
    size: "standard",
    style: { "--x": "-380px", "--y": "-76px", "--rot": "-6deg", "--z": 2 },
  },
  {
    label: "QUANZHOU",
    meta: "Culture Archive",
    image: quanzhouCoverUrl,
    tone: "#63c6ba",
    size: "standard",
    style: { "--x": "-430px", "--y": "34px", "--rot": "-11deg", "--z": 1 },
  },
  {
    label: "PUPLOOP",
    meta: "Service Design",
    image: puploopCoverUrl,
    tone: "#ffca38",
    size: "standard",
    style: { "--x": "-270px", "--y": "4px", "--rot": "7deg", "--z": 3 },
  },
  {
    label: "TRAVELING",
    meta: "Mobile Journey",
    image: travelingCoverUrl,
    tone: "#f48a73",
    size: "large",
    style: { "--x": "-108px", "--y": "16px", "--rot": "-4deg", "--z": 5 },
  },
  {
    label: "PUPLOOP PIXEL",
    meta: "Game Study",
    image: puploopPixelCoverUrl,
    tone: "#3ac16f",
    size: "large",
    style: { "--x": "58px", "--y": "0px", "--rot": "4deg", "--z": 6 },
  },
  {
    label: "PORTFOLIO",
    meta: "Visual Direction",
    image: designPortfolioYellowUrl,
    tone: "#f2b93b",
    size: "standard",
    style: { "--x": "220px", "--y": "16px", "--rot": "-5deg", "--z": 4 },
  },
  {
    label: "EAT FIRST",
    meta: "Food Experience",
    image: eatFirstSceneCoverUrl,
    tone: "#f35c68",
    size: "standard",
    style: { "--x": "372px", "--y": "42px", "--rot": "8deg", "--z": 3 },
  },
  {
    label: "ABOUT",
    meta: "Personal Story",
    image: aboutMeCoverUrl,
    tone: "#8fc8ff",
    size: "standard",
    style: { "--x": "360px", "--y": "-82px", "--rot": "5deg", "--z": 2 },
  },
];

function Header() {
  return (
    <header className="clean-header" id="studio">
      <a className="clean-brand" href="#top" aria-label="Project Room home">
        <span className="clean-brand-mark">
          <Layers3 size={17} aria-hidden="true" />
        </span>
        <span>Project Room</span>
      </a>

      <nav className="clean-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="clean-contact" href="mailto:yourname@email.com">
        <Mail size={14} aria-hidden="true" />
        Contact Me
      </a>
    </header>
  );
}

function ProjectCard({ card }) {
  return (
    <article
      className={`clean-project-card clean-project-card-${card.size}`}
      style={{ ...card.style, "--accent": card.tone }}
    >
      <img src={card.image} alt="" />
      <div className="clean-card-caption">
        <strong>{card.label}</strong>
        <span>{card.meta}</span>
      </div>
    </article>
  );
}

function ProjectRoomClean() {
  return (
    <main className="clean-page" id="top">
      <section className="clean-shell" aria-label="Project showcase landing page">
        <Header />

        <div className="clean-hero-copy">
          <p className="clean-hero-note">Selected work, product stories, and visual experiments.</p>
          <h1>A place to showcase your projects.</h1>
        </div>

        <div className="clean-project-deck" id="gallery" aria-label="Selected project cards">
          <div className="clean-card-stage">
            {projectCards.map((card) => (
              <ProjectCard card={card} key={card.label} />
            ))}
          </div>
        </div>

        <div className="clean-hero-bottom">
          <p>Curate every case study with clarity, color, and a memorable first impression.</p>
          <div className="clean-actions">
            <a className="clean-primary" href="mailto:yourname@email.com">
              Contact Me
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="clean-secondary" href="#gallery">
              View Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("project-room-clean-root")).render(
  <React.StrictMode>
    <ProjectRoomClean />
  </React.StrictMode>,
);
