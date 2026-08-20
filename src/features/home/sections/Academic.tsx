import { SectionLabel } from "../components/SectionLabel";

export function Academic() {
  return (
    <section className="academic section-pad">
      <div className="container academic-grid">
        <div className="academic-image reveal">
          <img
            src="https://res.cloudinary.com/gn8mdjia/image/upload/v1787228107/academic-detail_11c894f3.webp"
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
  );
}
