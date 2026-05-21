export default function Services() {
  const services = [
    {
      title: "Landing pages",
      text: "Páginas claras, modernas y responsive para marcas, emprendimientos o servicios que necesitan una presencia online prolija.",
    },
    {
      title: "Portfolios web",
      text: "Sitios personales o profesionales pensados para mostrar trabajos, experiencia y transmitir una identidad visual cuidada.",
    },
    {
      title: "Catálogos / tiendas online",
      text: "Interfaces visuales para mostrar productos, colecciones o servicios con una navegación simple y bien ordenada.",
    },
    {
      title: "Maquetado responsive",
      text: "Adaptación de interfaces para desktop, tablet y mobile priorizando estructura, legibilidad y buena experiencia de usuario.",
    },
  ];

  return (
    <section className="card services" id="services">
      <div className="section-heading">
        <span className="section-heading__eyebrow">Servicios freelance</span>
        <h2 className="card__title">Qué puedo hacer por tu proyecto</h2>
        <p className="card__text services__intro">
          Trabajo en desarrollo frontend y diseño visual de interfaces,
          buscando que cada web se vea prolija, moderna y fácil de usar.
        </p>
      </div>

      <div className="services__grid">
        {services.map((item) => (
          <article className="service-card" key={item.title}>
            <div className="service-card__icon" aria-hidden="true">
              ✦
            </div>
            <h3 className="service-card__title">{item.title}</h3>
            <p className="service-card__text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}