import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
import { toast } from "sonner";

export function Chamber() {
  return (
    <section id="chamber" className="chamber section-pad">
      <div className="container chamber-grid">
        <div className="chamber-copy reveal">
          <SectionLabel number="09">THE CHAMBER</SectionLabel>
          <h2>
            Consultation in
            <br />
            <i>Mymensingh.</i>
          </h2>
          <p className="chamber-lead">Popular Diagnostic Center, Mymensingh</p>
          <p>
            171, Charpara, Medical College Gate,
            <br />
            Mymensingh-2200, Bangladesh
          </p>
          <div className="chamber-details">
            <div>
              <span>Visiting</span>
              <strong>3:00 PM – 9:00 PM</strong>
              <small>Saturday · Sunday · Tuesday · Wednesday</small>
            </div>
            <div>
              <span>Appointment / Serial</span>
              <a href="tel:+8809666787814">+880 9666-787814</a>
            </div>
          </div>
          <div className="chamber-actions">
            <a className="button-primary" href="tel:+8809666787814">
              Call for Serial <ArrowUpRight size={17} />
            </a>
            <button
              className="button-quiet"
              onClick={() =>
                toast.info(
                  "Directions require confirmed map coordinates before public use."
                )
              }
            >
              Get Directions <ArrowUpRight size={16} />
            </button>
          </div>
          <p className="fine-print">
            Chamber schedules may change. Please call before visiting to confirm
            the latest schedule.
          </p>
        </div>
        <div className="chamber-art reveal">
          <div className="map-art">
            <span>MYMENSINGH</span>
            <b>23° 55' N</b>
            <i />
            <small>POPULAR DIAGNOSTIC CENTER</small>
          </div>
        </div>
      </div>
    </section>
  );
}
