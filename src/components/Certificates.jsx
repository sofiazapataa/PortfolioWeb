export default function Certificates() {
  const certs = [
    {
      title: "Javascript",
      org: "CoderHouse",
      year: "2025",
      img: "/certificates/certificado-javascript.png",
      file: "/certificates/certificado-javascript.png",
    },
    {
      title: "Inglés Intermedio",
      org: "CoderHouse",
      year: "2024",
      img: "/certificates/certificado-ingles.png",
      file: "/certificates/certificado-ingles.png",
    },
    {
      title: "Diseño UX-UI",
      org: "CoderHouse",
      year: "2023",
      img: "/certificates/certificado-diseno-ux-ui.png",
      file: "/certificates/certificado-diseno-ux-ui.png",
    },
    {
      title: "Desarrollo Web",
      org: "CoderHouse",
      year: "2025",
      img: "/certificates/certificado-desarrolloWeb.png",
      file: "/certificates/certificado-desarrolloWeb.png",
    },
  ];

  return (
    <section id="certificates" className="certificates certificates--muted">
      <details className="certificates__details">
        <summary className="certificates__summary">
          Formación complementaria
        </summary>

        <p className="certificates__intro">
          Algunos cursos y certificados que forman parte de mi recorrido.
        </p>

        <div className="cert-grid">
          {certs.map((c, i) => (
            <article key={i} className="cert-card">
              <div className="cert-thumb">
                <img src={c.img} alt={`Certificado ${c.title}`} loading="lazy" />
              </div>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-meta">
                {c.org} · {c.year}
              </p>
              <a href={c.file} download className="cert-btn">
                Descargar
              </a>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}