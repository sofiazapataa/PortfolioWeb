import { useEffect, useState } from "react";
import { Navigation, EffectCoverflow, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectModal from "./ProjectModal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const base = import.meta.env.BASE_URL;

function TechBadge({ label, icon }) {
  return (
    <span className="project-cf-card__badge">
      {icon ? (
        <img className="project-cf-card__badgeIcon" src={icon} alt={label} />
      ) : null}
      <span>{label}</span>
    </span>
  );
}

function Cover({ src, alt, title }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="project-cf-card__placeholder">
        <span>{title}</span>
      </div>
    );
  }

  return (
    <img
      className="project-cf-card__cover"
      src={src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}

export default function Proyects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const techIcons = {
    JavaScript: `${base}logos/logoJS.jpg`,
    CSS: `${base}logos/logoCSS.png`,
    Figma: `${base}logos/logoFigma.png`,
    Sass: `${base}logos/logoSass.png`,
    React: `${base}logos/logoReact.png`,
    Node: `${base}logos/logoNode.png`,
    Express: `${base}logos/logoExpress.png`,
    MongoDB: `${base}logos/logoMongoDB.png`,
    HTML: null,
    "Claude AI": `${base}logos/logoClaude.png`,
  };

  const projects = [
    {
      title: "Cine Paseo Aldrey",
      type: "UI/UX Design",
      desc: "Rediseño completo de la experiencia digital del único cine del shopping en Mar del Plata — de la cartelera al checkout — resolviendo duplicados, redirección externa y ausencia de diseño mobile.",
      cover: `${base}covers/cine-paseo-aldrey.png`,
      demo: "https://presentacion-redise-o-cine.vercel.app/",
      repo: "https://github.com/sofiazapataa/presentacion-redise-o-cine.git",
      stack: ["Figma", "HTML", "Claude AI"],
      featured: true,
    },
    {
      title: "Tienda Multiskin",
      type: "Full Stack",
      desc: "Catálogo de una tienda de cosmética vegana con backend, autenticación y panel de administración. Es el proyecto más completo del portfolio y combina frontend, backend y presentación visual.",
      cover: `${base}covers/Catalogo-kosmos.png`,
      demo: "https://catalogo-kosmos.vercel.app/",
      repo: "https://github.com/sofiazapataa/catalogo-cosmos-2.0.git",
      stack: ["CSS", "React", "Figma", "Node", "Express", "MongoDB"],
      featured: true,
    },
    {
      title: "Tienda Skincare",
      type: "Frontend",
      desc: "Cuestionario de piel y recomendación de productos con una experiencia visual simple, clara y enfocada en la navegación.",
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
      cover: `${base}covers/cafe.png`,
      demo: "",
      repo: "",
      stack: ["Figma", "CSS"],
      featured: false,
    },
    {
      title: "Tienda de Bebidas",
      type: "Frontend",
      desc: "Catálogo de bebidas con cards y detalle de producto, desarrollado con Sass y pensado para una estética más comercial.",
      cover: `${base}covers/bebidas.png`,
      demo: "",
      repo: "",
      stack: ["CSS", "Sass"],
      featured: false,
    },
    {
      title: "Tienda Safaris",
      type: "Frontend",
      desc: "Catálogo visual de safaris con cards y detalle de producto, diseñado para una navegación simple y atractiva.",
      cover: `${base}covers/tienda-safaris.png`,
      demo: "",
      repo: "",
      stack: ["Figma", "CSS"],
      featured: false,
    },
  ];

  return (
    <>
      <section className="card projects-coverflow" id="projects">
        <div className="projects-coverflow__header">
          <span className="projects-coverflow__eyebrow">Desarrollo web</span>
          <h2 className="card__title">Proyectos</h2>
          <p className="card__text projects-coverflow__intro">
            Podés recorrer mis trabajos con flechas y abrir cada proyecto para
            ver su detalle completo.
          </p>
        </div>

        <div className="projects-coverflow__slider">
          <Swiper
            modules={[Navigation, EffectCoverflow, A11y]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            speed={650}
            slidesPerView={1.02}
            spaceBetween={14}
            navigation={{
              prevEl: ".projects-coverflow__arrow--prev",
              nextEl: ".projects-coverflow__arrow--next",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -24,
              depth: 165,
              modifier: 1.1,
              slideShadows: false,
              scale: 0.82,
            }}
            breakpoints={{
              700: {
                slidesPerView: 1.18,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 1.42,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 1.72,
                spaceBetween: 24,
              },
            }}
            className="projects-coverflow__instance"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <article className="project-cf-card">
                  <div className="project-cf-card__media">
                    <Cover
                      src={project.cover}
                      alt={`Vista previa de ${project.title}`}
                      title={project.title}
                    />
                  </div>

                  <div className="project-cf-card__body">
                    <div className="project-cf-card__top">
                      <span className="project-cf-card__type">{project.type}</span>
                      {project.featured ? (
                        <span className="project-cf-card__featured">
                          Destacado
                        </span>
                      ) : null}
                    </div>

                    <h3 className="project-cf-card__title">{project.title}</h3>
                    <p className="project-cf-card__desc">{project.desc}</p>

                    <div className="project-cf-card__stack">
                      {project.stack.map((tech) => (
                        <TechBadge
                          key={tech}
                          label={tech}
                          icon={techIcons[tech]}
                        />
                      ))}
                    </div>

                    <div className="project-cf-card__actions">
                      <button
                        type="button"
                        className="btn btn--primary"
                        onClick={() => setSelectedProject(project)}
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="projects-coverflow__nav">
          <button
            type="button"
            className="projects-coverflow__arrow projects-coverflow__arrow--prev"
            aria-label="Proyecto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="projects-coverflow__arrow projects-coverflow__arrow--next"
            aria-label="Proyecto siguiente"
          >
            ›
          </button>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        techIcons={techIcons}
      />
    </>
  );
}