import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const heroVideo = useRef<HTMLVideoElement>(null);

  const randomizeHeroVideo = () => {
    const video = heroVideo.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0)
      return;
    video.muted = true;
    video.currentTime = Math.random() * Math.max(0, video.duration - 0.45);
    video.play().catch(() => undefined);
  };

  return (
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
              onClick={() =>
                document
                  .querySelector("#appointment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
  );
}
