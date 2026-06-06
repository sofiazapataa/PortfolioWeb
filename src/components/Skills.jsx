import { useApp } from "../context/AppContext";
import t from "../i18n/translations";

const base = import.meta.env.BASE_URL;

export default function Skills() {
  const { lang } = useApp();
  const tx = t[lang].skills;

  const items = [
    { name: "Bootstrap", icon: `${base}logos/logoBoostrap.png` },
    { name: "JavaScript", icon: `${base}logos/logoJS.jpg` },
    { name: "Figma", icon: `${base}logos/logoFigma.png` },
    { name: "React", icon: `${base}logos/logoReact.png` },
    { name: "Sass", icon: `${base}logos/logoSass.png` },
    { name: "Git", icon: `${base}logos/git-logo.png` },
    { name: "CSS", icon: `${base}logos/logoCSS.png` },
    { name: "Claude AI", icon: `${base}logos/logoClaude.png` },
  ];

  const loopItems = [...items, ...items];

  return (
    <section className="card skills-carousel" id="skills">
      <div className="skills-carousel__header">
        <span className="skills-carousel__eyebrow">{tx.eyebrow}</span>
        <h2 className="card__title">{tx.title}</h2>
        <p className="card__text skills-carousel__subtitle">{tx.subtitle}</p>
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
                  loading="lazy"
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
