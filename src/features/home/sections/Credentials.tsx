import { gsap } from "gsap";

interface CredentialsProps {
  activeCredential: number;
  setActiveCredential: (index: number) => void;
  syncHorizontal: (
    event: React.UIEvent<HTMLDivElement>,
    selector: string,
    setActive?: (index: number) => void
  ) => void;
}

export function Credentials({
  activeCredential,
  setActiveCredential,
  syncHorizontal,
}: CredentialsProps) {
  return (
    <section className="credential-strip">
      <div
        className="credential-inner container"
        onScroll={event =>
          syncHorizontal(event, ".mobile-scroll-cue i b", setActiveCredential)
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
  );
}
