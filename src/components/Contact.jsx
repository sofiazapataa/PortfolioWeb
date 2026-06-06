import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const myEmail = "sofizapata2004@gmail.com";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Consulta desde portfolio - ${form.name || "Nuevo contacto"}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Mensaje:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section className="card contact contact--pro" id="contact">
      <div className="contact__header">
        <span className="contact__eyebrow">Disponible para freelance</span>
        <h2 className="card__title">Trabajemos juntos</h2>
        <p className="card__text contact__intro">
          Si tenés una idea, una marca o un proyecto para mostrar, podés
          escribirme desde acá. Trabajo tanto en desarrollo web como en edición
          de video.
        </p>
      </div>

      <div className="contact__layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact-form__input"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact-form__input"
              placeholder="tunombre@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-form__textarea"
              placeholder="Contame sobre tu proyecto..."
              value={form.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <div className="contact-form__actions">
            <button type="submit" className="btn btn--primary">
              Enviar mensaje
            </button>
          </div>
        </form>

        <aside className="contact-card">
          <div className="contact-card__block">
            <p className="contact-card__label">Email directo</p>
            <a className="contact-card__value" href={`mailto:${myEmail}`}>
              {myEmail}
            </a>
          </div>

          <div className="contact-card__block">
            <p className="contact-card__label">Qué hago</p>
            <ul className="contact-card__list">
              <li>Desarrollo web</li>
              <li>Landing pages y portfolios</li>
              <li>Edición de video y contenido visual</li>
            </ul>
          </div>

          <div className="contact-card__block">
            <p className="contact-card__label">Redes</p>
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
            <a className="btn btn--ghost" href={`mailto:${myEmail}`}>
              Escribirme por mail
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}