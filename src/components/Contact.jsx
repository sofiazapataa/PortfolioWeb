export default function Contact() {
  return (
    <section className="card contact">
      <h2 className="card__title">Contacto</h2>
      <p className="card__text contact__text">
        Estoy disponible para proyectos freelance y para seguir creciendo en desarrollo frontend.
      </p>
      <p className="card__text contact__mail">
        Podés escribirme a <b>sofizapata2004@gmail.com</b>
      </p>

      <div className="contact__actions">
        <a className="btn btn--primary" href="mailto:sofizapata2004@gmail.com">
          Enviar mail
        </a>

        <a
          className="btn btn--ghost"
          href="https://www.instagram.com/_sofizapata/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}