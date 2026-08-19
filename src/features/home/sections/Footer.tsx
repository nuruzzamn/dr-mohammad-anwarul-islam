import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  scrollTo: (id: string) => void;
}

export function Footer({ scrollTo }: FooterProps) {
  return (
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
          This website is a presentation/demo profile. Professional credentials,
          chamber schedules and contact information should be independently
          verified before public use.
        </span>
      </div>
    </footer>
  );
}
