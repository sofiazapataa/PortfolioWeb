import { useApp } from "../context/AppContext";
import t from "../i18n/translations";

const base = import.meta.env.BASE_URL;

export default function Certificates() {
  const { lang } = useApp();
  const tx = t[lang].certificates;

  const certs = [
    {
      title: "Javascript",
      org: "CoderHouse",
      year: "2025",
      img: `${base}certificates/certificado-javascript.png`,
      file: `${base}certificates/certificado-javascript.png`,
    },
    {
      title: "Inglés Intermedio",
      org: "CoderHouse",
      year: "2024",
      img: `${base}certificates/certificado-ingles.png`,
      file: `${base}certificates/certificado-ingles.png`,
    },
    {
      title: "Diseño UX-UI",
      org: "CoderHouse",
      year: "2023",
      img: `${base}certificates/certificado-diseno-ux-ui.png`,
      file: `${base}certificates/certificado-diseno-ux-ui.png`,
    },
    {
      title: "Desarrollo Web",
      org: "CoderHouse",
      year: "2025",
      img: `${base}certificates/certificado-desarrolloWeb.png`,
      file: `${base}certificates/certificado-desarrolloWeb.png`,
    },
  ];

  return (
    <section id="certificates" className="certificates certificates--muted">
      <details className="certificates__details">
        <summary className="certificates__summary">{tx.summary}</summary>

        <p className="certificates__intro">{tx.intro}</p>

        <div className="cert-grid">
          {certs.map((c) => (
            <article key={c.title} className="cert-card">
              <div className="cert-thumb">
                <img src={c.img} alt={`Certificado ${c.title}`} loading="lazy" />
              </div>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-meta">{c.org} · {c.year}</p>
              <a href={c.file} download className="cert-btn">{tx.btnDownload}</a>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
