<div align="center">

# 🏎️ Cinematic Ferrari Web Experience

### An Awwwards-worthy, immersive luxury automotive landing page built with cutting-edge 3D animations, cinematic visuals, and glassmorphism UI.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.183-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-⚡_Fast-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Live Demo](https://img.shields.io/badge/🔴_Live_Demo-Visit_Site-FF2800?style=for-the-badge)](https://your-demo-url.vercel.app)

<br/>

> *"Where Italian craftsmanship meets raw power."*

<br/>

![Ferrari Red](https://img.shields.io/badge/Ferrari_Red-%23FF2800?style=flat-square&logoColor=white)
![Background](https://img.shields.io/badge/Background-%230A0A0A?style=flat-square)
![Gold Accent](https://img.shields.io/badge/Gold_Accent-%23FFD700?style=flat-square)
![Cyan Accent](https://img.shields.io/badge/Cyan_Accent-%2300D9FF?style=flat-square)

</div>

---

## 🌐 Live Demo

<div align="center">

### 👉 [**View Live Site →**](https://your-demo-url.vercel.app)

> 🔁 Replace `your-demo-url.vercel.app` with your actual deployment URL (Vercel / Netlify / GitHub Pages)

</div>

---

## ✨ Overview

**Cinematic Ferrari Web Experience** is a premium, cinematic web landing page that pushes the boundaries of what a browser can do. Inspired by high-end automotive branding and built for sensory impact — featuring **real-time 3D rendering**, **scroll-driven animations**, **mouse-tracked interactions**, and a **glassmorphism design system** unified in Ferrari's iconic red-on-black aesthetic.

---

## 🎬 Features

### 🖥️ Cinematic Hero

![Live Smart Face Detection System Demo](https://github.com/Priyabratasubhransubehera/A-Ferrari-landing-page/blob/main/Ferrari%20Landpage.png)

### 🔴 3D Hero Scene (`Hero3D`)
- **Three.js** car built from primitive shapes with Ferrari red metallic finish
- Auto-rotation + **real-time mouse tracking** — car follows your cursor
- Multi-point cinematic lighting: key, fill, and rim lights
- **MeshReflectorMaterial** glossy floor with live mirror reflections
- Animated headlights, tail lights, and underglow effects

### 🚗 Featured Models 3D Slider
- Smooth horizontal carousel: **Ferrari 488 GTB**, **F8 Tributo**, **SF90 Stradale**
- Parallax zoom on hover + glassmorphism specification cards
- Real-time performance stats: HP, 0–100 km/h, Top Speed
- Keyboard and touch navigation support

### 📊 Performance Stats 3D
- **Animated counters** — 340+ km/h · 800+ HP · 2.9s 0–100 · 16+ Championships
- Cards rotate on scroll using CSS 3D perspective
- Floating particle systems and color-coded glow (Red / Gold / Cyan)
- Gradient-fill progress bars triggered on scroll into view

### 📋 Book Test Drive (3D Form)
- Glassmorphism form with icon-prefixed inputs and real-time focus states
- Form **rotates in 3D space on scroll** — depth, scale, and opacity animated
- Ferrari interior split layout with animated light streaks in background

### ⚙️ Tech Features 3D Cards
- **Mouse-tracking 3D tilt** — cards rotate on both X and Y axes
- Radial gradient background follows your cursor
- Showcases: V12 Engine · Carbon Fiber · Aerodynamics
- Animated corner accents and particle systems on hover

### 🔄 Additional Sections
- **Premium Loading Screen** — 3D text entrance, glowing Ferrari logo, particle grid
- **Scroll Progress Indicator** — Ferrari red top bar
- **Sound Toggle** — ambient audio control
- **Legacy & Experience Sections** — parallax scroll storytelling
- **Full Footer** with glassmorphism styling

---

## 📸 Screenshots

> 💡 Replace the image links below with your actual screenshots. You can drag & drop images directly into GitHub when editing the README.

<br/>

### 🎬 Hero — Cinematic Video Entry
![Hero Section](https://placehold.co/1280x720/0A0A0A/FF2800?text=🏎️+Hero+—+Cinematic+Video+Entry)

<br/>

### 🔴 3D Car Scene
![3D Car Scene](https://placehold.co/1280x720/0A0A0A/FF2800?text=🔴+3D+Rotating+Ferrari+Car)

<br/>

### 🚗 Featured Models Slider
![Models Slider](https://placehold.co/1280x720/0A0A0A/FF2800?text=🚗+Featured+Models+Slider)

<br/>

### 📊 Performance Stats
![Performance Stats](https://placehold.co/1280x720/0A0A0A/FFD700?text=📊+Performance+Stats+3D)

<br/>

### 📋 Book a Test Drive Form
![Test Drive Form](https://placehold.co/1280x720/0A0A0A/FF2800?text=📋+Book+Test+Drive+Form)

<br/>

### ⚙️ Tech Features 3D Cards
![Tech Cards](https://placehold.co/1280x720/0A0A0A/00D9FF?text=⚙️+Tech+Features+Cards)

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 18.3 + Vite |
| **3D Rendering** | Three.js · @react-three/fiber · @react-three/drei |
| **Animation** | Framer Motion (Motion 12) |
| **Styling** | Tailwind CSS 4 · Custom CSS Variables |
| **UI Components** | Radix UI · shadcn/ui |
| **Icons** | Lucide React · MUI Icons |
| **Routing** | React Router 7 |
| **Charts** | Recharts |
| **Carousel** | Embla Carousel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Hero3D.tsx              # 3D rotating Ferrari car (Three.js)
│   │   ├── FeaturedModels3D.tsx    # 3D premium car slider
│   │   ├── PerformanceStats3D.tsx  # Animated counters & 3D cards
│   │   ├── BookTestDrive3D.tsx     # 3D perspective booking form
│   │   ├── TechFeatures3D.tsx      # Mouse-tracked tilt cards
│   │   ├── HeroVideoBackground.tsx # Cinematic video hero section
│   │   ├── LoadingScreen.tsx       # 3D entrance animation
│   │   ├── Navbar.tsx              # Glassmorphism navigation
│   │   ├── Footer.tsx              # Full-site footer
│   │   └── ui/                     # shadcn/ui component library
│   ├── hooks/
│   │   ├── useMousePosition.ts     # Real-time cursor tracking
│   │   ├── useScrollProgress.ts    # Scroll percentage hook
│   │   └── useCountUp.ts           # Animated number counter
│   └── App.tsx
├── styles/
│   ├── theme.css                   # Ferrari design tokens
│   └── tailwind.css
└── main.tsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cinematic-ferrari-experience.git

# Navigate into the project
cd cinematic-ferrari-experience

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Design System

```css
/* Ferrari Color Palette */
--ferrari-red:   #FF2800;   /* Primary brand color    */
--background:    #0A0A0A;   /* Deep cinematic black   */
--accent-gold:   #FFD700;   /* Luxury gold highlight  */
--accent-cyan:   #00D9FF;   /* Tech electric accent   */
--text-primary:  #FFFFFF;   /* Pure white             */

/* Glassmorphism Pattern */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

---

## 🗺️ Page Flow

```
Loading Screen  →  Hero (Video + 3D Car)  →  Featured Models Slider
→  Performance Stats  →  Book Test Drive  →  Tech Features
→  Legacy & Experience  →  Models Showcase  →  Final CTA  →  Footer
```

---

## 💡 Roadmap

- [ ] Load real Ferrari `.glb` / `.gltf` 3D models
- [ ] WebGL shaders for advanced paint materials
- [ ] GSAP ScrollTrigger for complex scroll sequences
- [ ] 360° interactive car configurator
- [ ] WebXR / AR view
- [ ] Custom cursor with red trail effect
- [ ] Sound effects on interactions

---

## 📄 License

This project is built on a [Figma community design](https://www.figma.com/design/LGuD1ca30UMvT02MPvyy6y/Cinematic-Ferrari-Web-Experience). Ferrari is a trademark of Ferrari N.V. — this project is a fan-made portfolio piece and is not affiliated with or endorsed by Ferrari.

---

## 📬 Contact

Have feedback, a collaboration idea, or just want to say hello? Feel free to reach out!

<div align="center">

| Platform | Link |
|---|---|
| 📧 **Email** | [your.email@gmail.com](mailto:your.email@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile) |
| 🐙 **GitHub** | [github.com/your-username](https://github.com/your-username) |
| 🌐 **Portfolio** | [your-portfolio.com](https://your-portfolio.com) |
| 🐦 **Twitter / X** | [@your-handle](https://twitter.com/your-handle) |

</div>

> 💡 Replace the placeholder links above with your real contact details before publishing.

---

<div align="center">

**Built with ❤️ and a passion for speed**

⭐ If you like this project, give it a star — it means a lot!

[![Star on GitHub](https://img.shields.io/github/stars/your-username/cinematic-ferrari-experience?style=social)](https://github.com/your-username/cinematic-ferrari-experience)

</div>
