# Dr. Mohammad Anwarul Islam — Professional Medical Portfolio

<div align="center">

**[Live Demo](https://dr-mohammad-anwarul-islam.vercel.app/)** · **[Portfolio](https://nuruzzaman.vercel.app/)**

A high-performance, visually compelling medical portfolio website built for Dr. Mohammad Anwarul Islam, Medicine Specialist & Neurologist at Jamalpur Medical College & Hospital.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646cff)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

</div>

---

## ✨ Overview

This is a modern, production-grade medical professional portfolio that combines sophisticated UI design with smooth animations and excellent user experience. Built with cutting-edge web technologies, it serves as both a patient information hub and a professional showcase for medical credentials and expertise.

**Key Highlights:**

- 🎨 **Editorial Design System** — Warm ivory field, charcoal typography, River Teal accents
- 🎬 **Cinema-Quality Motion** — GSAP-powered animations with scroll-triggered effects
- 📱 **Mobile-First Responsive** — Horizontal swipe interactions and touch-optimized navigation
- ⚡ **Performance Optimized** — Vite bundler, code splitting, lazy loading
- ♿ **Accessibility Focused** — Semantic HTML, ARIA labels, keyboard navigation
- 🎯 **Conversion Oriented** — Clear CTAs, appointment booking flow

---

## 🛠️ Tech Stack

| Category            | Technology                 | Purpose                                             |
| ------------------- | -------------------------- | --------------------------------------------------- |
| **Framework**       | React 19.2 + TypeScript    | Modern component architecture with full type safety |
| **Build Tool**      | Vite 7.1                   | Lightning-fast HMR and optimized production builds  |
| **Styling**         | Tailwind CSS 4.1 + PostCSS | Utility-first styling with design tokens            |
| **Animation**       | GSAP 3.15 + ScrollTrigger  | Professional-grade motion design                    |
| **UI Components**   | Radix UI + shadcn/ui       | Accessible, composable component primitives         |
| **Icons**           | Lucide React               | Consistent, scalable icon system                    |
| **Forms**           | React Hook Form + Zod      | Type-safe form validation                           |
| **Routing**         | Wouter                     | Lightweight client-side navigation                  |
| **Notifications**   | Sonner                     | Elegant toast notifications                         |
| **Package Manager** | pnpm 10.4                  | Efficient dependency management                     |

---

## 🎯 Key Features

### Design & UX

- **Editorial Aesthetic** — Asymmetric layouts, generous whitespace, archival linework
- **Typography Hierarchy** — Clear visual structure with size and weight variation
- **Motion Design** — Scroll-triggered reveals, parallax effects, smooth transitions
- **Color System** — Warm ivory background (#FAFAF5) with charcoal text and teal accents

### Interactive Elements

- **Hero Video Background** — Auto-playing neural visualization with randomized loop
- **Horizontal Scroll Sections** — Swipe-able credential and expertise showcases
- **Expertise Explorer** — Interactive specialist focus with detail panels
- **Appointment Booking Form** — Patient-friendly inquiry interface
- **FAQ Accordion** — Expandable common questions section
- **Emergency Information** — Clear guidance for urgent medical situations

### Performance Features

- **Optimized Asset Loading** — Metadata preload for videos, lazy loading images
- **Bundle Splitting** — Code separation for faster initial load
- **Production Optimized** — Tree-shaking, minification, asset optimization
- **Reduced Motion Support** — Respects user accessibility preferences

---

## 📁 Project Architecture

```
src/
├── features/
│   ├── home/
│   │   └── Home.tsx          # Main page with all sections
│   └── not-found/
│       └── NotFound.tsx       # 404 page
├── shared/
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── ErrorBoundary.tsx  # Error handling
│   │   └── Map.tsx            # Map component placeholder
│   ├── constants/
│   │   └── index.ts           # Shared constants
│   ├── contexts/
│   │   └── ThemeContext.tsx   # Theme management
│   ├── hooks/
│   │   ├── useComposition.ts  # Compose refs
│   │   ├── usePersistFn.ts    # Persistent callbacks
│   │   └── useMobile.tsx      # Mobile detection
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   └── index.css              # Global styles
├── App.tsx                    # App root with routing
└── main.tsx                   # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10.4+

### Installation

```bash
# Clone the repository
git clone https://github.com/nuruzzamn/doc-profile.git
cd doc-profile

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:5173`

---

## 📦 Assets Structure

All media assets are organized in the `public/` directory:

```
public/
└── assets/
    ├── doctor-mark.png           # Logo/brand mark
    ├── neural-linework.png        # Decorative illustration
    ├── medical-notes.jpg          # Clinical study visual
    ├── academic-detail.png       # Academic section image
    ├── hero-neurology.mp4         # Hero background video
    └── introduction-video.mp4    # Doctor introduction video
```

---

## 🎨 Design System

### Color Palette

```css
--background: #fafaf5; /* Warm ivory */
--foreground: #1a1a1a; /* Charcoal */
--primary: #0e8a8a; /* River Teal */
--primary-hover: #0b7070;
--border: #e8e4dc;
--muted: #6b6b6b;
```

### Typography Scale

- **Display**: 2.5rem — 4rem (Hero, Section titles)
- **Heading**: 1.5rem — 2rem (Section labels, Card titles)
- **Body**: 1rem — 1.125rem (Content, descriptions)
- **Small**: 0.875rem (Meta, captions)

### Spacing System

Based on `0.25rem` (4px) units for consistent rhythm:

- Section padding: `6rem` / `4rem` (desktop / mobile)
- Container max-width: `75rem` / `1200px`
- Grid gaps: `2rem` / `1.5rem`

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic deployments from Git:

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel --prod
```

**Environment Configuration:**

- Production URL: `https://dr-mohammad-anwarul-islam.vercel.app/`
- Build Command: `pnpm build`
- Output Directory: `dist/`

---

## 🧪 Testing & Type Checking

```bash
# Type checking
pnpm check

# Format code
pnpm format
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 900px) {
  /* Desktop threshold */
}
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
```

---

## ♿ Accessibility Features

- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- `prefers-reduced-motion` media query support
- Color contrast meets WCAG AA standards
- Screen reader friendly content hierarchy

---

## 🔮 Future Enhancements

- [ ] Multi-language support (Bengali/English toggle)
- [ ] Patient portal integration
- [ ] Online appointment scheduling system
- [ ] Blog/Journal CMS integration
- [ ] Telemedicine consultation booking
- [ ] Doctor availability calendar
- [ ] Patient testimonials section
- [ ] Health article library
- [ ] SEO optimization with structured data
- [ ] Progressive Web App (PWA) support

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Nuruzzaman**

- 📧 [Email](mailto:nuruzzmn@example.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/nurmnzaman/)
- 🐙 [GitHub](https://github.com/nuruzzamn)
- 🌐 [Portfolio](https://nuruzzaman.vercel.app/)

---

## 🙏 Acknowledgments

- **Client:** Dr. Mohammad Anwarul Islam — Medicine Specialist & Neurologist
- **Design Inspiration:** Editorial medical publications and clinical documentation
- **Component Library:** shadcn/ui + Radix UI
- **Animation Library:** GSAP (GreenSock Animation Platform)

---

<div align="center">

**Built with ❤️ for better healthcare communication**

[⬆ Back to Top](#dr-mohammad-anwarul-islam--professional-medical-portfolio)

</div>
