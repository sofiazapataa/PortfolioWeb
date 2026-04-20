// src/components/Proyects.jsx
const base = import.meta.env.BASE_URL;

export default function Proyects() {
  const projects = [
    {
      title: "Tienda Skincare",
      desc: "Cuestionario de piel y recomendación de productos.",
      cover: "covers/tiendaSkinCare.png",
      demo: "https://javascript-2-five.vercel.app/",
      repo: "",
      stack: [ "logoJS.jpg", "logoCSS.png"],
    },
    {
      title: "Tienda de Café",
      desc: "E-commerce simple de café con filtros y búsqueda.",
      cover: "covers/cafe.png",
      demo: "https://tienda-de-cafe-amber.vercel.app/",
      repo: "",
      stack: ["figma-logo.png", "logoCSS.png"],
    },
    {
      title: "Tienda de Bebidas",
      desc: "Catálogo de bebidas, cards y detalle de producto. creado con Sass.",
      cover: "covers/bebidas.png",
      demo: "https://tienda-de-bebidas-01.vercel.app/",
      repo: "",
      stack: [ "logoCSS.png", "logoSass.png" ],
    },
      {
      title: "Tienda Safaris",
      desc: "Catálogo de safaris por el mundo, cards y detalle de producto.",
      cover: "covers/tienda-safaris.png",
      demo: "https://tienda-safaris.vercel.app/",
      repo: "",
      stack: ["figma-logo.png", "logoCSS.png" ],
    },
    {
      title: "Tienda Multiskin",
      desc: "Catálogo de una tienda de cosmetica vegana. Con backend, panel admin, y autenticación.",
      cover: "covers/Catalogo-kosmos.png",
      demo: "https://catalogo-kosmos.vercel.app/",
      repo: "",
      stack: [ "logoCSS.png", "logoReact.png","figma-logo.png", "logoNode.png", "logoExpress.png", "logoMongoDB.png" ],
    },
    // agregá más objetos con el mismo formato ↑
  ];

  return (
    <section id="projects" className="card projects">
      <h2 className="card__title">Proyectos</h2>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <div className="project" key={i}>
            <div className="project__coverWrap">
              {p.cover ? (
                <img
                  className="project__cover"
                  src={`${base}${p.cover}`}
                  alt={`Cover ${p.title}`}
                />
              ) : (
                <div className="project__placeholder" aria-hidden="true" />
              )}
            </div>

            <div className="project__body">
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>

              {p.stack?.length > 0 && (
                <div className="project__stack">
                  {p.stack.map((f) => (
                    <img
                      key={f}
                      className="project__stackLogo"
                      src={`${base}logos/${f}`}
                      alt=""
                      loading="lazy"
                    />
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
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  className="btn btn--ghost"
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
