# ANSHIKA.DEV

> **Projects I'm building. Ideas I'm exploring.**

A personal, interactive portfolio designed as a **digital workspace for my projects, experiments, ideas, and creative work**.

This isn't intended to be a static resume on the web.
It's an evolving space where I document what I'm building, what I'm learning, and what I'm curious about.

---



# ✦ WHAT'S INSIDE

### `WORK`

Projects I'm actively building.

Each project focuses on the **problem, idea, technology, architecture and implementation** rather than simply listing a tech stack.

---

### `LAB`

A space for experiments and things I'm currently exploring.

This includes areas such as:

* Artificial Intelligence
* Machine Learning
* Explainable AI
* Data
* Computer Vision
* Emerging technologies
* Interesting technical experiments

Not everything here needs to become a finished product.

Some things are simply questions worth exploring.

---

### `CREATIVE`

Technology isn't the only thing I enjoy creating.

This section brings together:

* UI experiments
* Posters
* Visual designs
* Logos
* Photography frames
* Animations
* Other creative work



---

### `ABOUT`

A little more about the person behind the screen.

Not a traditional resume section.

More about:

```text
WHAT I'M INTERESTED IN
WHAT I'M LEARNING
WHAT I'M BUILDING
WHAT I'M CURIOUS ABOUT
```

---

### `CONTACT`

If there's an interesting problem, project, collaboration, or idea worth discussing:

**Let's build something.**

---

# ⚡ INTERACTION

The portfolio is designed to behave more like a **digital product** than a static webpage.

It includes:

* Smooth section navigation
* Scroll-based animations
* Interactive project showcases
* Expandable project details
* Animated technical visuals
* Interactive lab experiments
* Custom cursor interactions
* Scroll progress
* Command palette
* Keyboard navigation
* Interactive terminal
* Image/lightbox interactions
* Responsive navigation
* Micro-interactions

Everything lives on **one page**.

Navigation does not take the visitor through multiple pages.

Instead:

```text
WORK ────────┐
LAB ─────────┤
CREATIVE ────┤
ABOUT ───────┼──→ SINGLE PAGE
CONTACT ─────┘
```

---

# 🧠 TECH STACK

### Frontend

```text
Next.js
React
TypeScript
Tailwind CSS
```

### Motion & Interaction

```text
Framer Motion
CSS Animations
Intersection Observer
```

### Optional Visual Layer

```text
Three.js
React Three Fiber
```

Three.js is only used where it genuinely adds value.

The goal isn't to make everything 3D.

The goal is to make the interface **feel alive**.

---

# 🏗️ ARCHITECTURE

The project is organized around reusable components and data-driven content.

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   │
│   ├── Navigation/
│   ├── LoadingScreen/
│   ├── Hero/
│   ├── IdentityStrip/
│   │
│   ├── Work/
│   │   ├── ProjectShowcase/
│   │   ├── ProjectDetails/
│   │   └── ProjectFilters/
│   │
│   ├── Lab/
│   │   └── ExperimentCard/
│   │
│   ├── Terminal/
│   ├── TechStack/
│   ├── Creative/
│   │   └── CreativeGallery/
│   │
│   ├── Journey/
│   ├── About/
│   ├── Currently/
│   ├── GithubActivity/
│   ├── Contact/
│   │
│   ├── CommandPalette/
│   ├── CustomCursor/
│   └── ScrollProgress/
│
├── data/
│   ├── projects.ts
│   ├── experiments.ts
│   ├── creative.ts
│   └── journey.ts
│
├── hooks/
│
├── lib/
│
└── public/
    ├── projects/
    ├── creative/
    └── assets/
```

The UI is kept separate from the content so projects and experiments can be added or updated without rebuilding the entire interface.

---

# 🧩 PROJECT DATA

Projects are represented using structured data rather than hardcoded UI.

```ts
{
  id,
  title,
  description,
  category,
  year,
  technologies,
  features,
  problem,
  solution,
  result,
  github,
  liveDemo,
  image,
  featured
}
```

This makes the portfolio scalable as more projects are added.

---

# 🔬 CURRENT PROJECTS

## MediGuard

**Smart Medicine Safety & Drug Interaction Assistant**

A healthcare-focused application exploring safer medication use through drug interaction detection, medicine normalization, patient information, and external medical data sources.

**Focus**

```text
AI
Healthcare
Drug Safety
Data
APIs
Product Design
```

---

## CardioXAI

**Explainable AI for Heart Disease Prediction**

An exploration of machine learning and explainability using clinical and lifestyle data.

**Focus**

```text
Machine Learning
Explainable AI
Python
Data Analytics
Model Interpretation
```

---

## SkillBridge AI

**AI-powered career exploration and skill planning**

A product concept focused on connecting skills, career goals, competencies and personalized learning paths.

**Focus**

```text
AI
Product
Next.js
TypeScript
PostgreSQL
Supabase
```

> Projects and descriptions will continue to evolve as development progresses.

---

# 🧪 THE LAB

The Lab exists because not every interesting idea needs to immediately become a product.

Current areas of exploration include:

```text
Artificial Intelligence
Machine Learning
Explainable AI
Data Analytics
Computer Vision
Neuromorphic Computing
Interactive Web Experiences
```

The Lab is intentionally experimental.

Some experiments may become projects.

Some may remain experiments.

That's the point.

---

# 🎨 DESIGN SYSTEM

The visual language is based around:

```text
Dark Interface
      +
Editorial Typography
      +
Technical UI
      +
Subtle Motion
      +
Interactive Elements
```

The design intentionally avoids the typical portfolio patterns:

```text
❌ Skill percentage bars
❌ Generic project cards
❌ Certificate walls
❌ Excessive gradients
❌ Template-like layouts
❌ Unnecessary 3D
❌ Animation for the sake of animation
```

Instead, the interface focuses on:

```text
✓ Typography
✓ Spacing
✓ Motion
✓ Interaction
✓ Visual hierarchy
✓ Technical storytelling
✓ Performance
```

---

# ⌘ COMMAND SYSTEM

The portfolio includes a command palette designed for quick navigation.

```text
⌘ K
```

Possible commands:

```text
→ Go to Work
→ Go to Lab
→ Go to Creative
→ Go to About
→ Go to Contact
→ Open GitHub
```

There is also an interactive terminal Easter egg.

Example:

```text
anshika@dev ~ %

$ help

work
lab
about
creative
contact
clear
```

The terminal is intentionally secondary.

The normal navigation remains available to everyone.

---

# 📱 RESPONSIVE BY DESIGN

The experience is designed for:

```text
Desktop
Tablet
Mobile
```

Mobile isn't simply a scaled-down desktop version.

The interaction model changes where necessary to maintain usability and performance.

Complex cursor interactions are disabled on touch devices.

Animations also respect:

```text
prefers-reduced-motion
```

---

# 🚀 PERFORMANCE

A visually rich website shouldn't mean a slow website.

Performance considerations include:

* Lazy-loaded media
* Optimized images
* Lightweight animations
* GPU-friendly transforms
* Minimal unnecessary JavaScript
* Responsive assets
* Component-level optimization
* Reduced animation on mobile
* Reduced-motion support

The objective:

> **Make it feel sophisticated without making it heavy.**

---

# ♿ ACCESSIBILITY

The portfolio aims to remain usable beyond visual interaction.

It includes:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible controls
* Alternative text for images
* Appropriate contrast
* Reduced-motion support
* Accessible interactive elements

---

# 🔐 CONTENT PRINCIPLE

Everything presented on this portfolio should represent **real work, real experimentation, or genuine interests**.

No:

```text
Fake clients
Fake statistics
Fake achievements
Fake testimonials
Fake experience
Fake project results
```

The portfolio should grow with the work rather than exaggerate it.

---

# 🛠️ RUN LOCALLY

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 📦 BUILD

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

# 🗺️ ROADMAP

### Phase 01 — Foundation

* [x] Project architecture
* [x] Design direction
* [ ] Core layout
* [ ] Navigation
* [ ] Hero experience

### Phase 02 — Interactive Portfolio

* [ ] Work section
* [ ] Project showcase
* [ ] Lab
* [ ] Creative gallery
* [ ] About
* [ ] Contact

### Phase 03 — Developer Experience

* [ ] Command palette
* [ ] Interactive terminal
* [ ] Keyboard navigation
* [ ] GitHub activity
* [ ] Advanced micro-interactions

### Phase 04 — Polish

* [ ] Performance optimization
* [ ] Accessibility audit
* [ ] Mobile refinement
* [ ] SEO
* [ ] Open Graph metadata
* [ ] Final visual polish

---


---

# CURRENT STATUS

```text
STATUS:        ACTIVELY BUILDING
TYPE:          SINGLE-PAGE PORTFOLIO
FOCUS:         AI • DATA • DEVELOPMENT • DESIGN
PHILOSOPHY:    BUILD → EXPLORE → EXPERIMENT → ITERATE
```

This portfolio is a work in progress.

And that's intentional.

**Projects I'm building.
Ideas I'm exploring.
Things I'm still figuring out.**

---

## CONNECT

**Anshika Khandelwal**

```text
GitHub
LinkedIn
Email
```

If you're interested in technology, AI, data, product building, or simply making interesting things—

**let's connect.**

---

<p align="center">

### `BUILD SOMETHING INTERESTING.`

</p>
