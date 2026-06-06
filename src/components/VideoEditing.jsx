import { useApp } from "../context/AppContext";
import t from "../i18n/translations";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function VideoEditing() {
  const { lang } = useApp();
  const tx = t[lang].videoEditing;
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="card video-editing reveal" id="video-editing">
      <div className="video-editing__header">
        <span className="video-editing__eyebrow">{tx.eyebrow}</span>
        <h2 className="card__title">{tx.title}</h2>
        <p className="card__text video-editing__intro">{tx.intro}</p>
      </div>

      <div className="video-editing__grid">
        {tx.items.map((item) => (
          <div className="video-editing__item" key={item}>
            <span className="video-editing__dot" aria-hidden="true"></span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="video-editing__actions">
        <a className="btn btn--primary" href="mailto:sofizapata2004@gmail.com">
          {tx.btn}
        </a>
      </div>
    </section>
  );
}
