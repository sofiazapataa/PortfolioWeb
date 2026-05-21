export default function Contact() {
  return (
    <section className="card contact" id="contact">
      <span className="contact__eyebrow">Disponible para freelance</span>

      <h2 className="card__title">Contacto</h2>

      <p className="card__text contact__text">
        Estoy disponible para proyectos freelance tanto de desarrollo web como
        de edición de video. Si tenés una idea, una marca o un proyecto para
        mostrar, escribime.
      </p>

      <div className="contact__mailBox">
        <p className="contact__mailLabel">Email</p>
        <p className="contact__mail">sofizapata2004@gmail.com</p>
      </div>

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