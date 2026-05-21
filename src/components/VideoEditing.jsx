export default function VideoEditing() {
  const items = [
    "Edición de reels y videos cortos para redes sociales",
    "Piezas promocionales para marcas, productos o servicios",
    "Cortes, ritmo, música, textos y orden visual",
    "Contenido pensado para Instagram, TikTok o presentaciones",
  ];

  return (
    <section className="card video-editing" id="video-editing">
      <div className="video-editing__header">
        <span className="video-editing__eyebrow">Trabajo audiovisual</span>
        <h2 className="card__title">Edición de video</h2>
        <p className="card__text video-editing__intro">
          Esta parte del portfolio reúne mi perfil audiovisual: edición de piezas
          limpias, dinámicas y pensadas para comunicar mejor una marca o una idea
          en formatos digitales.
        </p>
      </div>

      <div className="video-editing__grid">
        {items.map((item) => (
          <div className="video-editing__item" key={item}>
            <span className="video-editing__dot" aria-hidden="true"></span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="video-editing__note">
        <p>
          Más adelante acá también podemos sumar una mini galería con 2 o 3
          trabajos de edición para que esta sección tenga todavía más fuerza.
        </p>
      </div>

      <div className="video-editing__actions">
        <a className="btn btn--primary" href="mailto:sofizapata2004@gmail.com">
          Consultar por edición
        </a>
      </div>
    </section>
  );
}