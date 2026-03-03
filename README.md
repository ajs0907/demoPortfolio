# Aidan J. Sheehan — Engineering & Deep Tech Portfolio

A dark-themed, interactive portfolio website built to showcase the engineering, design, and software work of **Aidan J. Sheehan**, a Mechanical Engineering student at the **University of Washington, Seattle**. The site serves as a living record of projects that span CAD modeling, AI-powered systems, full-stack product development, and autonomous agents — designed to communicate technical depth and creative thinking to prospective employers, collaborators, and academic programs.

---

## What This Portfolio Covers

This isn't a template resume site. It's a purpose-built artifact showcase that treats each project as a case study — documenting not just *what* was built, but *how* it was designed, *why* specific decisions were made, and *what was learned* along the way.

### Featured Projects

| # | Project | Domain | Core Technologies | Description |
|---|---------|--------|-------------------|-------------|
| 01 | **Savery Hall Digital Twin** | Architecture / Parametric Design | Fusion 360 | Parametric reconstruction of the University of Washington's Savery Hall, focused on structural accuracy, facade detailing, and constraint-driven modeling |
| 02 | **Automotive Car Design** | Mechanical / Surface Modeling | OnShape | Aerodynamic vehicle body design involving multi-section lofts, G2 surface continuity, and collaborative version-controlled CAD workflows |
| 03 | **Hunger Management AI** | Software / AI Simulation | Python, OpenAI API | A real-time geopolitical simulation engine that uses LLM-driven agents to model resource crises and generate management strategies |
| 04 | **Micromastery App** | Product Engineering | React Native, Supabase | A mobile-first learning platform designed around micro-skills, deliberate practice loops, and focused goal tracking |
| 05 | **Email Triage Agent** | AI Agents / Automation | Next.js, LLM Agents, Email APIs | An autonomous email management system that categorizes, prioritizes, and drafts responses using LLM orchestration |

Each project has a dedicated detail page (`projects/*.html`) documenting:
- **The Challenge** — problem context and constraints
- **Design Process** — a visual timeline of engineering decisions
- **Skills Developed** — tagged technologies and competencies
- **What I Learned** — reflective takeaways on process and craft

---

## Design Philosophy

The portfolio is designed with a dark, minimal, glassmorphic aesthetic that prioritizes content legibility and visual polish:

- **Dark Mode First** — `#010101` base with finely controlled opacity layers
- **Glassmorphism** — translucent panels with `backdrop-filter: blur(20px)` for depth
- **Typographic Hierarchy** — Inter typeface at weights 200–800 with tight tracking for headlines
- **Progressive Disclosure** — scroll-triggered reveal animations prevent visual overload
- **Custom Cursor** — dual-dot cursor system using `mix-blend-mode: difference` (hidden on touch devices)
- **Animated Backgrounds** — layered space/tech system with starfield particles, a dot grid, geometric circuit lines, and slowly orbiting rings

The design language is intentionally engineered — not decorated — to reflect the same rigor present in the work it showcases.

---

## Technical Architecture

The site is a static, framework-free portfolio built with vanilla HTML/CSS/JS plus utility libraries — no build step, no bundler, instant deployment.

### File Structure

```
demoPortfolio/
├── index.html                  ← Main page (hero, about, slideshow, contact)
├── css/
│   ├── main.css                ← Design system: tokens, glass, cursor, layout, components
│   └── bg-system.css           ← Background patterns: grid, starfield, geo-lines, orbit rings
├── js/
│   ├── main.js                 ← GSAP-driven cursor tracking + scroll reveal animations
│   ├── slideshow.js            ← Project carousel: transitions, progress bar, keyboard nav
│   └── bg-system.js            ← Canvas starfield particles + geometric circuit line generation
└── projects/
    ├── savery-hall.html         ← Project detail: Savery Hall Digital Twin
    ├── car-design.html          ← Project detail: Automotive Car Design
    ├── hunger-ai.html           ← Project detail: Hunger Management AI
    ├── micromastery.html        ← Project detail: Micromastery App
    └── email-triage.html        ← Project detail: Email Triage Agent
```

### Dependencies (via CDN)

| Library | Version | Purpose |
|---------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com) | Latest (CDN) | Utility-first responsive layout |
| [GSAP](https://greensock.com/gsap/) | 3.12.2 | Scroll-triggered animations and slide transitions |
| [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) | 3.12.2 | Intersection-based animation triggers |
| [Inter](https://fonts.google.com/specimen/Inter) | Variable | Primary typeface (200/400/600/800) |

### CSS Architecture

All styles are centralized in two files:

- **`css/main.css`** — Contains the design system: CSS custom properties (design tokens), base styles, glass effects, custom cursor, slideshow layout, hero glow, progress bar, contact hover, timeline components, fade-in/reveal animations, and accessibility focus styles.
- **`css/bg-system.css`** — Contains the space/tech background layer system: dot grid pattern, starfield canvas positioning, geometric accent lines, circuit nodes, orbiting ring animations, and z-index management to keep backgrounds behind content.

### JavaScript Architecture

All behavior is split across three self-contained modules:

- **`js/main.js`** — Initializes GSAP, registers ScrollTrigger, sets up the custom cursor (for non-touch devices), and triggers `.reveal` element animations on scroll.
- **`js/slideshow.js`** — Self-initializing IIFE that manages the project carousel: slide state, GSAP-powered transitions, progress bar updates, slide counter formatting, and keyboard arrow navigation.
- **`js/bg-system.js`** — Two self-contained IIFEs: one renders a canvas-based starfield with drifting/pulsing particles and constellation-like connection lines; the other procedurally generates geometric circuit lines and glowing nodes using DOM elements.

---

## Background System

The animated background creates a layered space/technology atmosphere while remaining subtle enough to avoid competing with content. It consists of four layers:

1. **Dot Grid** (`CSS`) — A `radial-gradient` pattern at 40×40px intervals creating a subtle blueprint/schematic texture
2. **Starfield** (`Canvas`) — Dynamically generated particles that drift, pulse in opacity, and form faint blue connection lines between nearby stars. Particle count scales with viewport size.
3. **Circuit Lines** (`DOM`) — Procedurally placed horizontal/vertical gradient lines with glowing blue intersection nodes, evoking a circuitboard or technical schematic aesthetic
4. **Orbit Rings** (`CSS Animation`) — Three slowly rotating circular outlines at different sizes and speeds (120s, 90s, 150s cycles), creating imperceptible ambient motion

All background layers use `position: fixed`, `pointer-events: none`, and `z-index: 0` to ensure they never interfere with clickable content.

---

## Slideshow System

The project carousel features:

- **GSAP-powered slide transitions** — horizontal slide with fade, `power2` easing
- **Progress bar** — dynamically updates width based on current slide index
- **Slide counter** — zero-padded display (e.g., `01 / 05`)
- **Keyboard navigation** — `←` / `→` arrow key support
- **Animation locking** — prevents rapid-fire clicks from breaking transition state
- **Per-slide skill tags** — each project displays its primary technologies
- **"Learn More" CTAs** — each slide links to a full project detail page in a new tab

---

## Running Locally

No build step required. Serve the directory with any static file server:

```bash
# Using npx (no install)
npx -y http-server . -p 8080 --cors -c-1

# Using Python
python -m http.server 8080

# Using VS Code
# Install "Live Server" extension → right-click index.html → "Open with Live Server"
```

Then open `http://localhost:8080` in your browser.

---

## Customization Guide

### Changing Colors
Edit `css/main.css` → `:root` block:
```css
:root {
    --bg-color: #010101;        /* page background */
    --accent-blue: #3b82f6;     /* accent color (buttons, tags, highlights) */
    --glass: rgba(255, 255, 255, 0.03);  /* glass panel fill */
    --border: rgba(255, 255, 255, 0.08); /* glass panel border */
}
```

### Adjusting Background Intensity
- **Starfield density**: `js/bg-system.js` → change divisor in `Math.floor((w * h) / 8000)` (lower = more particles)
- **Star brightness**: `js/bg-system.js` → adjust `opacity: Math.random() * 0.4 + 0.1`
- **Connection lines**: `js/bg-system.js` → change distance threshold `120` and alpha `0.03`
- **Grid dot visibility**: `css/bg-system.css` → `.bg-grid` → `rgba(255, 255, 255, 0.03)` opacity
- **Orbit ring speed**: `css/bg-system.css` → `.orbit-ring` → `animation` duration

### Adding a New Project
1. Create `projects/your-project.html` following the pattern in existing project files
2. Add a new `<div class="slide-container" id="slide-N">` block in `index.html`
3. Update the slide counter starting text to reflect the new total (e.g., `01 / 06`)
4. Update the progress bar initial width to `${100 / totalSlides}%`

---

## About the Author

**Aidan J. Sheehan** is a Mechanical Engineering undergraduate at the University of Washington, Seattle. His work sits at the intersection of physical design and intelligent systems — from precision parametric CAD to autonomous AI agents. He brings rigor and curiosity to every project and is actively seeking internships and opportunities in engineering, product, and AI.

**Focus Areas:** CAD & Parametric Design · AI / ML · Full-Stack Development · Product Engineering

**Tools & Languages:** Python · TypeScript · Next.js · Fusion 360 · OnShape · Supabase · React Native

**Contact:** [aidanjsheehan07@gmail.com](mailto:aidanjsheehan07@gmail.com)

---

## License

This portfolio and its contents are the intellectual property of Aidan J. Sheehan. The codebase structure and design patterns may be referenced for educational purposes, but the project content, descriptions, and personal information should not be reproduced without permission.
