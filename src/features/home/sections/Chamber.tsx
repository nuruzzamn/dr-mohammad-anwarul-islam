import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";

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
            <a
              className="button-quiet"
              href="https://maps.app.goo.gl/gD2Lmhrm1YEx1Bay7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="fine-print">
            Chamber schedules may change. Please call before visiting to confirm
            the latest schedule.
          </p>
        </div>
        <div className="chamber-art reveal">
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.38334882793!2d90.4087841!3d24.745330300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564fa682e7f843%3A0xff705ad5e320e866!2sPopular%20Diagnostic%20Centre%20Ltd.%2C%20Mymensingh!5e1!3m2!1sen!2sbd!4v1787156149283!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
