import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export function Navigation({
  menuOpen,
  setMenuOpen,
  scrollTo,
}: NavigationProps) {
  return (
    <header className="nav-shell">
      <button
        className="brand"
        onClick={() => scrollTo("#top")}
        aria-label="Go to top"
      >
        <img src="/assets/doctor-mark_d954a5b8.png" alt="" />
        <span>
          MOHAMMAD ANWARUL ISLAM<small>Medicine & Neurology</small>
        </span>
      </button>
      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {[
          ["About", "#about"],
          ["Expertise", "#expertise"],
          ["Journey", "#journey"],
          ["Chamber", "#chamber"],
          ["Journal", "#journal"],
        ].map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <button className="nav-cta" onClick={() => scrollTo("#appointment")}>
        Book an Appointment <ArrowUpRight size={16} />
      </button>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
