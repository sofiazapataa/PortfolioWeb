const base = import.meta.env.BASE_URL;

export default function Skills() {
  const items = [
    { name: "Bootstrap", icon: `${base}logos/logoBoostrap.png` },
    { name: "JavaScript", icon: `${base}logos/logoJS.jpg` },
    { name: "Figma", icon: `${base}logos/logoFigma.png` },
    { name: "React", icon: `${base}logos/logoReact.png` },
    { name: "Sass", icon: `${base}logos/logoSass.png` },
    { name: "Git", icon: `${base}logos/git-logo.png` },
    { name: "CSS", icon: `${base}logos/logoCSS.png` },
  ];

  const loopItems = [...items, ...items];

  return (
    <section className="card skills-carousel" id="skills">
      <div className="skills-carousel__header">
        <span className="skills-carousel__eyebrow">Skills</span>
        <h2 className="card__title">Tecnologías y herramientas</h2>
        <p className="card__text skills-carousel__subtitle">
          Herramientas con las que desarrollo interfaces, prototipos y proyectos
          visualmente cuidados.
        </p>
      </div>

      <div className="skills-carousel__viewport">
        <div className="skills-carousel__track">
          {loopItems.map((item, index) => (
            <article
              className="skills-carousel__item"
              key={`${item.name}-${index}`}
              aria-hidden={index >= items.length ? "true" : "false"}
            >
              <div className="skills-carousel__iconBox">
                <img
                  src={item.icon}
                  alt={index < items.length ? item.name : ""}
                  className="skills-carousel__icon"
                />
              </div>
              <span className="skills-carousel__label">{item.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}