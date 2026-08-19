import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "../components/SectionLabel";

const faqs = [
  [
    "What should I bring to my first consultation?",
    "Bring previous prescriptions, diagnostic reports, imaging reports, your current medication list and relevant medical history.",
  ],
  [
    "How long does a consultation usually take?",
    "The time can vary depending on your symptoms and history. Please allow enough time for a careful conversation and assessment.",
  ],
  [
    "Should I bring previous test reports?",
    "Yes. Previous reports can help provide useful context during the consultation.",
  ],
  [
    "Can I discuss multiple health concerns?",
    "You can mention multiple concerns. The doctor will help clarify which symptoms should be assessed first.",
  ],
  [
    "When should I schedule a follow-up?",
    "Follow-up timing depends on the clinical picture and any plan discussed during your consultation.",
  ],
  [
    "Should I bring my current medication list?",
    "Yes. Include medicine names, doses and how often you take them if possible.",
  ],
];

export function Faq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="faq section-pad">
      <div className="container faq-grid">
        <div className="reveal">
          <SectionLabel number="14">COMMON QUESTIONS</SectionLabel>
          <h2>
            Before the
            <br />
            <i>first conversation.</i>
          </h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map(([q, a], i) => (
            <div
              className={activeFaq === i ? "faq-item active" : "faq-item"}
              key={q}
            >
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <span>{q}</span>
                <ChevronDown size={18} />
              </button>
              {activeFaq === i && <p>{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
