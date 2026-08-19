import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "../components/SectionLabel";

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="appointment" className="appointment section-pad">
      <div className="container appointment-grid">
        <div className="appointment-intro reveal">
          <SectionLabel number="12">MAKE AN ENQUIRY</SectionLabel>
          <h2>Start with a conversation about your health.</h2>
          <p>
            Share a few details and the chamber team can review your request.
            This frontend form is a demo interface and does not confirm an
            appointment.
          </p>
        </div>
        <form
          className="appointment-form reveal"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="form-row">
            <label>
              Full Name
              <input required placeholder="Your name" />
            </label>
            <label>
              Phone Number
              <input required type="tel" placeholder="+880" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Preferred Date
              <input type="date" />
            </label>
          </div>
          <label>
            Reason for Consultation
            <input placeholder="A short description" />
          </label>
          <label>
            Message
            <textarea
              rows={4}
              placeholder="Anything else you would like to share?"
            />
          </label>
          <button className="button-primary" type="submit">
            {submitted ? "Request noted — thank you" : "Request Appointment"}{" "}
            <ArrowUpRight size={17} />
          </button>
          <small>
            Demo appointment request interface. No appointment is confirmed
            through this page.
          </small>
        </form>
      </div>
    </section>
  );
}
