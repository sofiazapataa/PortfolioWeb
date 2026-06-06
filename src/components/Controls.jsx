import { useApp } from "../context/AppContext";

export default function Controls() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();

  return (
    <div className="controls" role="group" aria-label="Controles de tema e idioma">
      <button
        className="controls__btn"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
        title={theme === "light" ? "Modo oscuro" : "Modo claro"}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <span className="controls__divider" aria-hidden="true" />

      <button
        className="controls__btn controls__btn--lang"
        onClick={toggleLang}
        aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
        title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
    </div>
  );
}
