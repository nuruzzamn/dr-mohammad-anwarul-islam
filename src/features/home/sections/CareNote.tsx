import { Plus } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";

export function CareNote() {
  const items = [
    "Previous prescriptions",
    "Diagnostic reports",
    "Imaging reports",
    "Current medication list",
    "Relevant previous medical history",
  ];

  return (
    <section className="care-note section-pad">
      <div className="container care-grid">
        <div className="reveal">
          <SectionLabel number="10">BEFORE YOU COME</SectionLabel>
          <h2>
            Bring the details
            <br />
            <i>that help.</i>
          </h2>
        </div>
        <div className="bring-list reveal">
          {items.map(item => (
            <div key={item}>
              <Plus size={17} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
