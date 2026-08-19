import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";

const expertise = [
  [
    "01",
    "Headache & Migraine",
    "Assessment of recurrent headache, migraine and other neurological causes of headache.",
  ],
  [
    "02",
    "Stroke",
    "Clinical assessment and management of stroke-related neurological problems and follow-up care.",
  ],
  [
    "03",
    "Epilepsy & Seizure",
    "Evaluation of recurrent seizures, epilepsy and related neurological symptoms.",
  ],
  [
    "04",
    "Nerve Disorders",
    "Assessment of numbness, tingling, nerve pain, weakness and other peripheral nerve symptoms.",
  ],
  [
    "05",
    "Memory & Cognitive",
    "Evaluation of memory difficulties and other cognitive complaints.",
  ],
  [
    "06",
    "Spinal & Neurological",
    "Assessment of neurological symptoms associated with spinal cord and related conditions.",
  ],
  [
    "07",
    "Weakness / Numbness",
    "Assessment of limb weakness, sensory changes and neuropathic symptoms.",
  ],
];

interface ExpertiseProps {
  activeExpertise: number;
  setActiveExpertise: (index: number) => void;
  syncHorizontal: (
    event: React.UIEvent<HTMLDivElement>,
    selector: string,
    setActive?: (index: number) => void
  ) => void;
}

export function Expertise({
  activeExpertise,
  setActiveExpertise,
  syncHorizontal,
}: ExpertiseProps) {
  return (
    <section id="expertise" className="expertise section-pad">
      <div className="container">
        <div className="expertise-heading reveal">
          <SectionLabel number="03">SPECIALIST FOCUS</SectionLabel>
          <h2>
            Neurology, approached
            <br />
            <i>with clinical depth.</i>
          </h2>
          <p>
            Consultation and assessment for a broad range of neurological
            symptoms and conditions.
          </p>
        </div>
        <div className="expertise-workspace">
          <div className="expertise-index-wrap">
            <div
              className="expertise-index"
              onScroll={event =>
                syncHorizontal(
                  event,
                  ".expertise-mobile-progress i b",
                  setActiveExpertise
                )
              }
            >
              {expertise.map(([n, title], i) => (
                <button
                  key={n}
                  className={activeExpertise === i ? "active" : ""}
                  onClick={() => setActiveExpertise(i)}
                >
                  <span>{n}</span>
                  {title}
                </button>
              ))}
            </div>
            <div className="expertise-mobile-progress">
              <i>
                <b />
              </i>
              <span>01 — 07</span>
            </div>
          </div>
          <div className="expertise-detail">
            <div className="detail-count">
              {expertise[activeExpertise][0]} <span>/ 07</span>
            </div>
            <h3>{expertise[activeExpertise][1]}</h3>
            <p>{expertise[activeExpertise][2]}</p>
            <div className="detail-line">
              <span
                style={{
                  width: `${((activeExpertise + 1) / expertise.length) * 100}%`,
                }}
              />
            </div>
            <div className="detail-nav">
              <button
                onClick={() =>
                  setActiveExpertise(Math.max(0, activeExpertise - 1))
                }
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setActiveExpertise((activeExpertise + 1) % expertise.length)
                }
              >
                Next <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
