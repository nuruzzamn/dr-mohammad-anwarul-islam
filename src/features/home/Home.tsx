/*
 * Literary Practice direction: asymmetric medical editorialism, warm ivory field,
 * charcoal type, River Teal accents, archival linework, and restrained motion.
 */
import { useEffect, useRef, useState, type UIEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "./sections/Navigation";
import { Hero } from "./sections/Hero";
import { Credentials } from "./sections/Credentials";
import { About } from "./sections/About";
import { AboutBand } from "./sections/AboutBand";
import { Expertise } from "./sections/Expertise";
import { Medicine } from "./sections/Medicine";
import { Symptoms } from "./sections/Symptoms";
import { Journey } from "./sections/Journey";
import { Academic } from "./sections/Academic";
import { Video } from "./sections/Video";
import { Chamber } from "./sections/Chamber";
import { CareNote } from "./sections/CareNote";
import { Emergency } from "./sections/Emergency";
import { Appointment } from "./sections/Appointment";
import { Journal } from "./sections/Journal";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { MobileActions } from "./sections/MobileActions";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [activeCredential, setActiveCredential] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 900;

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".nav-shell", { y: -18, opacity: 0, duration: 0.7 })
        .from(
          ".hero-kicker, .hero-title-line, .hero-copy, .hero-actions, .hero-meta",
          { y: 28, opacity: 0, duration: 0.9, stagger: 0.08 },
          "-=0.35"
        )
        .from(
          ".hero-portrait",
          { clipPath: "inset(0 0 100% 0)", scale: 1.08, duration: 1.35 },
          "-=1"
        )
        .from(".neural-art", { opacity: 0, x: 20, duration: 1.1 }, "-=0.8");

      gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => {
        // Mobile: shorter distance, faster animation, earlier trigger
        gsap.from(el, {
          y: isMobile ? 18 : 42,
          opacity: 0,
          duration: isMobile ? 0.5 : 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top 95%" : "top 84%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".line-draw").forEach(el => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            duration: isMobile ? 0.6 : 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%", once: true },
          }
        );
      });

      gsap.to(".hero-portrait", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".video-frame",
        { scale: 0.88, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          borderRadius: "0px",
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".video-frame",
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      // Mobile-specific animations without prefers-reduced-motion check
      if (isMobile) {
        gsap.from(".credential", {
          x: 16,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".credential-strip",
            start: "top 90%",
            once: true,
          },
        });

        gsap.from(".expertise-index button", {
          x: 14,
          opacity: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".expertise",
            start: "top 85%",
            once: true,
          },
        });

        ScrollTrigger.create({
          trigger: ".credential-strip",
          start: "top 85%",
          end: "bottom 35%",
          onUpdate: self =>
            gsap.set(".mobile-scroll-cue i b", {
              opacity: 0.35 + self.progress * 0.65,
            }),
        });

        ScrollTrigger.create({
          trigger: ".expertise",
          start: "top 82%",
          end: "bottom 25%",
          onUpdate: self =>
            gsap.set(".expertise-mobile-progress i b", {
              opacity: 0.35 + self.progress * 0.65,
            }),
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (window.innerWidth < 900) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 5;
      const y = (e.clientY / window.innerHeight - 0.5) * 5;
      gsap.to(".neural-art", { x, y, duration: 0.7, overwrite: true });
      gsap.to(".hero-portrait", {
        x: x * 0.35,
        duration: 0.9,
        overwrite: true,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const syncHorizontal = (
    event: UIEvent<HTMLDivElement>,
    selector: string,
    setActive?: (index: number) => void
  ) => {
    const track = event.currentTarget;
    const max = Math.max(1, track.scrollWidth - track.clientWidth);
    const progress = Math.min(1, Math.max(0, track.scrollLeft / max));
    const section = track.closest("section");
    const fill = section?.querySelector(selector) as HTMLElement | null;
    if (fill)
      gsap.to(fill, {
        scaleX: Math.max(0.08, progress),
        duration: 0.18,
        overwrite: true,
        ease: "power2.out",
      });
    const children = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    const index = children.reduce((closest, child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      return Math.abs(childCenter - center) <
        Math.abs(
          children[closest].offsetLeft +
            children[closest].offsetWidth / 2 -
            center
        )
        ? i
        : closest;
    }, 0);
    setActive?.(index);
    children.forEach((child, i) =>
      child.classList.toggle("is-active", i === index)
    );
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div ref={root} className="site-shell">
      <Navigation
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <main id="top">
        <Hero />
        <Credentials
          activeCredential={activeCredential}
          setActiveCredential={setActiveCredential}
          syncHorizontal={syncHorizontal}
        />
        <About />
        <AboutBand />
        <Expertise
          activeExpertise={activeExpertise}
          setActiveExpertise={setActiveExpertise}
          syncHorizontal={syncHorizontal}
        />
        <Medicine />
        <Symptoms />
        <Journey />
        <Academic />
        <Video />
        <Chamber />
        <CareNote />
        <Emergency />
        <Appointment />
        <Journal />
        <Faq />
      </main>

      <Footer scrollTo={scrollTo} />
      <MobileActions />
    </div>
  );
}
