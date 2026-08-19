import { SectionLabel } from "../components/SectionLabel";

export function Journey() {
  const steps = [
    ["01", "Listen", "Understanding symptoms and medical history."],
    ["02", "Assess", "Clinical evaluation and relevant findings."],
    ["03", "Explain", "Helping patients understand the clinical picture."],
    ["04", "Plan", "Treatment and follow-up based on individual needs."],
  ];

  return (
    <section id="journey" className="journey section-pad atlas-section">
      <div className="container journey-grid">
        <div className="journey-intro reveal">
          <SectionLabel number="06">THE APPROACH</SectionLabel>
          <h2>A thoughtful approach to neurological care.</h2>
          <p>
            Clear conversation, careful assessment and a plan that responds to
            the individual clinical picture.
          </p>
        </div>
        <div className="journey-steps">
          {steps.map(([n, t, d], i) => (
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
  );
}
