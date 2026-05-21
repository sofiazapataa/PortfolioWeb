export default function FocusAreas() {
  const goProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const goVideo = () => {
    document.querySelector("#video-editing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="card focus-areas" id="focus-areas">
      <div className="focus-areas__header">
        <span className="focus-areas__eyebrow">Áreas principales</span>
        <h2 className="card__title">Dos líneas de trabajo, un mismo portfolio</h2>
        <p className="card__text focus-areas__intro">
          Quiero que al entrar se entienda rápido que trabajo tanto en desarrollo web
          como en edición de video. Las dos áreas forman parte de mi perfil y de lo
          que hoy quiero ofrecer de forma freelance.
        </p>
      </div>

      <div className="focus-areas__grid">
        <article className="focus-card focus-card--dev">
          <div className="focus-card__top">
            <span className="focus-card__tag">Desarrollo web</span>
          </div>

          <h3 className="focus-card__title">Interfaces, sitios y experiencia visual</h3>

          <p className="focus-card__text">
            Desarrollo portfolios, landing pages, catálogos y experiencias
            frontend donde priorizo claridad visual, estructura y responsive.
          </p>

          <ul className="focus-card__list">
            <li>React y maquetado responsive</li>
            <li>Portfolios, landings y catálogos</li>
            <li>Diseño UI con foco visual</li>
          </ul>

          <button className="btn btn--primary" onClick={goProjects}>
            Ver proyectos web
          </button>
        </article>

        <article className="focus-card focus-card--video">
          <div className="focus-card__top">
            <span className="focus-card__tag">Edición de video</span>
          </div>

          <h3 className="focus-card__title">Contenido audiovisual para redes y marcas</h3>

          <p className="focus-card__text">
            También trabajo en edición de piezas visuales y videos cortos
            pensados para comunicar mejor una marca, producto o proyecto.
          </p>

          <ul className="focus-card__list">
            <li>Reels y contenido para redes</li>
            <li>Videos promocionales</li>
            <li>Ritmo, orden visual y estética</li>
          </ul>

          <button className="btn btn--primary" onClick={goVideo}>
            Ver edición de video
          </button>
        </article>
      </div>
    </section>
  );
}