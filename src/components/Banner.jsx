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
        <div>
          <h1 className="banner__title">hola! soy {name}</h1>
          <p className="banner__subtitle">Frontend · React · UI/UX</p>

          <div className="banner__actions">
            <button className="btn btn--primary" onClick={copyPageLink}>
              Copiar link de esta página
            </button>
            <button className="btn btn--ghost" onClick={goProjects}>
              Ver proyectos
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
