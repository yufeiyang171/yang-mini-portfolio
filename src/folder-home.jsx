import React from "react";
import ReactDOM from "react-dom/client";
import folderCardPoseUrl from "./assets/folder-card-action-pose.png";
import folderCardSkaterUrl from "./assets/folder-card-skater.png";
import folderCardPortfolioUrl from "./assets/folder-card-portfolio.png";
import folderCardPuploopUrl from "./assets/folder-card-puploop.png";
import folderCardAvatarsUrl from "./assets/folder-card-avatars.png";
import folderCardYouthUrl from "./assets/folder-card-youth.png";
import folderBackgroundWelcomeUrl from "./assets/folder-welcome-word.png";
import goodIdeaStickerUrl from "./assets/good-idea-sticker.png";
import portfolioEyeStickerUrl from "./assets/portfolio-eye-sticker.png";
import projectYouthUnlimitedUrl from "./assets/project-youth-unlimited.png";
import projectEatFirstSceneUrl from "./assets/project-eat-first-scene.png";
import projectActionPoseUrl from "./assets/project-action-pose-current.png";
import projectSkaterStyleUrl from "./assets/project-skater-style.png";
import projectPuploopPixelUrl from "./assets/project-puploop-pixel.png";
import projectSkateJumpUrl from "./assets/project-skate-jump.png";
import projectAboutMeUrl from "./assets/project-about-me.png";
import "./styles.css";
import "./project-room-clean.css";
import "./folder-home.css";

const folderCards = [
  {
    title: "UI Design",
    image: folderCardSkaterUrl,
    variant: "photo",
    label: "ui design",
    style: {
      "--open-x": "-244px",
      "--open-y": "66px",
      "--open-r": "-16deg",
      "--open-scale": "1.05",
      "--card-w": "148px",
      "--card-h": "178px",
      "--card-color": "#ff5438",
      "--card-delay": "0ms",
      "--card-z": 1,
      "--peek-x": "-62px",
      "--peek-y": "-60px",
      "--peek-r": "-6deg",
    },
  },
  {
    title: "Youth",
    image: folderCardYouthUrl,
    variant: "youth",
    label: "youth",
    style: {
      "--open-x": "-148px",
      "--open-y": "18px",
      "--open-r": "-7deg",
      "--open-scale": "1.07",
      "--card-w": "154px",
      "--card-h": "166px",
      "--card-color": "#a6dc39",
      "--card-delay": "34ms",
      "--card-z": 3,
      "--peek-x": "-32px",
      "--peek-y": "-78px",
      "--peek-r": "-3deg",
    },
  },
  {
    title: "Leshan",
    image: folderCardPoseUrl,
    variant: "blue",
    label: "leshan",
    style: {
      "--open-x": "-52px",
      "--open-y": "-10px",
      "--open-r": "-2deg",
      "--open-scale": "1.07",
      "--card-w": "144px",
      "--card-h": "144px",
      "--card-color": "#3188df",
      "--card-delay": "68ms",
      "--card-z": 4,
      "--peek-x": "-4px",
      "--peek-y": "-86px",
      "--peek-r": "1deg",
    },
  },
  {
    title: "Portfolio",
    image: folderCardPortfolioUrl,
    variant: "polaroid",
    label: "7/29",
    style: {
      "--open-x": "60px",
      "--open-y": "-4px",
      "--open-r": "4deg",
      "--open-scale": "1.07",
      "--card-w": "164px",
      "--card-h": "174px",
      "--card-color": "#12b8ad",
      "--card-delay": "102ms",
      "--card-z": 5,
      "--peek-x": "18px",
      "--peek-y": "-78px",
      "--peek-r": "3deg",
    },
  },
  {
    title: "Comment",
    image: folderCardAvatarsUrl,
    variant: "comment",
    label: "comment",
    style: {
      "--open-x": "152px",
      "--open-y": "24px",
      "--open-r": "8deg",
      "--open-scale": "1.06",
      "--card-w": "140px",
      "--card-h": "126px",
      "--card-color": "#a8dc36",
      "--card-delay": "136ms",
      "--card-z": 3,
      "--peek-x": "46px",
      "--peek-y": "-62px",
      "--peek-r": "6deg",
    },
  },
  {
    title: "PupLoop",
    image: folderCardPuploopUrl,
    variant: "note",
    label: "2026",
    style: {
      "--open-x": "230px",
      "--open-y": "72px",
      "--open-r": "12deg",
      "--open-scale": "0.96",
      "--card-w": "144px",
      "--card-h": "188px",
      "--card-color": "#7946e8",
      "--card-delay": "170ms",
      "--card-z": 1,
      "--peek-x": "66px",
      "--peek-y": "-52px",
      "--peek-r": "8deg",
    },
  },
];

const projectCards = [
  {
    title: "YOUTH",
    subtitle: "Visual Poster",
    image: projectYouthUnlimitedUrl,
    style: { "--x": "-390px", "--y": "14px", "--rot": "-8deg", "--z": 2, "--accent": "#111111" },
  },
  {
    title: "EAT FIRST",
    subtitle: "Food Experience",
    image: projectEatFirstSceneUrl,
    style: { "--x": "-260px", "--y": "-10px", "--rot": "6deg", "--z": 3, "--accent": "#f35c68" },
  },
  {
    title: "ACTION POSE",
    subtitle: "Character Shot",
    image: projectActionPoseUrl,
    style: { "--x": "-130px", "--y": "10px", "--rot": "-4deg", "--z": 4, "--accent": "#ffca38" },
  },
  {
    title: "SKATER",
    subtitle: "Style Frame",
    image: projectSkaterStyleUrl,
    style: { "--x": "0px", "--y": "-2px", "--rot": "3deg", "--z": 6, "--accent": "#f48a73" },
  },
  {
    title: "PUPLOOP PIXEL",
    subtitle: "Game Study",
    image: projectPuploopPixelUrl,
    style: { "--x": "130px", "--y": "10px", "--rot": "-3deg", "--z": 7, "--accent": "#3ac16f" },
  },
  {
    title: "SKATE JUMP",
    subtitle: "Motion Study",
    image: projectSkateJumpUrl,
    style: { "--x": "260px", "--y": "-12px", "--rot": "-5deg", "--z": 5, "--accent": "#63c6ba" },
  },
  {
    title: "ABOUT",
    subtitle: "Personal Story",
    image: projectAboutMeUrl,
    style: { "--x": "390px", "--y": "12px", "--rot": "7deg", "--z": 4, "--accent": "#8fc8ff" },
  },
];

function ProjectRoomSection() {
  return (
    <section className="clean-page folder-project-room" id="portfolio-room" aria-label="作品展示">
      <div className="clean-shell">
        <div className="clean-hero-copy">
          <p className="clean-hero-note">Selected work, product stories, and visual experiments.</p>
          <h1>A place to display your projects.</h1>
        </div>

        <div className="clean-project-deck" id="gallery" aria-label="Selected project cards">
          <div className="clean-card-stage">
            {projectCards.map((card) => (
              <article
                className="clean-project-card clean-project-card-standard"
                style={card.style}
                key={card.title}
              >
                <img src={card.image} alt="" />
                <div className="clean-card-caption">
                  <strong>{card.title}</strong>
                  <span>{card.subtitle}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="clean-hero-bottom">
          <p>Curate every case study with clarity, color, and a memorable first impression.</p>
        </div>
      </div>
    </section>
  );
}

function FolderHome() {
  const [isFolderOpen, setIsFolderOpen] = React.useState(false);
  const [eyeOffset, setEyeOffset] = React.useState({ x: 0, y: 0 });
  const eyeStickerRef = React.useRef(null);

  const updateEyeOffset = (event) => {
    const sticker = eyeStickerRef.current;

    if (!sticker) {
      return;
    }

    const rect = sticker.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY) || 1;
    const maxMove = rect.width * 0.055;

    setEyeOffset({
      x: (deltaX / distance) * maxMove,
      y: (deltaY / distance) * maxMove,
    });
  };

  const resetEyeOffset = () => {
    setEyeOffset({ x: 0, y: 0 });
  };

  const openFolder = () => {
    setIsFolderOpen(true);
  };

  const closeFolder = (event) => {
    setIsFolderOpen(false);
    if (document.activeElement === event.currentTarget) {
      event.currentTarget.blur();
    }
  };

  const closeWhenFocusLeaves = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFolderOpen(false);
    }
  };

  return (
    <main>
      <section
        id="intro"
        className="folder-home-page"
        aria-label="作品集文件夹首页"
        onPointerMove={updateEyeOffset}
        onPointerLeave={resetEyeOffset}
      >
        <img className="folder-background-word" src={folderBackgroundWelcomeUrl} alt="" aria-hidden="true" />
        <div className="folder-stage">
          <div
            className={`portfolio-folder${isFolderOpen ? " is-open" : ""}`}
            role="group"
            aria-label="作品集文件夹"
            aria-expanded={isFolderOpen}
            tabIndex={0}
            onPointerEnter={openFolder}
            onPointerLeave={closeFolder}
            onMouseEnter={openFolder}
            onMouseLeave={closeFolder}
            onFocus={openFolder}
            onBlur={closeWhenFocusLeaves}
          >
            <div className="folder-shell">
              <div className="folder-back" aria-hidden="true" />
              <div className="folder-card-stack">
                {folderCards.map((card) => (
                  <span
                    className={`folder-card folder-card-${card.variant}`}
                    style={card.style}
                    key={card.title}
                    aria-hidden="true"
                  >
                    <span className="folder-card-badge">{card.label}</span>
                    <span className="folder-card-surface">
                      <img src={card.image} alt="" />
                      <span className="folder-card-text">{card.label}</span>
                    </span>
                  </span>
                ))}
              </div>

              <div className="folder-front" aria-hidden="true">
                <span className="folder-title">Yang mini</span>
                <span
                  className="folder-sticker folder-sticker-eye folder-eye-sticker"
                  ref={eyeStickerRef}
                  style={{
                    "--eye-x": `${eyeOffset.x}px`,
                    "--eye-y": `${eyeOffset.y}px`,
                  }}
                  aria-hidden="true"
                >
                  <img className="folder-eye-art" src={portfolioEyeStickerUrl} alt="" />
                  <span className="folder-googly-eye folder-googly-eye-left">
                    <span className="folder-googly-pupil" />
                  </span>
                  <span className="folder-googly-eye folder-googly-eye-right">
                    <span className="folder-googly-pupil" />
                  </span>
                </span>
                <img className="folder-sticker folder-sticker-idea" src={goodIdeaStickerUrl} alt="" aria-hidden="true" />
                <span className="folder-action-bubble">
                  <span className="folder-front-arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectRoomSection />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("folder-root")).render(
  <React.StrictMode>
    <FolderHome />
  </React.StrictMode>,
);
