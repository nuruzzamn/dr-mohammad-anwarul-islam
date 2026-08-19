import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { SectionLabel } from "../components/SectionLabel";

export function Video() {
  const introVideo = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

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
  );
}
