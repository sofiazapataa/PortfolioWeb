import { useApp } from "../context/AppContext";
import t from "../i18n/translations";

const base = import.meta.env.BASE_URL;

export default function FloatingCV() {
  const { lang } = useApp();
  const tx = t[lang].floatingCV;

  return (
    <a
      className="floating-cv"
      href={`${base}pdf/sofia_zapata_cv.pdf`}
      download="Sofia_Zapata_CV.pdf"
      title={tx.label}
    >
      {tx.label}
    </a>
  );
}
