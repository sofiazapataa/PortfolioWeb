const base = import.meta.env.BASE_URL;

export default function FloatingCV() {
  return (
    <a
      className="floating-cv"
      href={`${base}pdf/sofia_zapata_cv.pdf`} // 👈 ruta corregida
      download="Sofia_Zapata_CV.pdf"         // 👈 nombre al descargar (opcional)
      title="Descargar CV"
    >
      Descargar CV
    </a>
  );
}