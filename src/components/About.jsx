import { useApp } from "../context/AppContext";
import t from "../i18n/translations";

export default function About() {
  const { lang } = useApp();
  const tx = t[lang].about;

  return (
    <section className="card about about--next" id="about">
      <span className="about__stripe" aria-hidden="true"></span>

      <div className="about__header">
        <span className="about__eyebrow">{tx.eyebrow}</span>
        <h2 className="card__title">{tx.title}</h2>
        <p className="card__text about__intro">{tx.intro}</p>
      </div>

      <div className="about__cards">
        {tx.cards.map((card) => (
          <article className="about__infoCard" key={card.title}>
            <h3 className="about__infoTitle">{card.title}</h3>
            <p className="about__infoText">{card.text}</p>
          </article>
        ))}
      </div>

      <div className="about__chips">
        {tx.chips.map((chip) => (
          <span className="about__chip" key={chip}>{chip}</span>
        ))}
      </div>
    </section>
  );
}
