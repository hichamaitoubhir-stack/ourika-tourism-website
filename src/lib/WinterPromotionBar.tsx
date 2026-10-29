import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LangContext } from "../lib/i18n";
import "../App.css";

export default function WinterPromotionBar() {
  const { lang } = useContext(LangContext);
  const [isVisible, setIsVisible] = useState(true);

  const messages = {
    en: {
      title: "Don't miss our winter promotion 2027!",
      detail: "Enjoy 30% OFF authentic Ourika Valley & Atlas Mountains experiences.",
      button: "Explore offers",
    },
    fr: {
      title: "Ne manquez pas notre promotion d’hiver 2027 !",
      detail: "Profitez de -30 % sur nos expériences dans la vallée de l’Ourika et l’Atlas.",
      button: "Voir les offres",
    },
    es: {
      title: "¡No te pierdas nuestra promoción de invierno 2027!",
      detail: "Ahorra un 30 % en experiencias auténticas en Ourika y el Atlas.",
      button: "Ver ofertas",
    },
  };

  const content = messages[lang as keyof typeof messages] ?? messages.en;

  if (!isVisible) return null;

  return (
            <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-3">
              <div className="relative flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl bg-[#1A3A2F] px-10 py-4 text-center text-white shadow-sm">

              <button
                type="button"
                onClick={() => setIsVisible(false)}
                aria-label="Close promotion"
                className="absolute right-0 top-0 z-20
                flex h-9 w-9 items-center justify-center
                rounded-full bg-white text-[#1A3A2F]
                text-2xl font-bold shadow-sm
                cursor-pointer"
>
  ×
</button>

        <span className="text-sm font-bold">
          ❄️ {content.title}
        </span>

        <span className="text-sm text-white/80">
          {content.detail}
        </span>

        <Link
          to="/experiences"
          className="group relative isolate inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-gradient-to-r from-[#D9773A] via-[#F5B16D] to-[#D9773A] bg-[length:200%_auto] px-6 py-3 text-sm font-extrabold text-white shadow-[0_4px_18px_rgba(217,119,58,0.35)] transition-all duration-500 hover:bg-right hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 -z-10 animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <span>{content.button}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>
    </div>
  );
}