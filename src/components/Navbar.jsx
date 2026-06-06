import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

const navLinks = {
  es: [
    { label: "Proyectos", href: "#projects" },
    { label: "Sobre mí", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Video", href: "#video-editing" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Video", href: "#video-editing" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navbar() {
  const { lang } = useApp();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["projects", "about", "skills", "video-editing", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${visible ? " navbar--visible" : ""}`} aria-label="Navegación principal">
      <div className="navbar__inner">
        <span className="navbar__name">Sofía Zapata</span>
        <ul className="navbar__links">
          {navLinks[lang].map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  className={`navbar__link${active === id ? " navbar__link--active" : ""}`}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
