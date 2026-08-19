import { useRef } from "react";
import { SectionLabel } from "../components/SectionLabel";

export function Video() {
  const introVideo = useRef<HTMLVideoElement>(null);

  return (
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
            An introduction to his clinical background, neurological practice
            and approach to patient care.
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
                video.play().catch(() => {
                  // Auto-play was blocked, will continue silently
                });
              }
            }}
          >
            <source
              src="/assets/introduction-video_e1a9d5bf.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
