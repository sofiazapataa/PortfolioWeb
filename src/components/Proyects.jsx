const base = import.meta.env.BASE_URL;

export default function Proyects() {
  const projects = [
    {
      title: "Tienda Skincare",
      desc: "Cuestionario de piel y recomendación de productos con una experiencia visual simple y clara.",
      cover: "covers/tiendaSkinCare.png",
      demo: "https://javascript-2-five.vercel.app/",
      repo: "",
      type: "Frontend",
      stack: [
        { name: "JavaScript", icon: "logoJS.jpg" },
        { name: "CSS", icon: "logoCSS.png" },
      ],
    },
    {
      title: "Tienda de Café",
      desc: "E-commerce simple de café con filtros y búsqueda de productos orientado a una navegación clara.",
      cover: "covers/cafe.png",
      demo: "https://tienda-de-cafe-amber.vercel.app/",
      repo: "",
      type: "Frontend",
      stack: [
        { name: "Figma", icon: "logoFigma.png" },
        { name: "CSS", icon: "logoCSS.png" },
      ],
    },
    {
      title: "Tienda de Bebidas",
      desc: "Catálogo de bebidas con cards y detalle de producto, desarrollado con Sass.",
      cover: "covers/bebidas.png",
      demo: "https://tienda-de-bebidas-01.vercel.app/",
      repo: "",
      type: "Frontend",
      stack: [
        { name: "CSS", icon: "logoCSS.png" },
        { name: "Sass", icon: "logoSass.png" },
      ],
    },
    {
      title: "Tienda Safaris",
      desc: "Catálogo visual de safaris con cards y detalle de producto, pensado para una navegación simple.",
      cover: "covers/tienda-safaris.png",
      demo: "https://tienda-safaris.vercel.app/",
      repo: "",
      type: "Frontend",
      stack: [
        { name: "Figma", icon: "logoFigma.png" },
        { name: "CSS", icon: "logoCSS.png" },
      ],
    },
    {
      title: "Tienda Multiskin",
      desc: "Catálogo de una tienda de cosmética vegana con backend, autenticación y panel de administración.",
      cover: "covers/Catalogo-kosmos.png",
      demo: "https://catalogo-kosmos.vercel.app/",
      repo: "",
      type: "Full Stack",
      stack: [
        { name: "CSS", icon: "logoCSS.png" },
        { name: "React", icon: "logoReact.png" },
        { name: "Figma", icon: "logoFigma.png" },
        { name: "Node", icon: "logoNode.png" },
        { name: "Express", icon: "logoExpress.png" },
        { name: "MongoDB", icon: "logoMongoDB.png" },
      ],
    },
  ];

  return (
    <section id="projects" className="card projects">
      <div className="projects__header">
        <div>
          <h2 className="card__title">Proyectos</h2>
          <p className="card__text projects__intro">
            Una selección de trabajos donde combiné diseño, maquetado, componentes y experiencia visual.
          </p>
        </div>
      </div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <article className="project" key={i}>
            <div className="project__coverWrap">
              {p.cover ? (
                <img
                  className="project__cover"
                  src={`${base}${p.cover}`}
                  alt={`Vista previa de ${p.title}`}
                  loading="lazy"
                />
              ) : (
                <div className="project__placeholder" aria-hidden="true" />
              )}
            </div>

            <div className="project__body">
              <div className="project__top">
                <span className="project__type">{p.type}</span>
              </div>

              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>

              {p.stack?.length > 0 && (
                <div className="project__stack">
                  {p.stack.map((tech) => (
                    <span className="tech-badge" key={tech.name}>
                      <img
                        className="tech-badge__icon"
                        src={`${base}logos/${tech.icon}`}
                        alt={tech.name}
                        loading="lazy"
                      />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="project__actions">
              {p.demo && (
                <a
                  className="btn btn--primary"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo
                </a>
              )}

              {p.repo && (
                <a
                  className="btn btn--ghost"
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver repo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}