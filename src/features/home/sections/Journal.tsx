import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { SectionLabel } from "../components/SectionLabel";

export function Journal() {
  const articles = [
    ["NEUROLOGY", "Understanding migraine", "4 min read"],
    ["NEUROLOGY", "When a headache needs medical attention", "5 min read"],
    ["NEUROLOGY", "Early warning signs of stroke", "4 min read"],
    ["MEDICINE", "Persistent fatigue", "3 min read"],
  ];

  return (
    <section id="journal" className="journal section-pad">
      <div className="container">
        <div className="journal-head reveal">
          <div>
            <SectionLabel number="13">THE HEALTH JOURNAL</SectionLabel>
            <h2>
              Questions worth
              <br />
              <i>understanding.</i>
            </h2>
          </div>
          <p>
            Plain-language reading on neurological symptoms and the adult
            medical conditions that can sit alongside them.
          </p>
        </div>
        <div className="journal-list reveal">
          {articles.map(([cat, title, time], i) => (
            <button
              key={title}
              onClick={() =>
                toast.info(
                  "Journal article placeholder — editorial content can be added when approved."
                )
              }
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <em>{cat}</em>
              <strong>{title}</strong>
              <small>{time}</small>
              <ArrowUpRight size={18} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
