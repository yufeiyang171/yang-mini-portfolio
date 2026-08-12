import { useEffect } from "react";
import {
  ArrowUpRight,
  Atom,
  Blocks,
  Braces,
  CalendarDays,
  Figma,
  Mail,
  MapPin,
  Network,
  Workflow,
} from "lucide-react";
import avatarUrl from "./assets/avatar.png";
import eatFirstCoverUrl from "./assets/project-eat-first.png";
import aboutCoverUrl from "./assets/project-about-cover.png";
import puploopCoverUrl from "./assets/project-puploop.png";
import eatFirstSceneCoverUrl from "./assets/project-eat-first-scene.png";
import quanzhouCoverUrl from "./assets/project-quanzhou.png";
import travelingCoverUrl from "./assets/project-traveling.png";
import aboutMeCoverUrl from "./assets/project-about-me.png";
import puploopPixelCoverUrl from "./assets/project-puploop-pixel.png";
import designPortfolioYellowUrl from "./assets/project-design-portfolio-yellow.png";
import introCoverUrl from "./assets/intro-cover.png";

const navItems = [
  { label: "首页", href: "#intro" },
  { label: "经历", href: "#experience" },
  { label: "项目", href: "#projects" },
  { label: "优势", href: "#strengths" },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "18+", label: "Shipped Projects" },
  { value: "7", label: "Product Domains" },
  { value: "0-1", label: "Strategy To Launch" },
];

const contacts = [
  { icon: Mail, label: "Email", value: "yourname@email.com" },
  { icon: MapPin, label: "Base", value: "China / Remote" },
  { icon: CalendarDays, label: "Availability", value: "Open for selected work" },
];

const timeline = [
  {
    period: "2024 - Now",
    role: "Senior Product / Interaction Designer",
    detail: "负责 AI 产品体验、复杂业务流程和跨端设计系统，从问题定义推进到高保真交付。",
  },
  {
    period: "2021 - 2024",
    role: "Product Designer",
    detail: "覆盖 B 端平台、数据工具、移动端增长场景，擅长把抽象需求转译成清晰的信息架构。",
  },
  {
    period: "Before",
    role: "Visual & UX Exploration",
    detail: "持续沉淀视觉表达、交互原型和用户研究方法，让产品既有秩序也有记忆点。",
  },
];

const projects = [
  {
    eyebrow: "AI Workspace",
    title: "智能工作台体验重构",
    summary:
      "围绕多角色协作、任务生成和结果确认链路，重构 AI 助理工作台的核心体验模型。",
    metric: "32%",
    metricLabel: "核心路径效率提升",
    tags: ["AI Product", "Workflow", "Design System"],
    tone: "teal",
  },
  {
    eyebrow: "Data Product",
    title: "经营分析驾驶舱",
    summary:
      "将分散指标、预警策略和行动建议整合成可扫描的数据决策界面，降低信息噪音。",
    metric: "6",
    metricLabel: "核心业务视角整合",
    tags: ["Dashboard", "IA", "B2B SaaS"],
    tone: "amber",
  },
  {
    eyebrow: "Mobile Growth",
    title: "移动端转化路径设计",
    summary:
      "通过首屏承诺、渐进式表单和关键反馈节点，搭建更自然的增长转化体验。",
    metric: "21%",
    metricLabel: "表单完成率提升",
    tags: ["Mobile UX", "Prototype", "Growth"],
    tone: "rose",
  },
];

const strengths = [
  {
    icon: Network,
    title: "复杂信息架构",
    text: "能把多角色、多状态、多规则的业务系统拆成可理解、可扩展的体验结构。",
  },
  {
    icon: Workflow,
    title: "交互流程设计",
    text: "擅长从用户目标反推路径、状态、反馈和异常处理，让流程稳定且少打扰。",
  },
  {
    icon: Atom,
    title: "AI 产品化思维",
    text: "关注 AI 能力与真实任务之间的衔接，让生成、确认、追问和修正形成闭环。",
  },
  {
    icon: Figma,
    title: "高保真视觉落地",
    text: "在克制的视觉系统中建立识别度，兼顾层级、节奏、动效和工程可实现性。",
  },
  {
    icon: Blocks,
    title: "设计系统建设",
    text: "用组件、变量和规范降低重复沟通，让产品长期迭代时仍然保持一致。",
  },
  {
    icon: Braces,
    title: "前端协作意识",
    text: "理解响应式、状态和实现约束，能用清晰标注和原型提升协作效率。",
  },
];

const heroShowcaseCards = [
  {
    label: "QUANZHOU",
    className: "mock-wide mock-cover",
    projectIndex: 0,
    image: quanzhouCoverUrl,
    style: { "--r": "-10deg", "--delay": "-1.4s", "--depth": 1.1 },
  },
  {
    label: "AI FLOW",
    className: "mock-strip mock-cover",
    projectIndex: 0,
    image: aboutCoverUrl,
    style: { "--r": "7deg", "--delay": "-3.2s", "--depth": 0.75 },
  },
  {
    label: "PUPLOOP",
    className: "mock-wide mock-cover",
    projectIndex: 1,
    image: puploopCoverUrl,
    style: { "--r": "-4deg", "--delay": "-2s", "--depth": 1.3 },
  },
  {
    label: "TRAVELING",
    className: "mock-wide mock-cover",
    projectIndex: 1,
    image: travelingCoverUrl,
    style: { "--r": "4deg", "--delay": "-4.4s", "--depth": 1.15 },
  },
  {
    label: "PUPLOOP PIXEL",
    className: "mock-wide mock-cover",
    projectIndex: 1,
    image: puploopPixelCoverUrl,
    style: { "--r": "-7deg", "--delay": "-5.8s", "--depth": 0.85 },
  },
  {
    label: "DESIGN PORTFOLIO",
    className: "mock-wide mock-cover",
    projectIndex: 2,
    image: designPortfolioYellowUrl,
    style: { "--r": "6deg", "--delay": "-6.4s", "--depth": 1.05 },
  },
  {
    label: "EAT FIRST",
    className: "mock-wide mock-cover",
    projectIndex: 2,
    image: eatFirstSceneCoverUrl,
    style: { "--r": "-6deg", "--delay": "-2.8s", "--depth": 1.55 },
  },
  {
    label: "ABOUT",
    className: "mock-wide mock-cover",
    projectIndex: 0,
    image: aboutMeCoverUrl,
    style: { "--r": "5deg", "--delay": "-5.2s", "--depth": 0.65 },
  },
  {
    label: "PRODUCT SYSTEM",
    className: "mock-wide mock-cover",
    projectIndex: 2,
    image: eatFirstCoverUrl,
    style: { "--r": "-3deg", "--delay": "-3.9s", "--depth": 1 },
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#intro" aria-label="返回首页">
        <span className="brand-mark">YM</span>
      </a>

      <nav className="nav-links" aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="mailto:yourname@email.com">
        <Mail size={16} aria-hidden="true" />
        联系我
      </a>
    </header>
  );
}

function IntroHome() {
  return (
    <section id="intro" className="intro-home" aria-label="设计作品集首页导入">
      <img className="intro-cover" src={introCoverUrl} alt="" />
      <a className="intro-scroll" href="#hero" aria-label="向下查看作品轮播">
        Scroll
      </a>
    </section>
  );
}

const pixelLetterPatterns = {
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  S: ["11111", "10000", "10000", "11110", "00001", "00001", "11110"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  G: ["11111", "10000", "10000", "10111", "10001", "10001", "11111"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
};

const heroPixelColors = ["#4bd7ff", "#a7ff35", "#ffffff", "#ff5f8f", "#ffffff", "#97ff49", "#dff6ff"];

function PixelWord({ text, lineIndex }) {
  return text.split("").map((letter, index) => {
    const pattern = pixelLetterPatterns[letter] ?? pixelLetterPatterns.E;
    const cells = pattern.flatMap((row) => row.split(""));

    return (
      <span
        className="pixel-letter"
        key={`${letter}-${index}`}
        style={{
          "--cols": pattern[0].length,
          "--pixel-color": heroPixelColors[(lineIndex * 3 + index) % heroPixelColors.length],
        }}
        aria-hidden="true"
      >
        {cells.map((cell, cellIndex) => (
          <span className={cell === "1" ? "pixel-cell is-filled" : "pixel-cell"} key={cellIndex} />
        ))}
      </span>
    );
  });
}

function Hero() {
  const heroTitleLines = ["DESIGN", "PORTFOLIO"];

  return (
    <section id="hero" className="hero">
      <h1 className="hero-title reveal">
        Product / Interaction<br />Designer Portfolio
      </h1>

      <div className="hero-center-brand" aria-label="Design Portfolio">
        {heroTitleLines.map((line, lineIndex) => (
          <div className="hero-brand-line" key={line}>
            <PixelWord text={line} lineIndex={lineIndex} />
          </div>
        ))}
        <a className="hero-brand-pill" href="#projects" aria-label="查看精选项目">
          <span>Selected Work</span>
          <span className="pixel-arrow" aria-hidden="true" />
        </a>
      </div>

      <div className="hero-showcase reveal" aria-label="作品集封面自动轮播，悬停暂停">
        {heroShowcaseCards.map((card) => (
          <a
            className={`floating-mock ${card.className}`}
            href={`#project-${card.projectIndex + 1}`}
            style={card.style}
            key={card.label}
            aria-label={`查看项目：${projects[card.projectIndex].title}`}
          >
            {card.image ? (
              <img className="mock-cover-image" src={card.image} alt="" />
            ) : (
              <>
                <div className="mock-head">
                  <span>{card.label}</span>
                  <i />
                </div>
                <div className="mock-body">
                  {card.className.includes("mock-avatar") ? (
                    <img src={avatarUrl} alt="" />
                  ) : (
                    <>
                      <b />
                      <b />
                      <b />
                    </>
                  )}
                </div>
              </>
            )}
          </a>
        ))}
      </div>

      <div className="hero-footer">
        <span>Motion / Web / Product UX / Prototype</span>
        <span>Selected works preview</span>
        <span>Fully responsive / CMS-driven / easy customization</span>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-shell">
        <div className="section-heading reveal">
          <span className="section-index">01 / Experience</span>
          <h2>从产品策略到交互细节，让体验拥有清晰的骨架。</h2>
        </div>

        <div className="profile-grid">
          <figure className="avatar-card reveal">
            <div className="avatar-ring">
              <img src={avatarUrl} alt="3D 卡通风个人头像" />
            </div>
            <figcaption>
              <strong>Product / Interaction Designer</strong>
              <span>Designing calm systems for complex products.</span>
            </figcaption>
          </figure>

          <div className="profile-copy reveal">
            <p className="profile-lede">
              我是一名产品设计师 / 交互设计师，擅长处理复杂产品的信息架构、关键任务链路和高保真视觉表达。我的设计方法更偏系统性：
              先找到真实问题，再用结构、节奏、反馈和细节，把体验做得可理解、可信任、可持续迭代。
            </p>

            <div className="contact-list">
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="contact-item" key={item.label}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                );
              })}
            </div>

            <div className="stats-grid" aria-label="项目数据">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline reveal">
          {timeline.map((item) => (
            <article key={item.period} className="timeline-item">
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ tone }) {
  return (
    <div className={`project-visual project-visual-${tone}`} aria-hidden="true">
      <div className="visual-toolbar">
        <i />
        <i />
        <i />
      </div>
      <div className="visual-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="visual-focus">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-shell">
        <div className="section-heading reveal">
          <span className="section-index">02 / Selected Projects</span>
          <h2>精选项目用大画幅呈现，突出问题、路径与结果。</h2>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal tone-${project.tone}`}
              id={`project-${index + 1}`}
              key={project.title}
            >
              <div className="project-content">
                <span className="project-eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <ProjectVisual tone={project.tone} />
              <div className="project-metric">
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section id="strengths" className="section strengths-section">
      <div className="section-shell">
        <div className="section-heading reveal">
          <span className="section-index">03 / Strengths</span>
          <h2>能力不是标签，而是能反复解决问题的方法。</h2>
        </div>

        <div className="strength-grid">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article className="strength-card reveal" key={item.title}>
                <div className="strength-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner reveal">
        <p className="eyebrow">Available For Product Design / Interaction Design</p>
        <h2>让下一个产品体验，更清晰、更高级、更有生命力。</h2>
        <div className="contact-actions">
          <a className="primary-button" href="mailto:yourname@email.com">
            <Mail size={18} aria-hidden="true" />
            yourname@email.com
          </a>
          <a className="ghost-button" href="#intro">
            回到顶部
          </a>
        </div>
      </div>
      <div className="contact-footer">
        <span>Yang Mini Portfolio</span>
        <span>Product Strategy / Interaction / Visual System</span>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updatePointer = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty("--mx", x.toFixed(4));
      document.documentElement.style.setProperty("--my", y.toFixed(4));
    };

    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  useEffect(() => {
    const showcase = document.querySelector(".hero-showcase");
    const cards = Array.from(document.querySelectorAll(".floating-mock"));

    if (!showcase || cards.length === 0) return undefined;

    let frameId = 0;
    let lastTime = performance.now();
    let progress = 0;
    let paused = false;

    const setPaused = (value) => {
      paused = value;
      showcase.classList.toggle("is-paused", value);
    };

    const paint = (time) => {
      const delta = Math.min(time - lastTime, 48);
      lastTime = time;

      if (!paused) {
        progress += delta * 0.00028;
      }

      const mobile = window.innerWidth < 520;
      const compact = window.innerWidth < 900;
      const radiusX = mobile ? 122 : compact ? 190 : 300;
      const radiusY = mobile ? 104 : compact ? 125 : 190;

      cards.forEach((card, index) => {
        const isHovered = card.classList.contains("is-hovered");
        const angle = progress + (index / cards.length) * Math.PI * 2 - Math.PI / 2;
        const yPhase = Math.sin(angle);
        const x = Math.cos(angle) * radiusX;
        const y = yPhase * radiusY;
        const normalizedDepth = (yPhase + 1) / 2;
        const scale = 0.88 + normalizedDepth * 0.16;
        const depth = 0.55 + normalizedDepth * 0.75;
        const opacity = 0.58 + normalizedDepth * 0.42;
        const blur = 0;

        card.style.setProperty("--auto-x", `${x.toFixed(2)}px`);
        card.style.setProperty("--auto-y", `${y.toFixed(2)}px`);
        card.style.setProperty("--auto-scale", scale.toFixed(3));
        card.style.setProperty("--auto-depth", depth.toFixed(3));
        card.style.setProperty("--auto-opacity", opacity.toFixed(3));
        card.style.setProperty("--auto-blur", `${blur.toFixed(2)}px`);
        card.style.zIndex = isHovered ? "9999" : String(Math.round(20 + normalizedDepth * 80));
      });
    };

    const render = (time) => {
      paint(time);
      frameId = window.requestAnimationFrame(render);
    };

    const pause = (event) => {
      event.currentTarget.classList.add("is-hovered");
      setPaused(true);
    };
    const resume = (event) => {
      event.currentTarget.classList.remove("is-hovered");
      setPaused(false);
    };

    cards.forEach((card) => {
      card.addEventListener("pointerenter", pause);
      card.addEventListener("pointerleave", resume);
      card.addEventListener("focus", pause);
      card.addEventListener("blur", resume);
    });

    paint(performance.now());
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      cards.forEach((card) => {
        card.removeEventListener("pointerenter", pause);
        card.removeEventListener("pointerleave", resume);
        card.removeEventListener("focus", pause);
        card.removeEventListener("blur", resume);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <IntroHome />
        <Hero />
        <Experience />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}
