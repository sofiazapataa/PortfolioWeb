import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import t from "../i18n/translations";

const base = import.meta.env.BASE_URL;

export default function Banner({
  name = "Sofía Zapata",
  photoUrl = `${base}logos/FotoPerfil.png`,
}) {
  const { lang } = useApp();
  const tx = t[lang].banner;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyPageLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      alert("No pude copiar el link :(");
    }
  };

  const goProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const goVideo = () => {
    document.querySelector("#video-editing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="banner banner--upgrade">
      <div className="container banner__grid">
        <div className="banner__content">
          <p className="banner__eyebrow">{tx.eyebrow}</p>

          <h1 className="banner__title">
            {tx.titlePart1} <span className="banner__plus">+</span> {tx.titlePart2}
          </h1>

          <p className="banner__subtitle">{tx.subtitle}</p>

          <div className="banner__actions">
            <button className="btn btn--primary" onClick={goProjects}>
              {tx.btnProjects}
            </button>
            <button className="btn btn--ghost" onClick={goVideo}>
              {tx.btnVideo}
            </button>
            <a className="btn btn--ghost" href="mailto:sofizapata2004@gmail.com">
              {tx.btnContact}
            </a>
            <button className="btn btn--ghost" onClick={copyPageLink}>
              {copied ? tx.btnCopied : tx.btnCopyLink}
            </button>
          </div>

          <div className="banner__social">
            <a
              className="banner__socialLink"
              href="https://www.linkedin.com/in/sofi-zapata-b58427265/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Sofía Zapata"
            >
              LinkedIn
            </a>
            <span className="banner__socialDivider" aria-hidden="true">·</span>
            <a
              className="banner__socialLink"
              href="https://github.com/sofiazapataa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Sofía Zapata"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="banner__avatarWrap">
          <img className="banner__avatar" src={photoUrl} alt={name} />
        </div>
      </div>
    </header>
  );
}
