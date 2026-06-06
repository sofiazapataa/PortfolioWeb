import { useApp } from "../context/AppContext";
import t from "../i18n/translations";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function FocusAreas() {
  const { lang } = useApp();
  const tx = t[lang].focusAreas;
  const ref = useScrollReveal();

  const goProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const goVideo = () => {
    document.querySelector("#video-editing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="card focus-areas reveal" id="focus-areas">
      <div className="focus-areas__header">
        <span className="focus-areas__eyebrow">{tx.eyebrow}</span>
        <h2 className="card__title">{tx.title}</h2>
        <p className="card__text focus-areas__intro">{tx.intro}</p>
      </div>

      <div className="focus-areas__grid">
        <article className="focus-card focus-card--dev">
          <div className="focus-card__top">
            <span className="focus-card__tag">{tx.devTag}</span>
          </div>
          <h3 className="focus-card__title">{tx.devTitle}</h3>
          <p className="focus-card__text">{tx.devText}</p>
          <ul className="focus-card__list">
            {tx.devList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="btn btn--primary" onClick={goProjects}>
            {tx.devBtn}
          </button>
        </article>

        <article className="focus-card focus-card--video">
          <div className="focus-card__top">
            <span className="focus-card__tag">{tx.videoTag}</span>
          </div>
          <h3 className="focus-card__title">{tx.videoTitle}</h3>
          <p className="focus-card__text">{tx.videoText}</p>
          <ul className="focus-card__list">
            {tx.videoList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="btn btn--primary" onClick={goVideo}>
            {tx.videoBtn}
          </button>
        </article>
      </div>
    </section>
  );
}
