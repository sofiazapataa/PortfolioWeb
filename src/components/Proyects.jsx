const base = import.meta.env.BASE_URL;

function TechBadge({ label, icon }) {
  return (
    <span className="tech-badge">
      {icon && <img className="tech-badge__icon" src={icon} alt={label} />}
      {label}
    </span>
  );
}

export default function Proyects() {
  const techIcons = {
    JavaScript: `${base}logos/javascript.png`,
    CSS: `${base}logos/css.png`,
    Figma: `${base}logos/figma.png`,
    Sass: `${base}logos/sass.png`,
    React: `${base}logos/react.png`,
    Node: `${base}logos/node.png`,
    Express: `${base}logos/express.png`,
    MongoDB: `${base}logos/mongodb.png`,
  };

  const projects = [
    {
      title: "Tienda Skincare",
      type: "Frontend",
      desc: "Cuestionario de piel y recomendación de productos con una experiencia visual simple y clara.",
      cover: `${base}covers/tiendaSkinCare.png`,
      demo: "https://react-entrega02.vercel.app/",
      repo: "",
      stack: ["JavaScript", "CSS"],
      featured: false,
    },
    {
      title: "Tienda de Café",
      type: "Frontend",
      desc: "E-commerce simple de café con filtros y búsqueda de productos orientado a una navegación clara.",
      cover: `${base}covers/tiendaCafe.png`,
      demo: "",
      repo: "",
      stack: ["Figma", "CSS"],
      featured: false,
    },
    {
      title: "Tienda de Bebidas",
      type: "Frontend",
      desc: "Catálogo de bebidas con cards y detalle de producto, desarrollado con Sass.",
      cover: `${base}covers/tiendaBebidas.png`,
      demo: "",
      repo: "",
      stack: ["CSS", "Sass"],
      featured: false,
    },
    {
      title: "Tienda Safaris",
      type: "Frontend",
      desc: "Catálogo visual de safaris con sistema de filtros y detalle de producto, pensado para una navegación simple.",
      cover: `${base}covers/tiendaSafaris.png`,
      demo: "",
      repo: "",
      stack: ["Figma", "CSS"],
      featured: false,
    },
    {
      title: "Tienda Multiskin",
      type: "Full Stack",
      desc: "Catálogo de una tienda de cosmética vegana con backend, autenticación y panel de administración.",
      cover: `${base}covers/multiskin.png`,
      demo: "https://catalogo-kosmos.vercel.app/",
      repo: "https://github.com/sofiazapataa/catalogo-cosmos-2.0.git",
      stack: ["CSS", "React", "Figma", "Node", "Express", "MongoDB"],
      featured: true,
    },
  ];

  return (
    <section className="card projects" id="projects">
      <div className="projects__header">
        <span className="projects__eyebrow">Desarrollo web</span>
        <h2 className="card__title">Proyectos</h2>
        <p className="card__text projects__intro">
          Una selección de trabajos donde combino diseño, maquetado,
          componentes y experiencia visual.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project ${project.featured ? "project--featured" : ""}`}
          >
            <div className="project__coverWrap">
              <img
                className="project__cover"
                src={project.cover}
                alt={`Cover ${project.title}`}
              />
            </div>

            <div className="project__body">
              <div className="project__top">
                <span className="project__type">{project.type}</span>
                {project.featured && (
                  <span className="project__featuredTag">Proyecto destacado</span>
                )}
              </div>

              <h3 className="project__title">{project.title}</h3>
              <p className="project__desc">{project.desc}</p>

              <div className="project__stack">
                {project.stack.map((tech) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    icon={techIcons[tech]}
                  />
                ))}
              </div>

              <div className="project__actions">
                {project.demo && (
                  <a
                    className="btn btn--primary"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demo
                  </a>
                )}

                {project.repo && (
                  <a
                    className="btn btn--ghost"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}