import { useState } from "react";
import { useApp } from "../context/AppContext";
import t from "../i18n/translations";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const { lang } = useApp();
  const tx = t[lang].contact;
  const ref = useScrollReveal();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const myEmail = "sofizapata2004@gmail.com";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `${tx.mailSubject} - ${form.name || "Nuevo contacto"}`;
    const body = [
      `${tx.mailName}: ${form.name}`,
      `Email: ${form.email}`,
      "",
      `${tx.mailMessage}:`,
      form.message,
    ].join("\n");
    window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section ref={ref} className="card contact contact--pro reveal" id="contact">
      <div className="contact__header">
        <span className="contact__eyebrow">{tx.eyebrow}</span>
        <h2 className="card__title">{tx.title}</h2>
        <p className="card__text contact__intro">{tx.intro}</p>
      </div>

      <div className="contact__layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="name">{tx.labelName}</label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact-form__input"
              placeholder={tx.placeholderName}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="email">{tx.labelEmail}</label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact-form__input"
              placeholder={tx.placeholderEmail}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="message">{tx.labelMessage}</label>
            <textarea
              id="message"
              name="message"
              className="contact-form__textarea"
              placeholder={tx.placeholderMessage}
              value={form.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <div className="contact-form__actions">
            <button type="submit" className="btn btn--primary">{tx.btnSend}</button>
          </div>
        </form>

        <aside className="contact-card">
          <div className="contact-card__block">
            <p className="contact-card__label">{tx.cardEmailLabel}</p>
            <a className="contact-card__value" href={`mailto:${myEmail}`}>{myEmail}</a>
          </div>

          <div className="contact-card__block">
            <p className="contact-card__label">{tx.cardWorkLabel}</p>
            <ul className="contact-card__list">
              {tx.cardWorkItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="contact-card__block">
            <p className="contact-card__label">{tx.cardSocialLabel}</p>
            <div className="contact-card__social">
              <a
                className="contact-card__socialLink"
                href="https://www.linkedin.com/in/sofi-zapata-b58427265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="contact-card__socialLink"
                href="https://github.com/sofiazapataa"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="contact-card__actions">
            <a className="btn btn--ghost" href={`mailto:${myEmail}`}>{tx.cardBtn}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
