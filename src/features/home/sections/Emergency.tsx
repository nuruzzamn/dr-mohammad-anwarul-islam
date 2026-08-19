import { SectionLabel } from "../components/SectionLabel";

export function Emergency() {
  return (
    <section className="emergency section-pad atlas-section">
      <div className="container emergency-inner reveal">
        <div>
          <SectionLabel number="11">WHEN TIME MATTERS</SectionLabel>
          <h2>
            When symptoms
            <br />
            <i>cannot wait.</i>
          </h2>
        </div>
        <div>
          <p>
            If symptoms are severe or potentially life-threatening, seek
            emergency medical care immediately rather than waiting for a chamber
            appointment.
          </p>
          <ul>
            <li>Sudden facial drooping</li>
            <li>Sudden weakness or numbness on one side</li>
            <li>Difficulty speaking or loss of consciousness</li>
            <li>Seizure or sudden severe headache</li>
          </ul>
          <strong>This website is not an emergency medical service.</strong>
        </div>
      </div>
    </section>
  );
}
