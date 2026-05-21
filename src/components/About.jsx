export default function About() {
  const cards = [
    {
      title: "Frontend",
      text: "Desarrollo interfaces claras, prolijas y responsive con foco en una buena experiencia visual.",
    },
    {
      title: "Diseño UI",
      text: "Me interesa que cada web comunique mejor una marca, proyecto o producto desde lo visual.",
    },
    {
      title: "Freelance",
      text: "Busco trabajar en proyectos donde pueda aportar diseño, estructura y una presentación más profesional.",
    },
  ];

  return (
    <section className="card about about--next" id="about">
      <span className="about__stripe" aria-hidden="true"></span>

      <div className="about__header">
        <span className="about__eyebrow">Sobre mí</span>
        <h2 className="card__title">Lo que aporto a un proyecto</h2>
        <p className="card__text about__intro">
          Soy Sofía, desarrolladora frontend en formación. Me enfoco en combinar
          React, diseño visual y una estructura clara para crear sitios web
          modernos, bien presentados y fáciles de usar.
        </p>
      </div>

      <div className="about__cards">
        {cards.map((card) => (
          <article className="about__infoCard" key={card.title}>
            <h3 className="about__infoTitle">{card.title}</h3>
            <p className="about__infoText">{card.text}</p>
          </article>
        ))}
      </div>

      <div className="about__chips">
        <span className="about__chip">UI visualmente cuidada</span>
        <span className="about__chip">Responsive</span>
        <span className="about__chip">Contenido digital</span>
      </div>
    </section>
  );
}