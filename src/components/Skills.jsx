const base = import.meta.env.BASE_URL;

const skills = [
  { name: "Bootstrap", file: "logoBoostrap.png" },
  { name: "JavaScript", file: "logoJS.jpg" },
  { name: "Figma", file: "logoFigma.png" },
  { name: "React", file: "logoReact.png" },
  { name: "Sass", file: "logoSass.png" },
  { name: "Git", file: "git-logo.png" },
];

export default function Skills() {
  return (
    <section className="card skills">
      <h2 className="card__title">Skills</h2>
      <p className="card__text skills__intro">
        Tecnologías y herramientas con las que desarrollo interfaces y prototipos.
      </p>

      <div className="skills__grid">
        {skills.map((s) => (
          <div className="skill" key={s.name} title={s.name}>
            <img
              src={`${base}logos/${s.file}`}
              alt={s.name}
              className="skill__img"
              onError={(e) => (e.currentTarget.style.opacity = 0.3)}
            />
            <span className="skill__label">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}