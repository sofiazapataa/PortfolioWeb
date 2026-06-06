import { useApp } from "../context/AppContext";
import t from "../i18n/translations";

function TechBadge({ label, icon }) {
  return (
    <span className="project-popup__badge">
      {icon ? (
        <img className="project-popup__badgeIcon" src={icon} alt={label} />
      ) : null}
      <span>{label}</span>
    </span>
  );
}

export default function ProjectModal({ project, onClose, techIcons }) {
  const { lang } = useApp();
  const tx = t[lang].projects;

  if (!project) return null;

  const description = tx.descriptions[project.title] || project.desc;

  return (
    <div
      className="project-popup"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="project-popup__dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-popup__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="project-popup__media">
          {project.cover ? (
            <img
              src={project.cover}
              alt={`${project.title}`}
              className="project-popup__image"
            />
          ) : (
            <div className="project-popup__placeholder">
              <span>{project.title}</span>
            </div>
          )}
        </div>

        <div className="project-popup__content">
          <div className="project-popup__top">
            <span className="project-popup__type">{project.type}</span>
            {project.featured ? (
              <span className="project-popup__featured">{tx.labelFeatured}</span>
            ) : null}
          </div>

          <h3 className="project-popup__title">{project.title}</h3>
          <p className="project-popup__description">{description}</p>

          <div className="project-popup__stack">
            {project.stack.map((tech) => (
              <TechBadge key={tech} label={tech} icon={techIcons[tech]} />
            ))}
          </div>

          <div className="project-popup__actions">
            {project.demo ? (
              <a
                className="btn btn--primary"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tx.modal.btnDemo}
              </a>
            ) : (
              <span className="btn btn--ghost btn--disabled">
                {lang === "es" ? "Demo pronto" : "Demo coming soon"}
              </span>
            )}

            {project.repo ? (
              <a
                className="btn btn--ghost"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tx.modal.btnRepo}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
