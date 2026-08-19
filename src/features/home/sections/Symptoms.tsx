import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";

export function Symptoms() {
  return (
    <section className="symptoms section-pad">
      <div className="container symptoms-grid">
        <div className="symptoms-title reveal">
          <SectionLabel number="05">START WITH A SIGNAL</SectionLabel>
          <h2>Symptoms deserve<br /><i>context.</i></h2>
          <p>When something feels unfamiliar or persistent, a careful conversation can help frame the next step.</p>
          <button className="button-primary" onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}>Discuss Your Symptoms <ArrowUpRight size={17} /></button>
        </div>
        <div className="symptom-list reveal">
          {["Persistent or recurrent headache", "Migraine", "Dizziness", "Numbness or tingling", "Unexplained weakness", "Seizure or convulsion", "Stroke-related concerns", "Memory problems", "Nerve-related pain"].map((item, i) => (
            <div key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={17} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
