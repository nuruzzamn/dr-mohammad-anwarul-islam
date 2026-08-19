import { ArrowDownRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";

export function About() {
  return (
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
            Dr. Mohammad Anwarul Islam combines postgraduate qualifications in
            Medicine and Neurology with an academic role in the Department of
            Neurology at Jamalpur Medical College & Hospital.
          </p>
          <button
            className="text-link"
            onClick={() =>
              document
                .querySelector("#journey")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Trace the professional journey <ArrowDownRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
