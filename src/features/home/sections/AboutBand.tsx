import { SectionLabel } from "../components/SectionLabel";

export function AboutBand() {
  return (
    <section className="about-band section-pad">
      <div className="container about-grid">
        <div className="about-photo reveal">
          <img
            src="https://res.cloudinary.com/gn8mdjia/image/upload/v1787228106/medical-notes_aad00235.jpg"
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
            His professional background connects adult medicine with specialized
            neurological training, allowing each consultation to begin with the
            wider clinical picture.
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
  );
}
