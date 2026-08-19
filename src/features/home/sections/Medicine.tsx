import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";

export function Medicine() {
  return (
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
            Neurology is the specialist focus. Medicine is the wider adult-care
            foundation that helps place symptoms in context.
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
  );
}
