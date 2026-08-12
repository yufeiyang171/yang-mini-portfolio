import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import boardUrl from "./assets/spotlight-board.png";
import "./spotlight.css";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function SpotlightPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    let frameId = 0;
    const target = { x: 0.55, y: 0.6 };
    const current = { ...target };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateLight = () => {
      const rect = page.getBoundingClientRect();
      const follow = reduceMotion.matches ? 1 : 0.18;

      current.x += (target.x - current.x) * follow;
      current.y += (target.y - current.y) * follow;

      const x = current.x * rect.width;
      const y = current.y * rect.height;
      const beamOriginX = rect.width * 0.5;
      const beamOriginY = -20;
      const dx = x - beamOriginX;
      const dy = y - beamOriginY;
      const distance = Math.hypot(dx, dy);
      const angle = Math.atan2(dx, dy) * (180 / Math.PI);
      const beamWidth = clamp(distance * 0.68, 320, 980);
      const revealWidth = clamp(distance * 0.42, 220, 680);
      const safeDistance = Math.max(distance, 1);
      const perpendicularX = -dy / safeDistance;
      const perpendicularY = dx / safeDistance;
      const halfReveal = revealWidth / 2;
      const coneLeftX = x + perpendicularX * halfReveal;
      const coneLeftY = y + perpendicularY * halfReveal;
      const coneRightX = x - perpendicularX * halfReveal;
      const coneRightY = y - perpendicularY * halfReveal;

      page.style.setProperty("--spot-x", `${x.toFixed(1)}px`);
      page.style.setProperty("--spot-y", `${y.toFixed(1)}px`);
      page.style.setProperty("--beam-origin-x", `${beamOriginX.toFixed(1)}px`);
      page.style.setProperty("--beam-origin-y", `${beamOriginY.toFixed(1)}px`);
      page.style.setProperty("--beam-angle", `${angle.toFixed(2)}deg`);
      page.style.setProperty("--beam-distance", `${(distance + 160).toFixed(1)}px`);
      page.style.setProperty("--beam-width", `${beamWidth.toFixed(1)}px`);
      page.style.setProperty("--cone-a-x", `${beamOriginX.toFixed(1)}px`);
      page.style.setProperty("--cone-a-y", `${beamOriginY.toFixed(1)}px`);
      page.style.setProperty("--cone-b-x", `${coneLeftX.toFixed(1)}px`);
      page.style.setProperty("--cone-b-y", `${coneLeftY.toFixed(1)}px`);
      page.style.setProperty("--cone-c-x", `${coneRightX.toFixed(1)}px`);
      page.style.setProperty("--cone-c-y", `${coneRightY.toFixed(1)}px`);

      frameId = window.requestAnimationFrame(updateLight);
    };

    const setTarget = (event) => {
      const rect = page.getBoundingClientRect();
      target.x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      target.y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    };

    page.addEventListener("pointermove", setTarget);
    page.addEventListener("pointerdown", setTarget);
    frameId = window.requestAnimationFrame(updateLight);

    return () => {
      window.cancelAnimationFrame(frameId);
      page.removeEventListener("pointermove", setTarget);
      page.removeEventListener("pointerdown", setTarget);
    };
  }, []);

  return (
    <main className="spotlight-page" ref={pageRef} aria-label="灯光跟随鼠标的作品集画板">
      <section className="spotlight-stage">
        <img className="spotlight-art spotlight-art-dim" src={boardUrl} alt="" draggable="false" />
        <img className="spotlight-art spotlight-art-lit" src={boardUrl} alt="" draggable="false" />
        <div className="spotlight-shadow" aria-hidden="true" />
        <div className="spotlight-beam" aria-hidden="true" />
        <div className="spotlight-hotspot" aria-hidden="true" />
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("spotlight-root")).render(
  <React.StrictMode>
    <SpotlightPage />
  </React.StrictMode>,
);
