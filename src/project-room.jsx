import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, Layers3, Mail } from "lucide-react";
import eatFirstCoverUrl from "./assets/project-eat-first.png";
import puploopCoverUrl from "./assets/project-puploop.png";
import eatFirstSceneCoverUrl from "./assets/project-eat-first-scene.png";
import quanzhouCoverUrl from "./assets/project-quanzhou.png";
import travelingCoverUrl from "./assets/project-traveling.png";
import aboutMeCoverUrl from "./assets/project-about-me.png";
import puploopPixelCoverUrl from "./assets/project-puploop-pixel.png";
import designPortfolioYellowUrl from "./assets/project-design-portfolio-yellow.png";
import "./project-room.css";

const navItems = [
  { label: "Gallery", href: "#gallery" },
  { label: "Projects", href: "#gallery" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "mailto:yourname@email.com" },
];

const projectCards = [
  {
    label: "QUANZHOU",
    meta: "Culture Archive",
    image: quanzhouCoverUrl,
    className: "card-quanzhou",
    style: { "--tilt": "-12deg", "--accent": "#63c6ba" },
  },
  {
    label: "PUPLOOP",
    meta: "Service Design",
    image: puploopCoverUrl,
    className: "card-puploop",
    style: { "--tilt": "-5deg", "--accent": "#ffca38" },
  },
  {
    label: "TRAVELING",
    meta: "Mobile Journey",
    image: travelingCoverUrl,
    className: "card-traveling",
    style: { "--tilt": "4deg", "--accent": "#f48a73" },
  },
  {
    label: "PUPLOOP PIXEL",
    meta: "Game Study",
    image: puploopPixelCoverUrl,
    className: "card-pixel",
    style: { "--tilt": "-8deg", "--accent": "#3ac16f" },
  },
  {
    label: "PORTFOLIO",
    meta: "Visual Direction",
    image: designPortfolioYellowUrl,
    className: "card-portfolio",
    style: { "--tilt": "7deg", "--accent": "#f2b93b" },
  },
  {
    label: "EAT FIRST",
    meta: "Food Experience",
    image: eatFirstSceneCoverUrl,
    className: "card-eat",
    style: { "--tilt": "-6deg", "--accent": "#f35c68" },
  },
  {
    label: "ABOUT",
    meta: "Personal Story",
    image: aboutMeCoverUrl,
    className: "card-about",
    style: { "--tilt": "6deg", "--accent": "#8fc8ff" },
  },
  {
    label: "WORKFLOW",
    meta: "Case Study",
    image: eatFirstCoverUrl,
    className: "card-workflow",
    style: { "--tilt": "-4deg", "--accent": "#101010" },
  },
];

function Header() {
  return (
    <header className="room-header" id="studio">
      <a className="room-brand" href="#top" aria-label="Project Room home">
        <span className="room-brand-mark">
          <Layers3 size={17} aria-hidden="true" />
        </span>
        <span>Project Room</span>
      </a>

      <nav className="room-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="room-actions" aria-label="Quick links">
        <a className="room-contact-link" href="mailto:yourname@email.com">
          <Mail size={14} aria-hidden="true" />
          Contact Me
        </a>
      </div>
    </header>
  );
}

function ProjectCard({ card }) {
  return (
    <article className={`room-project-tile ${card.className}`} style={card.style}>
      <img src={card.image} alt="" />
      <div className="room-tile-caption">
        <strong>{card.label}</strong>
        <span>{card.meta}</span>
      </div>
    </article>
  );
}

function ProjectRoom() {
  return (
    <main className="project-room-page" id="top">
      <section className="room-shell" aria-label="Project showcase landing page">
        <Header />

        <div className="room-hero-copy">
          <p className="room-hero-note">Selected work, product stories, and visual experiments.</p>
          <h1>A place to showcase your projects.</h1>
        </div>

        <div className="room-project-deck" id="gallery" aria-label="Selected project cards">
          {projectCards.map((card) => (
            <ProjectCard card={card} key={card.label} />
          ))}
        </div>

        <div className="room-hero-bottom">
          <p>Curate every case study with clarity, color, and a memorable first impression.</p>
          <div className="room-hero-actions">
            <a className="room-primary-button" href="mailto:yourname@email.com">
              Contact Me
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="room-text-button" href="mailto:yourname@email.com">
              Start a Collection
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("project-room-root")).render(
  <React.StrictMode>
    <ProjectRoom />
  </React.StrictMode>,
);
