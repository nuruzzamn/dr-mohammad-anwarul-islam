/*
 * Literary Practice direction: asymmetric medical editorialism, warm ivory field,
 * charcoal type, River Teal accents, archival linework, and restrained motion.
 */
import { useEffect, useRef, useState, type UIEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Play,
  Plus,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const expertise = [
  [
    "01",
    "Headache & Migraine",
    "Assessment of recurrent headache, migraine and other neurological causes of headache.",
  ],
  [
    "02",
    "Stroke",
    "Clinical assessment and management of stroke-related neurological problems and follow-up care.",
  ],
  [
    "03",
    "Epilepsy & Seizure",
    "Evaluation of recurrent seizures, epilepsy and related neurological symptoms.",
  ],
  [
    "04",
    "Nerve Disorders",
    "Assessment of numbness, tingling, nerve pain, weakness and other peripheral nerve symptoms.",
  ],
  [
    "05",
    "Memory & Cognitive",
    "Evaluation of memory difficulties and other cognitive complaints.",
  ],
  [
    "06",
    "Spinal & Neurological",
    "Assessment of neurological symptoms associated with spinal cord and related conditions.",
  ],
  [
    "07",
    "Weakness / Numbness",
    "Assessment of limb weakness, sensory changes and neuropathic symptoms.",
  ],
];

const faqs = [
  [
    "What should I bring to my first consultation?",
    "Bring previous prescriptions, diagnostic reports, imaging reports, your current medication list and relevant medical history.",
  ],
  [
    "How long does a consultation usually take?",
    "The time can vary depending on your symptoms and history. Please allow enough time for a careful conversation and assessment.",
  ],
  [
    "Should I bring previous test reports?",
    "Yes. Previous reports can help provide useful context during the consultation.",
  ],
  [
    "Can I discuss multiple health concerns?",
    "You can mention multiple concerns. The doctor will help clarify which symptoms should be assessed first.",
  ],
  [
    "When should I schedule a follow-up?",
    "Follow-up timing depends on the clinical picture and any plan discussed during your consultation.",
  ],
  [
    "Should I bring my current medication list?",
    "Yes. Include medicine names, doses and how often you take them if possible.",
  ],
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [activeCredential, setActiveCredential] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const introVideo = useRef<HTMLVideoElement>(null);
  const heroVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>(".line-draw").forEach(el => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            duration: 1.2,
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

      const mobile = gsap.matchMedia();
      mobile.add(
        "(max-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.from(".credential", {
            x: 26,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".credential-strip",
              start: "top 85%",
              once: true,
            },
          });
          gsap.from(".expertise-index button", {
            x: 24,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".expertise",
              start: "top 78%",
              once: true,
            },
          });
          ScrollTrigger.create({
            trigger: ".credential-strip",
            start: "top 82%",
            end: "bottom 35%",
            onUpdate: self =>
              gsap.set(".mobile-scroll-cue i b", {
                opacity: 0.35 + self.progress * 0.65,
              }),
          });
          ScrollTrigger.create({
            trigger: ".expertise",
            start: "top 78%",
            end: "bottom 25%",
            onUpdate: self =>
              gsap.set(".expertise-mobile-progress i b", {
                opacity: 0.35 + self.progress * 0.65,
              }),
          });
        }
      );
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

  const randomizeHeroVideo = () => {
    const video = heroVideo.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0)
      return;
    video.muted = true;
    video.currentTime = Math.random() * Math.max(0, video.duration - 0.45);
    video.play().catch(() => undefined);
  };

  const toggleIntroVideo = () => {
    const video = introVideo.current;
    if (!video) return;
    video.muted = true;
    if (video.paused) {
      video
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch(() => setIsVideoPlaying(false));
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

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
      <header className="nav-shell">
        <button
          className="brand"
          onClick={() => scrollTo("#top")}
          aria-label="Go to top"
        >
          <img src="/assets/doctor-mark_d954a5b8.png" alt="" />
          <span>
            MOHAMMAD ANWARUL ISLAM<small>Medicine & Neurology</small>
          </span>
        </button>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {[
            ["About", "#about"],
            ["Expertise", "#expertise"],
            ["Journey", "#journey"],
            ["Chamber", "#chamber"],
            ["Journal", "#journal"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>
        <button className="nav-cta" onClick={() => scrollTo("#appointment")}>
          Book an Appointment <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid container">
            <div className="hero-copy-wrap">
              <div className="hero-identity">
                <img src="/assets/doctor-mark_d954a5b8.png" alt="" />
                <div>
                  <p className="hero-kicker">
                    DR. MOHAMMAD ANWARUL ISLAM <span>·</span> DHAKA / MYMENSINGH
                  </p>
                  <p className="hero-bangla">ডা. মোহাম্মদ আনোয়ারুল ইসলাম</p>
                </div>
              </div>
              <h1 className="hero-title">
                <span className="hero-title-line">Medicine</span>
                <span className="hero-title-line accent-line">
                  Specialist <em>&</em>
                </span>
                <span className="hero-title-line">Neurologist</span>
              </h1>
              <p className="hero-description hero-copy">
                Specialized consultation for neurological and adult medical
                conditions, grounded in careful clinical assessment, clear
                communication and comprehensive care.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="tel:+8809666787814">
                  Call for Serial <span>+880 9666-787814</span>{" "}
                  <ArrowUpRight size={17} />
                </a>
                <button
                  className="button-quiet"
                  onClick={() => scrollTo("#appointment")}
                >
                  Book an Appointment <ArrowUpRight size={16} />
                </button>
              </div>
              <div className="hero-meta">
                <div className="hero-role">
                  <span>Current position</span>
                  <strong>
                    Assistant Professor
                    <br />
                    Department of Neurology
                  </strong>
                  <small>Jamalpur Medical College & Hospital</small>
                </div>
                <div>
                  <span>Credentials</span>
                  <strong>MBBS · BCS (Health) · FCPS (Medicine)</strong>
                  <small>MCPS (Medicine) · MD (Neurology) · MACP (USA)</small>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="portrait-wrap">
                <video
                  ref={heroVideo}
                  className="hero-portrait hero-video"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={randomizeHeroVideo}
                  onEnded={randomizeHeroVideo}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <source
                    src="/assets/hero-neurology_b77e9575.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <img
                className="neural-art"
                src="/assets/neural-linework_9f0bbf39.png"
                alt=""
                aria-hidden="true"
              />
              <div className="image-note">
                01{" "}
                <span>
                  Care begins
                  <br />
                  with context.
                </span>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={17} />
          </div>
        </section>

        <section className="credential-strip">
          <div
            className="credential-inner container"
            onScroll={event =>
              syncHorizontal(
                event,
                ".mobile-scroll-cue i b",
                setActiveCredential
              )
            }
          >
            {[
              ["MBBS", "Mymensingh Medical College"],
              ["BCS (Health)", "Bangladesh Health Cadre"],
              ["FCPS", "Postgraduate Medicine"],
              ["MD", "Neurology Specialization"],
              ["BMDC", "Reg. A-61657"],
            ].map(([a, b], i) => (
              <div
                className={
                  activeCredential === i ? "credential is-active" : "credential"
                }
                key={a}
              >
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <div className="mobile-scroll-cue container">
            <span>SWIPE TO EXPLORE</span>
            <i>
              <b />
            </i>
            <em>01 — 05</em>
          </div>
        </section>

        <section id="about" className="story section-pad">
          <div className="container story-grid">
            <div className="story-heading reveal">
              <SectionLabel number="01">THE FOUNDATION</SectionLabel>
              <h2>
                Medicine gave him
                <br />
                <i>the foundation.</i>
                <br />
                Neurology became
                <br />
                <i>his focus.</i>
              </h2>
            </div>
            <div className="story-aside reveal">
              <p className="large-quote">
                A broader view of neurological care begins with a strong
                understanding of adult medicine.
              </p>
              <div className="rule" />
              <p>
                Dr. Mohammad Anwarul Islam combines postgraduate qualifications
                in Medicine and Neurology with an academic role in the
                Department of Neurology at Jamalpur Medical College & Hospital.
              </p>
              <button
                className="text-link"
                onClick={() => scrollTo("#journey")}
              >
                Trace the professional journey <ArrowDownRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <section className="about-band section-pad">
          <div className="container about-grid">
            <div className="about-photo reveal">
              <img
                src="/assets/medical-notes_aad00235.jpg"
                alt="Non-identifying clinical study and medical notes"
              />
              <span className="image-caption">
                Clinical study, approached with attention.
              </span>
            </div>
            <div className="about-copy reveal">
              <SectionLabel number="02">A BROADER VIEW</SectionLabel>
              <h2>A physician with a broader view of neurological care.</h2>
              <p>
                His professional background connects adult medicine with
                specialized neurological training, allowing each consultation to
                begin with the wider clinical picture.
              </p>
              <div className="principle">
                <span>MEDICINE</span>
                <b>+</b>
                <span>NEUROLOGY</span>
                <b>+</b>
                <span>ACADEMIC PRACTICE</span>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="expertise section-pad">
          <div className="container">
            <div className="expertise-heading reveal">
              <SectionLabel number="03">SPECIALIST FOCUS</SectionLabel>
              <h2>
                Neurology, approached
                <br />
                <i>with clinical depth.</i>
              </h2>
              <p>
                Consultation and assessment for a broad range of neurological
                symptoms and conditions.
              </p>
            </div>
            <div className="expertise-workspace">
              <div className="expertise-index-wrap">
                <div
                  className="expertise-index"
                  onScroll={event =>
                    syncHorizontal(
                      event,
                      ".expertise-mobile-progress i b",
                      setActiveExpertise
                    )
                  }
                >
                  {expertise.map(([n, title], i) => (
                    <button
                      key={n}
                      className={activeExpertise === i ? "active" : ""}
                      onClick={() => setActiveExpertise(i)}
                    >
                      <span>{n}</span>
                      {title}
                    </button>
                  ))}
                </div>
                <div className="expertise-mobile-progress">
                  <i>
                    <b />
                  </i>
                  <span>01 — 07</span>
                </div>
              </div>
              <div className="expertise-detail">
                <div className="detail-count">
                  {expertise[activeExpertise][0]} <span>/ 07</span>
                </div>
                <h3>{expertise[activeExpertise][1]}</h3>
                <p>{expertise[activeExpertise][2]}</p>
                <div className="detail-line">
                  <span
                    style={{
                      width: `${((activeExpertise + 1) / expertise.length) * 100}%`,
                    }}
                  />
                </div>
                <div className="detail-nav">
                  <button
                    onClick={() =>
                      setActiveExpertise(Math.max(0, activeExpertise - 1))
                    }
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setActiveExpertise(
                        (activeExpertise + 1) % expertise.length
                      )
                    }
                  >
                    Next <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="medicine-band section-pad">
          <div className="container medicine-grid">
            <div className="medicine-intro reveal">
              <SectionLabel number="04">THE WIDER PICTURE</SectionLabel>
              <h2>
                Beyond neurology,
                <br />
                <i>grounded in medicine.</i>
              </h2>
              <p className="medicine-lead">
                Neurology is the specialist focus. Medicine is the wider
                adult-care foundation that helps place symptoms in context.
              </p>
              <div className="medicine-contrast">
                <span>
                  <b>NEUROLOGY</b>
                  <small>Specialist focus</small>
                </span>
                <i>+</i>
                <span>
                  <b>MEDICINE</b>
                  <small>Broader adult foundation</small>
                </span>
              </div>
            </div>
            <div className="medicine-copy reveal">
              <p>
                Medicine training supports assessment of common adult medical
                concerns, overlapping symptoms and conditions that may need a
                careful first review before specialist direction.
              </p>
              <div className="medicine-list">
                {[
                  ["01", "General adult medicine"],
                  ["02", "Fever & infections"],
                  ["03", "Weakness & fatigue"],
                  ["04", "Hypertension-related problems"],
                  ["05", "Diabetes-related problems"],
                  ["06", "Chronic or overlapping conditions"],
                ].map(([n, item]) => (
                  <span key={item}>
                    <b>{n}</b>
                    {item}
                    <ArrowUpRight size={14} />
                  </span>
                ))}
              </div>
              <p className="medicine-note">
                This section describes the broader medical foundation of the
                practice. It does not imply certification in unrelated
                subspecialties.
              </p>
            </div>
          </div>
        </section>

        <section className="symptoms section-pad">
          <div className="container symptoms-grid">
            <div className="symptoms-title reveal">
              <SectionLabel number="05">START WITH A SIGNAL</SectionLabel>
              <h2>
                Symptoms deserve
                <br />
                <i>context.</i>
              </h2>
              <p>
                When something feels unfamiliar or persistent, a careful
                conversation can help frame the next step.
              </p>
              <button
                className="button-primary"
                onClick={() => scrollTo("#appointment")}
              >
                Discuss Your Symptoms <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="symptom-list reveal">
              {[
                "Persistent or recurrent headache",
                "Migraine",
                "Dizziness",
                "Numbness or tingling",
                "Unexplained weakness",
                "Seizure or convulsion",
                "Stroke-related concerns",
                "Memory problems",
                "Nerve-related pain",
              ].map((item, i) => (
                <div key={item}>
                  <span>0{i + 1}</span>
                  <strong>{item}</strong>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="journey section-pad atlas-section">
          <div className="container journey-grid">
            <div className="journey-intro reveal">
              <SectionLabel number="06">THE APPROACH</SectionLabel>
              <h2>A thoughtful approach to neurological care.</h2>
              <p>
                Clear conversation, careful assessment and a plan that responds
                to the individual clinical picture.
              </p>
            </div>
            <div className="journey-steps">
              {[
                ["01", "Listen", "Understanding symptoms and medical history."],
                ["02", "Assess", "Clinical evaluation and relevant findings."],
                [
                  "03",
                  "Explain",
                  "Helping patients understand the clinical picture.",
                ],
                [
                  "04",
                  "Plan",
                  "Treatment and follow-up based on individual needs.",
                ],
              ].map(([n, t, d], i) => (
                <div className="journey-step reveal" key={n}>
                  <span className="step-number">{n}</span>
                  <div className="line-draw" />
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="academic section-pad">
          <div className="container academic-grid">
            <div className="academic-image reveal">
              <img
                src="/assets/academic-detail_11c894f3.png"
                alt="Academic medicine and clinical study"
              />
            </div>
            <div className="academic-copy reveal">
              <SectionLabel number="07">ACADEMIC MEDICINE</SectionLabel>
              <h2>Academic medicine meets clinical practice.</h2>
              <p>
                His current role connects neurological clinical practice with
                medical education and professional development.
              </p>
              <div className="academic-role">
                <strong>Assistant Professor</strong>
                <span>Department of Neurology</span>
                <span>Jamalpur Medical College & Hospital</span>
              </div>
            </div>
          </div>
        </section>

        <section className="video-section section-pad">
          <div className="container">
            <div className="video-heading reveal">
              <SectionLabel number="08">AN INTRODUCTION</SectionLabel>
              <h2>
                Meet Dr. Mohammad
                <br />
                <i>Anwarul Islam.</i>
              </h2>
              <p>
                An introduction to his clinical background, neurological
                practice and approach to patient care.
              </p>
            </div>
            <div className="video-frame intro-video-frame">
              <video
                ref={introVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={() => {
                  const video = introVideo.current;
                  if (video) {
                    video.muted = true;
                    video
                      .play()
                      .then(() => setIsVideoPlaying(true))
                      .catch(() => setIsVideoPlaying(false));
                  }
                }}
                onClick={toggleIntroVideo}
                aria-label="Silent video introduction — click to pause or play"
              >
                <source
                  src="/assets/introduction-video_e1a9d5bf.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="video-overlay">
                <span>
                  {isVideoPlaying ? "Playing silently" : "Paused — tap to play"}
                </span>
                <button
                  onClick={toggleIntroVideo}
                  aria-label={
                    isVideoPlaying
                      ? "Pause introduction video"
                      : "Play introduction video"
                  }
                >
                  {isVideoPlaying ? (
                    <span className="pause-glyph">Ⅱ</span>
                  ) : (
                    <Play size={20} fill="currentColor" />
                  )}
                </button>
                <span>Sound off · loop</span>
              </div>
            </div>
          </div>
        </section>

        <section id="chamber" className="chamber section-pad">
          <div className="container chamber-grid">
            <div className="chamber-copy reveal">
              <SectionLabel number="09">THE CHAMBER</SectionLabel>
              <h2>
                Consultation in
                <br />
                <i>Mymensingh.</i>
              </h2>
              <p className="chamber-lead">
                Popular Diagnostic Center, Mymensingh
              </p>
              <p>
                171, Charpara, Medical College Gate,
                <br />
                Mymensingh-2200, Bangladesh
              </p>
              <div className="chamber-details">
                <div>
                  <span>Visiting</span>
                  <strong>3:00 PM – 9:00 PM</strong>
                  <small>Saturday · Sunday · Tuesday · Wednesday</small>
                </div>
                <div>
                  <span>Appointment / Serial</span>
                  <a href="tel:+8809666787814">+880 9666-787814</a>
                </div>
              </div>
              <div className="chamber-actions">
                <a className="button-primary" href="tel:+8809666787814">
                  Call for Serial <ArrowUpRight size={17} />
                </a>
                <button
                  className="button-quiet"
                  onClick={() =>
                    toast.info(
                      "Directions require confirmed map coordinates before public use."
                    )
                  }
                >
                  Get Directions <ArrowUpRight size={16} />
                </button>
              </div>
              <p className="fine-print">
                Chamber schedules may change. Please call before visiting to
                confirm the latest schedule.
              </p>
            </div>
            <div className="chamber-art reveal">
              <div className="map-art">
                <span>MYMENSINGH</span>
                <b>23° 55' N</b>
                <i />
                <small>POPULAR DIAGNOSTIC CENTER</small>
              </div>
            </div>
          </div>
        </section>

        <section className="care-note section-pad">
          <div className="container care-grid">
            <div className="reveal">
              <SectionLabel number="10">BEFORE YOU COME</SectionLabel>
              <h2>
                Bring the details
                <br />
                <i>that help.</i>
              </h2>
            </div>
            <div className="bring-list reveal">
              {[
                "Previous prescriptions",
                "Diagnostic reports",
                "Imaging reports",
                "Current medication list",
                "Relevant previous medical history",
              ].map(item => (
                <div key={item}>
                  <Plus size={17} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="emergency section-pad atlas-section">
          <div className="container emergency-inner reveal">
            <div>
              <SectionLabel number="11">WHEN TIME MATTERS</SectionLabel>
              <h2>
                When symptoms
                <br />
                <i>cannot wait.</i>
              </h2>
            </div>
            <div>
              <p>
                If symptoms are severe or potentially life-threatening, seek
                emergency medical care immediately rather than waiting for a
                chamber appointment.
              </p>
              <ul>
                <li>Sudden facial drooping</li>
                <li>Sudden weakness or numbness on one side</li>
                <li>Difficulty speaking or loss of consciousness</li>
                <li>Seizure or sudden severe headache</li>
              </ul>
              <strong>This website is not an emergency medical service.</strong>
            </div>
          </div>
        </section>

        <section id="appointment" className="appointment section-pad">
          <div className="container appointment-grid">
            <div className="appointment-intro reveal">
              <SectionLabel number="12">MAKE AN ENQUIRY</SectionLabel>
              <h2>Start with a conversation about your health.</h2>
              <p>
                Share a few details and the chamber team can review your
                request. This frontend form is a demo interface and does not
                confirm an appointment.
              </p>
            </div>
            <form
              className="appointment-form reveal"
              onSubmit={e => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="form-row">
                <label>
                  Full Name
                  <input required placeholder="Your name" />
                </label>
                <label>
                  Phone Number
                  <input required type="tel" placeholder="+880" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Preferred Date
                  <input type="date" />
                </label>
              </div>
              <label>
                Reason for Consultation
                <input placeholder="A short description" />
              </label>
              <label>
                Message
                <textarea
                  rows={4}
                  placeholder="Anything else you would like to share?"
                />
              </label>
              <button className="button-primary" type="submit">
                {submitted
                  ? "Request noted — thank you"
                  : "Request Appointment"}{" "}
                <ArrowUpRight size={17} />
              </button>
              <small>
                Demo appointment request interface. No appointment is confirmed
                through this page.
              </small>
            </form>
          </div>
        </section>

        <section id="journal" className="journal section-pad">
          <div className="container">
            <div className="journal-head reveal">
              <div>
                <SectionLabel number="13">THE HEALTH JOURNAL</SectionLabel>
                <h2>
                  Questions worth
                  <br />
                  <i>understanding.</i>
                </h2>
              </div>
              <p>
                Plain-language reading on neurological symptoms and the adult
                medical conditions that can sit alongside them.
              </p>
            </div>
            <div className="journal-list reveal">
              {[
                ["NEUROLOGY", "Understanding migraine", "4 min read"],
                [
                  "NEUROLOGY",
                  "When a headache needs medical attention",
                  "5 min read",
                ],
                ["NEUROLOGY", "Early warning signs of stroke", "4 min read"],
                ["MEDICINE", "Persistent fatigue", "3 min read"],
              ].map(([cat, title, time], i) => (
                <button
                  key={title}
                  onClick={() =>
                    toast.info(
                      "Journal article placeholder — editorial content can be added when approved."
                    )
                  }
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <em>{cat}</em>
                  <strong>{title}</strong>
                  <small>{time}</small>
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="faq section-pad">
          <div className="container faq-grid">
            <div className="reveal">
              <SectionLabel number="14">COMMON QUESTIONS</SectionLabel>
              <h2>
                Before the
                <br />
                <i>first conversation.</i>
              </h2>
            </div>
            <div className="faq-list reveal">
              {faqs.map(([q, a], i) => (
                <div
                  className={activeFaq === i ? "faq-item active" : "faq-item"}
                  key={q}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span>{q}</span>
                    <ChevronDown size={18} />
                  </button>
                  {activeFaq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-mark">
              <img src="/assets/doctor-mark_d954a5b8.png" alt="" />
              <span>
                MOHAMMAD
                <br />
                ANWARUL ISLAM
              </span>
            </div>
            <p>Medicine Specialist & Neurologist</p>
            <p className="footer-credentials">
              MBBS · BCS (Health) · FCPS (Medicine)
              <br />
              MCPS (Medicine) · MD (Neurology) · MACP (USA)
            </p>
          </div>
          <div>
            <span className="footer-label">Explore</span>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#expertise")}>Expertise</button>
            <button onClick={() => scrollTo("#journey")}>Journey</button>
            <button onClick={() => scrollTo("#chamber")}>Chamber</button>
          </div>
          <div>
            <span className="footer-label">Chamber</span>
            <p>
              Popular Diagnostic Center
              <br />
              171, Charpara, Medical College Gate,
              <br />
              Mymensingh-2200, Bangladesh
            </p>
            <a href="tel:+8809666787814">+880 9666-787814</a>
          </div>
          <div>
            <span className="footer-label">Begin here</span>
            <button
              className="footer-cta"
              onClick={() => scrollTo("#appointment")}
            >
              Book an Appointment <ArrowUpRight size={15} />
            </button>
            <a className="footer-call" href="tel:+8809666787814">
              Call for Serial
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Dr. Mohammad Anwarul Islam</span>
          <span>
            This website is a presentation/demo profile. Professional
            credentials, chamber schedules and contact information should be
            independently verified before public use.
          </span>
        </div>
      </footer>
      <div className="mobile-actions">
        <a href="tel:+8809666787814">Call for Serial</a>
        <button onClick={() => scrollTo("#appointment")}>
          Book Appointment
        </button>
      </div>
    </div>
  );
}
