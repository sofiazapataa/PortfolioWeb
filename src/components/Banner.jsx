const base = import.meta.env.BASE_URL;

export default function Banner({
  name = "Sofía Zapata",
  photoUrl = `${base}logos/FotoPerfil.png`,
}) {
  const copyPageLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("¡Link copiado!");
    } catch {
      alert("No pude copiar el link :(");
    }
  };

  const goProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="banner">
      <div className="container banner__grid">
        <div className="banner__content">
          <p className="banner__eyebrow">Disponible para trabajos freelance</p>
          <h1 className="banner__title">Hola, soy {name}</h1>
          <p className="banner__subtitle">
            Desarrolladora Frontend con foco en React y UI/UX. Creo portfolios,
            landing pages y catálogos web modernos, responsive y pensados para
            mostrar marcas, productos y servicios de forma clara.
          </p>

          <div className="banner__actions">
            <button className="btn btn--primary" onClick={goProjects}>
              Ver proyectos
            </button>

            <a className="btn btn--ghost" href="mailto:sofizapata2004@gmail.com">
              Escribime
            </a>

            <button className="btn btn--ghost" onClick={copyPageLink}>
              Copiar link
            </button>
          </div>
        </div>

        <div className="banner__avatarWrap">
          <img className="banner__avatar" src={photoUrl} alt={name} />
        </div>
      </div>
    </header>
  );
}