import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

export default function Banner({
  name = "Sofía Zapata",
  photoUrl = `${base}logos/FotoPerfil.png`,
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 1800);

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
    document
      .querySelector("#video-editing")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="banner banner--upgrade">
      <div className="container banner__grid">
        <div className="banner__content">
          <p className="banner__eyebrow">Disponible para trabajos freelance</p>

          <h1 className="banner__title">
            Desarrollo web <span className="banner__plus">+</span> edición de
            video
          </h1>

          <p className="banner__subtitle">
            Soy {name}. Combino frontend y contenido audiovisual para crear
            sitios web claros, modernos y piezas visuales pensadas para mostrar
            marcas, productos y proyectos de forma más profesional.
          </p>

          <div className="banner__actions">
            <button className="btn btn--primary" onClick={goProjects}>
              Ver proyectos web
            </button>

            <button className="btn btn--ghost" onClick={goVideo}>
              Ver edición
            </button>

            <a
              className="btn btn--ghost"
              href="mailto:sofizapata2004@gmail.com"
            >
              Escribime
            </a>

            <button className="btn btn--ghost" onClick={copyPageLink}>
              {copied ? "¡Link copiado!" : "Copiar link"}
            </button>
          </div>
        </div>

        <div className="banner__avatarWrap">
          <img className="banner__avatar" src={photoUrl} alt={name} />
        </div>
      </div>
    </header>
  );
}