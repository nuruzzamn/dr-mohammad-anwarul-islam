export function MobileActions() {
  return (
    <div className="mobile-actions">
      <a href="tel:+8809666787814">Call for Serial</a>
      <button
        onClick={() =>
          document
            .querySelector("#appointment")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Book Appointment
      </button>
    </div>
  );
}
